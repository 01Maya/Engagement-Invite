'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CelebrationMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          className="relative group"
        >
          {/* Glow background */}
          <motion.div
            animate={{
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-medium rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-500"
          ></motion.div>

          {/* Card content */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] p-8 sm:p-12 md:p-16 shadow-[0_24px_80px_rgba(219,39,119,0.12)] transition-all border border-rose-100/70 overflow-hidden">
            {/* Shine effect */}
            <motion.div
              animate={{
                x: [-100, 400],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="absolute top-0 left-0 right-0 h-full w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            ></motion.div>

            {/* Decorative hearts */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 relative z-10"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl sm:text-3xl"
              >
                💕
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="text-2xl sm:text-3xl"
              >
                💍
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="text-2xl sm:text-3xl"
              >
                🌹
              </motion.span>
            </motion.div>
            <div className="relative z-10 mx-auto mt-10 mb-4 h-px w-24 bg-gradient-to-r from-rose-300/90 via-rose-200/40 to-transparent"></div>
            {/* Main message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-rose-500 font-playfair text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 font-light leading-relaxed relative z-10"
            >
              Join us to celebrate this joyful moment and bless the couple with your love and presence.
            </motion.p>

            {/* Sub-message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center text-wine/70 font-playfair text-base sm:text-lg md:text-xl font-light relative z-10"
            >
              May this union be blessed with love, happiness, and countless beautiful moments together.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
