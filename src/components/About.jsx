"use client"

import { useRef, useEffect } from "react"

const About = () => {
  const sectionRef = useRef(null)
  const Myphoto = "../public/assets/myphoto.jpeg"
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          entry.target.classList.remove("opacity-0", "translate-y-10")
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="py-20 bg-background">
      <div ref={sectionRef} className="container mx-auto px-4 transition-all duration-1000 opacity-0 translate-y-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img
                  src={Myphoto}
                  alt="Kartik Kumar"
                  className="w-4/5 h-4/5 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer</h3>
              <p className="text-foreground/80 mb-6">
                I'm an experienced Full Stack Developer with 2 years of expertise in building scalable web applications.
                Currently working at Life Layer Health Solutions Pvt. Ltd., I deliver innovative health tech solutions
                with proficiency in both front-end and back-end development.
              </p>
              <p className="text-foreground/80 mb-6">
                My passion lies in creating intuitive, efficient, and visually appealing web applications that solve
                real-world problems. I enjoy working with modern technologies and continuously learning new skills to
                stay at the forefront of web development.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-foreground/80">Kartik Kumar</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-foreground/80">kumarkartik0056@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-foreground/80">Gurgaon, India</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-primary">Open to opportunities</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://linkedin.com/in/kartikkumar0056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Kartik0056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

