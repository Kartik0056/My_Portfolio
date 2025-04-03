
import { useRef, useEffect } from "react"

const ExperienceItem = ({ title, company, period, location, description, isLast }) => {
  return (
    <div className="relative pl-10 pb-10">
      {!isLast && <div className="experience-line"></div>}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary"></div>
      <div className="card-hover bg-card p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-primary font-medium">{company}</p>
        <p className="text-sm text-foreground/70 mb-4">
          {period} | {location}
        </p>
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-foreground/80">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Experience = () => {
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

  const workExperience = [
    {
      title: "Full Stack Developer",
      company: "LifeLayer Health Solution PVT. LTD.",
      period: "08/2023 - 01/2025",
      location: "Gurgaon, India",
      description: [
        "Developed and launched a fully functional e-commerce platform featuring vendor management, categorized product display, and a seamless user experience.",
        "Integrated features such as cart management, wishlist, and QR code scanning for product details.",
        "Created an advanced symptom checker for medical diagnostics, enabling doctors to gather patient information through dynamic questionnaires.",
        "Developed custom questionnaires for health assessments, streamlining data collection for patient evaluations.",
      ],
    },
    {
      title: "Trainer",
      company: "SB Infotech Pvt. Ltd.",
      period: "02/2022 - 08/2023",
      location: "Saharanpur, India",
      description: [
        "Trained students on full stack development best practices using modern technologies such as React.js, Vue.js, and Node.js.",
      ],
    },
  ]

  const education = [
    {
      title: "B.Tech (Computer Science and Engineering)",
      company: "Dev Bhoomi Group of institution Saharanpur",
      period: "04/2015 - 07/2019",
      location: "Saharanpur, India",
      description: ["Member of NSS", "Contributed to organize fests within the college"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div ref={sectionRef} className="container mx-auto px-4 transition-all duration-1000 opacity-0 translate-y-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/20 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="relative">
              {workExperience.map((exp, index) => (
                <ExperienceItem key={index} {...exp} isLast={index === workExperience.length - 1} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/20 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="relative">
              {education.map((edu, index) => (
                <ExperienceItem key={index} {...edu} isLast={index === education.length - 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

