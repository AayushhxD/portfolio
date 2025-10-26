"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function Projects() {
  const [flipped, setFlipped] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Customer Relationship Management",
      subtitle: "Enterprise Software Platform",
      period: "Apr 2024 - Jun 2024",
      shortDescription:
        "Architected a CRM system using Flutter for cross-platform compatibility with customer data management, lead tracking, and sales pipeline visualization.",
      fullDescription: [
        "Designed and implemented a comprehensive CRM platform using Flutter to ensure seamless functionality across iOS and Android devices.",
        "Developed customer data management system with advanced filtering, search, and sorting capabilities for efficient customer relationship handling.",
        "Built interactive sales pipeline visualization dashboard enabling real-time tracking of leads through different sales stages.",
        "Integrated Firebase backend for real-time data synchronization and secure cloud storage of customer information.",
        "Implemented role-based access control and data encryption to ensure enterprise-level security standards.",
        "Created intuitive UI/UX with smooth animations and responsive design patterns for optimal user experience.",
      ],
      tech: ["Flutter", "Firebase", "Dart", "REST APIs"],
      keyFeatures: ["Customer Database", "Lead Tracking", "Sales Pipeline", "Real-time Sync", "Analytics Dashboard"],
    },
    {
      title: "Diet Planner Application",
      subtitle: "Desktop Application",
      period: "Jun 2023 - Aug 2023",
      shortDescription:
        "Developed a desktop application using JavaFX for personalized diet planning with MySQL integration and intelligent meal recommendations.",
      fullDescription: [
        "Built a full-featured desktop application using JavaFX with a modern, intuitive graphical user interface.",
        "Implemented sophisticated algorithms for calorie calculation based on user health goals, age, weight, and activity level.",
        "Designed MySQL database schema to store user profiles, meal plans, nutritional data, and dietary preferences.",
        "Created intelligent meal recommendation engine that suggests balanced meals based on user preferences and dietary restrictions.",
        "Developed nutrition tracking features with detailed breakdowns of macronutrients (proteins, carbs, fats) and micronutrients.",
        "Integrated data visualization charts to display nutritional progress and health metrics over time.",
      ],
      tech: ["JavaFX", "MySQL", "Java", "JDBC"],
      keyFeatures: ["Meal Planning", "Calorie Tracking", "Nutrition Analysis", "User Profiles", "Progress Charts"],
    },
    {
      title: "NYAYY – Legal Assistance Mobile App",
      subtitle: "Mobile Application",
      period: "Dec 2023 - Feb 2024",
      shortDescription:
        "Engineered a mobile application providing legal assistance with secure data handling and user authentication for confidential information management.",
      fullDescription: [
        "Developed a native Android application providing comprehensive legal assistance and information services.",
        "Implemented secure user authentication system with encrypted password storage and session management.",
        "Built legal document management system allowing users to upload, organize, and access important legal documents securely.",
        "Created consultation booking feature enabling users to schedule appointments with legal professionals.",
        "Integrated Firebase for real-time notifications about consultation updates and legal alerts.",
        "Implemented end-to-end encryption for sensitive legal information to ensure complete confidentiality and compliance.",
      ],
      tech: ["Java", "Android", "Firebase", "SQLite"],
      keyFeatures: [
        "Document Management",
        "Consultation Booking",
        "Secure Authentication",
        "Real-time Notifications",
        "Legal Database",
      ],
    },
  ]

  return (
    <section ref={ref} id="projects" className="py-20 px-6 border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-foreground">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Showcasing my experience building scalable, user-centric applications across mobile, desktop, and enterprise
            platforms. Hover to flip and explore details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="h-96 cursor-pointer perspective"
              onMouseEnter={() => setFlipped(idx)}
              onMouseLeave={() => setFlipped(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="relative w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped === idx ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute w-full h-full p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col justify-between"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {project.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-accent font-medium mb-4">{project.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">Hover to flip →</p>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute w-full h-full p-6 rounded-xl border border-border bg-gradient-to-br from-accent/10 to-accent/5 overflow-y-auto"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.keyFeatures.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-accent/20 text-accent rounded text-xs font-medium border border-accent/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-accent/15 text-accent rounded-full text-xs font-semibold border border-accent/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider mb-2">
                        Highlights
                      </h4>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        {project.fullDescription.slice(0, 3).map((point, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent flex-shrink-0">•</span>
                            <span className="line-clamp-2">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Details Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <h3 className="text-2xl font-bold text-foreground mb-8">Detailed Project Breakdown</h3>
          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border border-border rounded-xl p-8 bg-card hover:border-accent/50 transition-all"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">{project.period}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-1">{project.title}</h4>
                  <p className="text-accent font-medium">{project.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
                      Project Overview
                    </h5>
                    <ul className="space-y-3">
                      {project.fullDescription.map((point, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                          <span className="text-accent font-bold flex-shrink-0 mt-0.5">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features & Tech */}
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                        Key Features
                      </h5>
                      <div className="grid grid-cols-2 gap-2">
                        {project.keyFeatures.map((feature, i) => (
                          <div
                            key={i}
                            className="px-3 py-2 bg-accent/10 text-accent rounded-lg text-xs font-medium border border-accent/20 hover:border-accent/50 transition-colors"
                          >
                            ✓ {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-2 bg-gradient-to-r from-accent/20 to-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/30 hover:border-accent transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
