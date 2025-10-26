"use client"

import { ArrowRight, FileDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="pt-40 pb-20 px-6 relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
          style={{ willChange: "transform, opacity" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"
          style={{ willChange: "transform, opacity" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-12">
          <div className="text-left">
            <motion.div className="mb-6" variants={itemVariants}>
              <span className="text-primary text-sm md:text-base font-mono">Hi, my name is</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight"
              variants={itemVariants}
            >
              Ayush Godse.
            </motion.h1>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-muted-foreground"
              variants={itemVariants}
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              I'm a Computer Engineering graduate specializing in building exceptional digital experiences. 
              Currently focused on creating scalable applications with modern technologies.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="group px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.8)", backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="group px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.8)", backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FileDown className="w-5 h-5" />
                Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
