'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function EventDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.25,
        ease: 'easeOut',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], type: 'spring', stiffness: 90 },
    },
  }

  const eventDetails = [
    {
      icon: Calendar,
      label: 'Date',
      value: '9th May 2026',
      color: 'from-rose-300 to-pink-400',
    },
    {
      icon: Clock,
      label: 'Time',
      value: '2:00 PM',
      color: 'from-pink-400 to-rose-300',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nishal Faliyu, Mudat',
      color: 'from-rose-300 to-pink-400',
    },
  ]

  return (
    <section id="event" ref={ref} className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden smooth-transition">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-wine/50 text-xl sm:text-2xl mb-3 sm:mb-4"
          >
            💕
          </motion.p>
          <h2 className="text-great-vibes text-4xl sm:text-5xl md:text-6xl text-wine mb-2 sm:mb-4">
            are Getting Engaged!
          </h2>
          <p className="text-wine/50 text-xs sm:text-sm md:text-base font-light">
            Join us for this special celebration
          </p>
        </motion.div>

        {/* Event Details Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
        >
          {eventDetails.map((detail, idx) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3, type: 'spring', stiffness: 300 },
                }}
                className="relative group"
              >
                {/* Gradient Background Glow */}
                <motion.div
                  animate={{
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-medium rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"
                />

                {/* Card Content */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-pink-dark/10 hover:border-gold/30 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden text-center">
                  {/* Shine Effect */}
                  <motion.div
                    animate={{
                      x: [-100, 100],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                    className="absolute top-0 left-0 right-0 h-full w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: idx * 0.3,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    className="flex justify-center mb-4 sm:mb-6 relative z-10"
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 20px rgba(212, 175, 55, 0.3)`,
                          `0 0 40px rgba(212, 175, 55, 0.6)`,
                          `0 0 20px rgba(212, 175, 55, 0.3)`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                      className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${detail.color} shadow-xl`}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  <motion.p
                    animate={{ opacity: [0.6, 0.8, 0.6] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.4,
                    }}
                    className="text-wine/60 font-playfair text-xs sm:text-sm mb-1 sm:mb-2 font-light tracking-wide"
                  >
                    {detail.label}
                  </motion.p>
                  <p className="text-wine font-playfair font-semibold text-base sm:text-lg md:text-xl relative z-10">
                    {detail.value}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* View Location Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.open('https://maps.google.com', '_blank')}
            className="relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-gold via-yellow-500 to-gold text-wine font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:text-wine/90 overflow-hidden group"
          >
            {/* Shine effect on button */}
            <motion.div
              animate={{ x: [-100, 200] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 left-0 right-0 h-full w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
            />
            <span className="relative flex items-center justify-center gap-2">
              <motion.span animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                📍
              </motion.span>
              View Location
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
