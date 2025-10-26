"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "B.E Computer Engineering",
      institute: "NBN Sinhgad School of Engineering, Pune",
      year: "2021 - 2025",
      cpi: "7.62/10",
    },
    {
      degree: "HSC (XII)",
      institute: "Sinhgad College of Arts Commerce and Science, Pune",
      year: "2021",
      percentage: "80.33%",
    },
    {
      degree: "CBSE (X)",
      institute: "Sinhgad Spring Dale School, Pune",
      year: "2019",
      percentage: "63.2%",
    },
  ]

  return (
    <section ref={ref} id="about" className="py-20 px-6 border-t border-border bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 text-foreground">About Me</h2>
          <p className="text-muted-foreground text-lg">
            A passionate developer with a strong foundation in building scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6">
            <motion.div
              className="border border-border rounded-xl p-6 bg-card group"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a results-driven Computer Engineering graduate from NBN Sinhgad School of Engineering with a strong
                foundation in Java, Data Structures & Algorithms, Flutter, and Operating Systems.
              </p>
            </motion.div>

            <motion.div
              className="border border-border rounded-xl p-6 bg-card group"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
            >
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience in mobile and desktop application development, I leverage tools like Firebase
                and JavaFX to build scalable, user-centric solutions. I'm passionate about problem-solving and thrive in
                collaborative environments.
              </p>
            </motion.div>

            <motion.div
              className="border border-border rounded-xl p-6 bg-card group"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", y: -5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Currently expanding my technical skill set through certifications, real-world projects, and continuous
                learning in emerging technologies like AI and advanced software engineering practices.
              </p>
            </motion.div>
          </div>

          {/* Education & Contact */}
          <div className="space-y-6">
            {/* Education Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    className="border border-border rounded-xl p-4 bg-card group cursor-pointer"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    whileHover={{ borderColor: "rgba(59, 130, 246, 0.5)", x: 5, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <motion.span
                        className="text-accent text-lg"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        🎓
                      </motion.span>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">{edu.degree}</p>
                        <p className="text-xs text-muted-foreground mt-1">{edu.institute}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">{edu.year}</span>
                          <span className="text-xs font-semibold text-accent">{edu.cpi || edu.percentage}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Card */}
            <div className="border border-border rounded-xl p-6 bg-card hover:border-accent/50 transition-all">
              <h3 className="text-lg font-bold text-foreground mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg">✉️</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a
                      href="mailto:ayushgodse0009@gmail.com"
                      className="text-foreground font-medium hover:text-accent transition-colors text-sm"
                    >
                      ayushgodse0009@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent text-lg">📱</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <a
                      href="tel:+917378475131"
                      className="text-foreground font-medium hover:text-accent transition-colors text-sm"
                    >
                      +91 7378475131
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
