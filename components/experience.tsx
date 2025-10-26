"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Android Developer Intern",
      company: "Biencap's System",
      location: "Pune",
      period: "Dec 2023 – Feb 2024",
      highlights: [
        "Collaborated with development team on Flutter mobile applications, contributing to design and implementation of key features",
        "Participated in team discussions and project documentation, ensuring code quality and knowledge sharing across the team",
        "Articulated programming challenges with clear problem statements, options, and solutions for team learning",
        "Contributed to production-level dataset development, ensuring data quality and relevance for project needs",
        "Provided detailed code documentation and design decisions to facilitate knowledge sharing within the team",
        "Created variations of problem statements based on difficulty levels to support diverse learning scenarios",
      ],
    },
  ]

  return (
    <section ref={ref} id="experience" className="py-20 px-6 border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-foreground">Experience</h2>
          <p className="text-muted-foreground text-lg">
            Professional experience in mobile application development and team collaboration.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="group border border-border rounded-xl overflow-hidden bg-card relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <div className="p-6 md:p-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">{exp.period}</span>
                    </div>
                    <motion.h3
                      className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <p className="text-accent font-semibold mt-2">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <motion.div
                          className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/10 border border-accent/30"
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                        >
                          <span className="text-accent text-sm font-bold">✓</span>
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-0.5">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
