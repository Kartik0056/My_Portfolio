
import { useEffect, useRef } from "react"
import * as THREE from "three"

const Hero = () => {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Set up Three.js scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create a sphere geometry
    const geometry = new THREE.SphereGeometry(3, 64, 64)

    // Create a material with custom shader
    const material = new THREE.MeshStandardMaterial({
      color: "#9333ea",
      roughness: 0.5,
      metalness: 0.7,
      wireframe: true,
    })

    // Create a mesh with the geometry and material
    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Add lights
    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(0, 10, 10)
    scene.add(pointLight)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Position camera
    camera.position.z = 10

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      sphere.rotation.x += 0.003
      sphere.rotation.y += 0.005

      renderer.render(scene, camera)
    }

    animate()

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      scene.remove(sphere)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-gradient"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium mb-4 animate-fadeIn">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slideUp">Kartik Kumar</h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 mb-8 animate-slideUp delay-200">
            Full Stack Developer specializing in <span className="text-primary">Vue.js</span>,{" "}
            <span className="text-primary">React.js</span>, and <span className="text-primary">Node.js</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn delay-400">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}

export default Hero

