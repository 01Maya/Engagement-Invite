'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Confetto {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  color: string
  rotation: number
  emoji: string
}

export default function ConfettiEffect() {
  const [confetti, setConfetti] = useState<Confetto[]>([])

  useEffect(() => {
    const colors = [
      '#d4af37', // gold
      '#f8dfe3', // pink light
      '#f3cfd6', // pink medium
      '#6e2c3a', // wine
      '#f072b6', // rose
      '#ffd700', // yellow
    ]
    
    const emojis = ['🎉', '💕', '✨', '💍', '🎊', '🌸', '💐', '🎈']

    const generatedConfetti = Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2.5 + Math.random() * 1,
      size: 10 + Math.random() * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }))
    setConfetti(generatedConfetti)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          initial={{
            top: -40,
            left: `${item.left}%`,
            opacity: 0.85,
            rotate: 0,
            scale: 0.9,
          }}
          animate={{
            top: '100vh',
            left: `${item.left + (Math.random() - 0.5) * 30}%`,
            opacity: [0.85, 0.9, 0.6, 0],
            rotate: item.rotation + 360,
            scale: [0.9, 1, 0.85],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            ease: 'easeOut',
          }}
          className="absolute font-bold text-lg sm:text-xl"
          style={{
            width: item.size,
            height: item.size,
          }}
        >
          <div className="w-full h-full flex items-center justify-center" style={{ color: item.color }}>
            {item.emoji}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
