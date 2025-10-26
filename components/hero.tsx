"use client"

import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

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
    <section className="pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Section-specific gradient overlays - optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl"
          style={{ willChange: "transform, opacity" }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"
          style={{ willChange: "transform, opacity" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Hero Content */}
        <div className="mb-12">
          {/* Profile Section with Image */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Profile Image */}
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/40 via-accent-secondary/30 to-accent-tertiary/40 rounded-full blur-2xl"
                style={{ willChange: "transform, opacity" }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30 bg-gradient-to-br from-primary/20 to-accent-secondary/20"
                style={{ willChange: "transform" }}
                whileHover={{ 
                  borderColor: "rgba(99, 102, 241, 0.8)", 
                  boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/Ayush Photo.jpeg"
                    alt="Ayush Godse"
                    fill
                    className="object-cover z-10"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <motion.div className="mb-4" variants={itemVariants}>
                <motion.span
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-accent-secondary/10 to-accent-tertiary/10 border-2 border-primary/30 text-primary rounded-full text-sm font-semibold backdrop-blur-sm"
                  whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    className="text-xl"
                  >
                    👋
                  </motion.span>
                  Welcome to my portfolio
                  <Sparkles className="w-4 h-4 text-accent-secondary" />
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight"
                variants={itemVariants}
              >
                <span
                  className="inline-block bg-gradient-to-r from-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent animate-gradient-x"
                  style={{ 
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ayush Godse
                </span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-accent-secondary/80 font-medium"
                variants={itemVariants}
              >
                Full Stack Developer & Mobile App Enthusiast
              </motion.p>
            </div>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            Computer Engineering graduate passionate about building{" "}
            <motion.span
              className="text-accent font-semibold"
              whileHover={{ scale: 1.05 }}
              style={{ display: "inline-block" }}
            >
              scalable mobile and desktop applications
            </motion.span>{" "}
            with modern technologies. Specialized in Flutter, Java, and Firebase.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex gap-4 flex-wrap mb-12" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-accent-tertiary text-white rounded-lg font-semibold flex items-center gap-2 relative overflow-hidden shadow-lg shadow-primary/30"
              style={{ willChange: "transform" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 border-2 border-primary text-foreground rounded-lg font-semibold relative overflow-hidden group hover:text-white transition-colors backdrop-blur-sm bg-card/30"
              style={{ willChange: "transform" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent-tertiary"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Work</span>
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div className="grid grid-cols-3 gap-4 mb-12" variants={itemVariants}>
            <motion.div
              className="border-2 border-primary/30 rounded-lg p-4 bg-card/50 backdrop-blur-sm text-center relative overflow-hidden group"
              whileHover={{ borderColor: "rgba(99, 102, 241, 0.6)", y: -5, boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-2xl font-bold text-primary relative z-10">3+</div>
              <p className="text-xs text-muted-foreground mt-1 relative z-10">Projects Built</p>
            </motion.div>
            <motion.div
              className="border-2 border-accent-secondary/30 rounded-lg p-4 bg-card/50 backdrop-blur-sm text-center relative overflow-hidden group"
              whileHover={{ borderColor: "rgba(236, 72, 153, 0.6)", y: -5, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-2xl font-bold text-accent-secondary relative z-10">6+</div>
              <p className="text-xs text-muted-foreground mt-1 relative z-10">Languages</p>
            </motion.div>
            <motion.div
              className="border-2 border-accent-tertiary/30 rounded-lg p-4 bg-card/50 backdrop-blur-sm text-center relative overflow-hidden group"
              whileHover={{ borderColor: "rgba(139, 92, 246, 0.6)", y: -5, boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-tertiary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="text-2xl font-bold text-accent-tertiary relative z-10">8+</div>
              <p className="text-xs text-muted-foreground mt-1 relative z-10">Certifications</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div className="flex gap-4 pt-8 border-t border-border/50" variants={itemVariants}>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 border-2 border-primary/30 rounded-lg transition-all backdrop-blur-sm bg-card/50"
            aria-label="GitHub"
            whileHover={{ scale: 1.1, borderColor: "rgba(99, 102, 241, 0.6)", y: -3, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 border-2 border-accent-secondary/30 rounded-lg transition-all backdrop-blur-sm bg-card/50"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, borderColor: "rgba(236, 72, 153, 0.6)", y: -3, boxShadow: "0 10px 20px rgba(236, 72, 153, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent-secondary transition-colors" />
          </motion.a>
          <motion.a
            href="mailto:ayushgodse0009@gmail.com"
            className="group p-3 border-2 border-accent-tertiary/30 rounded-lg transition-all backdrop-blur-sm bg-card/50"
            aria-label="Email"
            whileHover={{ scale: 1.1, borderColor: "rgba(139, 92, 246, 0.6)", y: -3, boxShadow: "0 10px 20px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent-tertiary transition-colors" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
