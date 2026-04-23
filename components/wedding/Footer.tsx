'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  size: number
  delay: number
  duration: number
}

export default function Footer() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generatedHearts: Heart[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 8, // 8-28px
      delay: Math.random() * 1.5,
      duration: Math.random() * 2 + 3, // 3-5s
    }))
    setHearts(generatedHearts)
  }, [])

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 to-pink-500 overflow-hidden"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-15px); opacity: 0.8; }
        }
        .float-heart {
          animation: float infinite ease-in-out;
        }
      `}</style>

      {/* Random hearts in background */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="float-heart absolute text-white/60"
            style={{
              left: `${heart.left}%`,
              top: `${Math.random() * 80 + 10}%`,
              fontSize: `${heart.size}px`,
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            𖹭
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Invitation Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/90 text-sm sm:text-base font-light mb-4 tracking-wide"
        >
          We would love for you to join us in this beautiful function
        </motion.p>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/70 text-xs sm:text-sm font-light tracking-widest"
        >
          © 2026 Made By{' '}
          <a
            href="https://myportfolio1it.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors underline decoration-white/50 hover:decoration-white"
          >
            Maya
          </a>
          . All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
