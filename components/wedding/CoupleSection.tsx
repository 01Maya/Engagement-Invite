'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart } from 'lucide-react'

export default function CoupleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.25,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -80, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], type: 'spring', stiffness: 80 },
    },
  }

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 80, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94], type: 'spring', stiffness: 80 },
    },
  }

  return (
    <section
      id="couple"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden smooth-transition"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-great-vibes text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-wine text-center mb-10 sm:mb-16 md:mb-20 tracking-wider"
        >
          Couple
        </motion.h2>

        {/* Couple Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16"
        >
          {/* Bride Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -12,
              boxShadow: '0 20px 50px rgba(110, 44, 58, 0.15)',
              transition: { duration: 0.3, type: 'spring', stiffness: 300 },
            }}
            className="relative group"
          >
            {/* Glow background */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-medium rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"
            ></motion.div>

            {/* Card */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border border-pink-dark/10 group-hover:border-gold/30 overflow-hidden">
              {/* Decorative floral corners */}
              <div className="absolute top-4 left-4 text-2xl opacity-20">🌸</div>
              <div className="absolute top-4 right-4 text-2xl opacity-20">🌹</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-20">💐</div>
              <div className="absolute bottom-4 right-4 text-2xl opacity-20">🌺</div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-gradient-to-r from-gold/20 via-transparent to-gold/20"></div>
              <div className="absolute inset-1 rounded-xl sm:rounded-2xl border border-gold/10"></div>

              {/* Shine effect - enhanced */}
              <motion.div
                animate={{
                  x: [-100, 300],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0,
                  repeatDelay: 2,
                }}
                className="absolute top-0 left-0 right-0 h-full w-48 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
              ></motion.div>

              {/* Content container - center aligned */}
              <div className="text-center relative z-10">
                <motion.h3
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="text-great-vibes text-4xl sm:text-5xl md:text-6xl text-wine mb-4 sm:mb-6 font-normal tracking-wider"
                >
                  Juhi
                </motion.h3>

                <motion.p
                  animate={{ opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-wine/60 font-playfair text-sm sm:text-base md:text-lg mb-3 sm:mb-4 font-light tracking-wide"
                >
                  Daughter of
                </motion.p>

                <p className="text-wine font-playfair font-medium text-base sm:text-lg md:text-xl leading-relaxed">
                  Hemlataben &<br />
                  Amarsinghbai Chaudhari
                </p>

<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center mt-6 sm:mt-8 mb-6 sm:mb-8 relative z-10"
>
  <motion.span
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="text-2xl sm:text-3xl"
  >
    ❤️
  </motion.span>
</motion.div>
              </div>
            </div>
          </motion.div>

          {/* Groom Card */}
          <motion.div
            variants={itemVariantsRight}
            whileHover={{
              y: -12,
              boxShadow: '0 20px 50px rgba(110, 44, 58, 0.15)',
              transition: { duration: 0.3, type: 'spring', stiffness: 300 },
            }}
            className="relative group"
          >
            {/* Glow background */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-medium rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"
            ></motion.div>

            {/* Card */}
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all border border-pink-dark/10 group-hover:border-gold/30 overflow-hidden">
              {/* Decorative floral corners */}
              <div className="absolute top-4 left-4 text-2xl opacity-20">🌹</div>
              <div className="absolute top-4 right-4 text-2xl opacity-20">🌸</div>
              <div className="absolute bottom-4 left-4 text-2xl opacity-20">🌺</div>
              <div className="absolute bottom-4 right-4 text-2xl opacity-20">💐</div>

              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-gradient-to-r from-gold/20 via-transparent to-gold/20"></div>
              <div className="absolute inset-1 rounded-xl sm:rounded-2xl border border-gold/10"></div>

              {/* Shine effect */}
              <motion.div
                animate={{
                  x: [-100, 200],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.5,
                }}
                className="absolute top-0 left-0 right-0 h-full w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
              ></motion.div>

              {/* Content container - center aligned */}
              <div className="text-center relative z-10">
                <motion.h3
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.3,
                  }}
                  className="text-great-vibes text-4xl sm:text-5xl md:text-6xl text-wine mb-4 sm:mb-6 font-normal tracking-wider"
                >
                  Devang
                </motion.h3>

                <motion.p
                  animate={{ opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="text-wine/60 font-playfair text-sm sm:text-base md:text-lg mb-3 sm:mb-4 font-light tracking-wide"
                >
                  Son of
                </motion.p>

                <p className="text-wine font-playfair font-medium text-base sm:text-lg md:text-xl leading-relaxed">
                  Hemlataben &<br />
                  Ratilal Chaudhari
                </p>

<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="flex justify-center mt-6 sm:mt-8 mb-6 sm:mb-8 relative z-10"
>
  <motion.span
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 1.5, repeat: Infinity }}
    className="text-2xl sm:text-3xl"
  >
    ❤️
  </motion.span>
</motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center items-center mt-12 sm:mt-16 md:mt-20 gap-3 sm:gap-4"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-300" />
          </motion.div>
          <motion.div
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-gold to-transparent"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-300 fill-rose-300" />
          </motion.div>
          <motion.div
            animate={{ scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            className="h-px w-8 sm:w-12 bg-gradient-to-r from-gold to-transparent"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
