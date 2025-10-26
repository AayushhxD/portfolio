"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "💻",
      skills: ["Java", "Dart", "Python", "C", "C++", "SQL"],
      description: "Core languages for application development and system programming",
    },
    {
      category: "Frameworks & Libraries",
      icon: "🏗️",
      skills: ["Flutter", "JavaFX", "Firebase", "REST APIs"],
      description: "Modern frameworks for building scalable applications",
    },
    {
      category: "Technologies & Platforms",
      icon: "⚙️",
      skills: ["Android Development", "Mobile Apps", "Git/GitHub", "MySQL", "Firebase Firestore"],
      description: "Technologies for mobile and backend development",
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Linux", "Postman", "Figma", "VS Code", "Android Studio", "Firebase Console"],
      description: "Development tools and platforms for efficient workflow",
    },
    {
      category: "Soft Skills",
      icon: "🎯",
      skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Communication", "Time Management"],
      description: "Essential interpersonal and professional skills",
    },
  ]

  return (
    <section ref={ref} id="skills" className="py-20 px-6 border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-foreground">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive toolkit built through hands-on experience and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="group border border-border rounded-xl p-6 bg-card relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <motion.span
                  className="text-3xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {cat.icon}
                </motion.span>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg group-hover:text-accent transition-colors">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-xs font-semibold border border-accent/20 cursor-pointer"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(59, 130, 246, 0.5)",
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          className="mt-12 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="border border-border rounded-xl p-6 bg-card text-center"
            whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
          >
            <motion.div
              className="text-3xl font-bold text-accent mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              6+
            </motion.div>
            <p className="text-muted-foreground text-sm">Programming Languages</p>
          </motion.div>
          <motion.div
            className="border border-border rounded-xl p-6 bg-card text-center"
            whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
          >
            <motion.div
              className="text-3xl font-bold text-accent mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              3+
            </motion.div>
            <p className="text-muted-foreground text-sm">Major Projects Completed</p>
          </motion.div>
          <motion.div
            className="border border-border rounded-xl p-6 bg-card text-center"
            whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
          >
            <motion.div
              className="text-3xl font-bold text-accent mb-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
            >
              8+
            </motion.div>
            <p className="text-muted-foreground text-sm">Professional Certifications</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
