"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Reduced number of emojis for better performance
  const emojis = [
    { emoji: "🚀", size: "text-6xl", delay: 0, duration: 30 },
    { emoji: "�", size: "text-5xl", delay: 3, duration: 35 },
    { emoji: "🦕", size: "text-7xl", delay: 6, duration: 32 },
    { emoji: "⭐", size: "text-4xl", delay: 2, duration: 25 },
    { emoji: "�", size: "text-5xl", delay: 5, duration: 40 },
    { emoji: "�", size: "text-5xl", delay: 8, duration: 28 },
    { emoji: "🪐", size: "text-6xl", delay: 4, duration: 38 },
    { emoji: "☄️", size: "text-4xl", delay: 7, duration: 22 },
  ]

  const generateRandomPath = () => {
    const startX = Math.random() * 100
    const startY = Math.random() * 100
    return {
      x: [startX, Math.random() * 100, startX],
      y: [startY, Math.random() * 100, startY],
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static gradient background - no animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Floating emojis - optimized */}
      {emojis.map((item, index) => {
        const path = generateRandomPath()
        return (
          <motion.div
            key={index}
            className={`absolute ${item.size} opacity-10`}
            initial={{
              x: `${path.x[0]}vw`,
              y: `${path.y[0]}vh`,
            }}
            animate={{
              x: path.x.map(x => `${x}vw`),
              y: path.y.map(y => `${y}vh`),
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {item.emoji}
          </motion.div>
        )
      })}

      {/* Glowing orbs - optimized with will-change */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        style={{ willChange: "transform, opacity" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-3xl"
        style={{ willChange: "transform, opacity" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Reduced stars for better performance */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-foreground/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: "opacity",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Static grid pattern - no animation */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px),
                           linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
