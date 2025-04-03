
import { useRef, useEffect } from "react"

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="card-hover bg-card p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Redux",
        "Vue.js",
        "Vuex",
        "Vue Router",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs", "WebSocket", "Socket.io"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL", "MongoDB"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Webpack", "Vite", "npm", "yarn"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div ref={sectionRef} className="container mx-auto px-4 transition-all duration-1000 opacity-0 translate-y-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

