'use client'

import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Mail, label: "Email", href: "mailto:ayushgodse0009@gmail.com" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  }

  return (
    <footer className="border-t border-border py-12 px-6 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className="grid md:grid-cols-3 gap-8 mb-8" variants={itemVariants}>
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-foreground mb-2">Ayush Godse</h3>
            <p className="text-sm text-muted-foreground">
              Computer Engineering graduate building scalable applications with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground hover:text-accent transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-border pt-8"
          variants={itemVariants}
        >
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground text-center">
              © {currentYear} Ayush Godse. All rights reserved.
            </p>
          </motion.div>
          
          {/* AG Logo */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent-secondary to-accent-tertiary rounded-lg blur-lg opacity-30"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-16 h-16 bg-gradient-to-br from-background to-muted border-2 border-primary/30 rounded-lg flex items-center justify-center overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent-secondary/20 to-accent-tertiary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative text-2xl font-bold bg-gradient-to-r from-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
                  AG
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
