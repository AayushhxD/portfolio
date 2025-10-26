"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50 shadow-lg shadow-primary/5">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Redesigned */}
        <Link
          href="#"
          onClick={() => scrollToSection("#about")}
          className="flex items-center gap-3 group"
        >
          <motion.div 
            className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent-secondary to-accent-tertiary flex items-center justify-center shadow-lg shadow-primary/30 overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="text-white font-bold text-base relative z-10 drop-shadow-lg">AG</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none bg-gradient-to-r from-primary via-accent-secondary to-accent-tertiary bg-clip-text text-transparent group-hover:from-accent-tertiary group-hover:via-accent-secondary group-hover:to-primary transition-all duration-500">
              Ayush Godse
            </span>
            <span className="text-xs text-muted-foreground">Developer</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.href.replace("#", "")
                  ? "bg-gradient-to-r from-primary to-accent-tertiary text-white shadow-lg shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50 backdrop-blur-sm"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-accent/10 text-accent border border-accent/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
