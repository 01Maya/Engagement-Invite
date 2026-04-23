'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.substring(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 40)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <span className="inline-block">
      {displayedText}
      {displayedText.length < text.length && displayedText.length > 0 && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-1 h-10 md:h-12 lg:h-16 bg-wine ml-1"
        />
      )}
    </span>
  )
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.4,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], type: 'spring', stiffness: 100 },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut', type: 'spring', stiffness: 80 },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut', type: 'spring', stiffness: 80 },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, delay: 0.6, ease: 'easeOut', type: 'spring', stiffness: 120 },
    },
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-[85vh] pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 lg:pt-32 lg:pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Left Side Flowers */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-0"
      >
        <div className="relative">
          {/* Large flower */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="text-6xl sm:text-7xl md:text-8xl opacity-80"
          >
            🌸
          </motion.div>
          {/* Small flowers around */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-8 -right-8 text-3xl opacity-60"
          >
            🌺
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-8 -right-8 text-3xl opacity-60"
          >
            🌻
          </motion.div>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-4 -left-4 text-2xl opacity-50"
          >
            🌷
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side Flowers */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-0"
      >
        <div className="relative">
          {/* Large flower */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="text-6xl sm:text-7xl md:text-8xl opacity-80"
          >
            🌹
          </motion.div>
          {/* Small flowers around */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-8 -left-8 text-3xl opacity-60"
          >
            🌸
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute -bottom-8 -left-8 text-3xl opacity-60"
          >
            🌺
          </motion.div>
          <motion.div
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -right-4 text-2xl opacity-50"
          >
            💐
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Decorative Circle */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6 sm:mb-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="inline-block border-2 border-gold/40 rounded-full p-3 sm:p-4 bg-gradient-to-br from-gold/15 to-transparent backdrop-blur-sm hover:border-gold/60 transition-colors duration-300"
          >
            <span className="text-great-vibes text-2xl sm:text-3xl text-gold">J&D</span>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-wine/70 font-playfair text-sm sm:text-base md:text-lg tracking-wide mb-6 sm:mb-8 font-light leading-relaxed"
        >
          With joyful hearts, we invite you to the Engagement of
        </motion.p>

        {/* Main Names with Typewriter Effect */}
        <motion.div variants={scaleIn} className="mb-8 sm:mb-10">
          <h1 className="text-great-vibes text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-wine font-normal tracking-wider leading-tight">
            <TypewriterText text="Juhi & Devang" delay={600} />
          </h1>
        </motion.div>

        {/* Rings Icon with Enhanced Shine and Float */}
        <motion.div variants={scaleIn} className="flex justify-center mb-8 sm:mb-10">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 blur-xl"
            />

            {/* Main ring container */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.2)',
                  '0 0 50px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.3)',
                  '0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.2)',
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="relative rounded-full overflow-hidden border-4 border-gold/30"
            >
              <Image
                src="/rings.jpg"
                alt="Wedding rings"
                width={120}
                height={120}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full shadow-2xl"
                quality={95}
              />

              {/* Multiple shine effects */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  x: [-50, 50],
                  y: [-50, 50],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none"
              />

              <motion.div
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 via-transparent to-gold/20 pointer-events-none"
              />

              {/* Sparkle effects */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.8,
                }}
                className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 2.2,
                }}
                className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-white rounded-full shadow-lg"
              />

              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1.8,
                }}
                className="absolute top-1/2 left-1 w-1 h-1 bg-gold/80 rounded-full shadow-md"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main announcement */}
        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-great-vibes text-wine/80 font-normal mb-12 sm:mb-16 tracking-wider"
        >
          are Getting Engaged!
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="flex justify-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 sm:gap-3"
          >
            <p className="text-xs sm:text-sm text-wine/40 font-light tracking-widest uppercase">
              Scroll to explore
            </p>
            <motion.svg
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-5 h-5 sm:w-6 sm:h-6 text-gold/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
