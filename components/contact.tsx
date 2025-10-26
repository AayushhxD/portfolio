"use client"

import type React from "react"

import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Create mailto link with form data
    const subject = `Message from ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    const mailtoLink = `mailto:ayushgodse0009@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }, 3000)
    }, 500)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ayushgodse0009@gmail.com",
      href: "mailto:ayushgodse0009@gmail.com",
      description: "Reach out via email",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7378475131",
      href: "tel:+917378475131",
      description: "Call me directly",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "#",
      description: "Based in Pune",
    },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-accent" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
    },
  }

  return (
    <section id="contact" className="py-20 px-6 border-t border-border bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Methods */}
          <div className="space-y-6">
            <motion.h3 
              className="text-lg font-bold text-foreground mb-6"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h3>

            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={idx}
                  href={method.href}
                  className="group border border-border rounded-xl p-6 bg-card hover:border-accent/50 hover:bg-muted/30 transition-all hover:shadow-lg hover:shadow-accent/10 block"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-accent" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {method.label}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                      <p className="text-sm font-medium text-accent mt-2">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div 
              className="border border-border rounded-xl p-6 bg-card"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 border border-border rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all ${social.color}`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="border border-border rounded-xl p-8 bg-card hover:border-accent/50 transition-all"
            variants={itemVariants}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Send Me a Message</h3>

            {submitted ? (
              <motion.div 
                className="flex items-center justify-center h-64 bg-accent/10 rounded-lg border border-accent/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-6xl mb-3 text-accent"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    ✓
                  </motion.div>
                  <p className="text-foreground font-semibold">Message sent successfully!</p>
                  <p className="text-sm text-muted-foreground mt-2">I'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary via-accent-secondary to-accent-tertiary text-white rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all font-semibold flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
