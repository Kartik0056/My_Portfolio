"use client"

import { useRef, useEffect } from "react"

const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className="card-hover bg-card rounded-lg overflow-hidden shadow-md">
      <div className="aspect-video bg-muted overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=300&width=600"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href="#" className="flex items-center gap-1 text-primary hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Live Demo</span>
          </a>
          <a href="#" className="flex items-center gap-1 text-foreground/80 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)

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

  const projects = [
    {
      title: "Online Examination System",
      description:
        "A comprehensive online examination platform with various question types, automated scoring, and instant feedback.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    },
    {
      title: "Symptom Checker",
      description:
        "A medical diagnostic tool that allows doctors to add symptoms and questions to gather patient information for accurate diagnosis.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Vue.js", "Vuex", "Node.js", "MySQL"],
    },
    {
      title: "E-commerce Platform",
      description:
        "A fully functional e-commerce platform with vendor management, product categorization, cart management, and QR code scanning.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React.js", "Redux", "Node.js", "MongoDB"],
    },
    {
      title: "Health Assessment Questionnaire",
      description:
        "Custom questionnaires for health assessments, streamlining data collection for patient evaluations.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Vue.js", "Node.js", "MySQL", "Socket.io"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div ref={sectionRef} className="container mx-auto px-4 transition-all duration-1000 opacity-0 translate-y-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

