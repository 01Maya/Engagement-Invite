'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BlessingsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="blessings"
      ref={ref}
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden smooth-transition"
    >
      <div className="max-w-5xl mx-auto">
        {/* Ganesha Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], type: 'spring', stiffness: 80 }}
          className="relative group"
        >
          {/* Glow background */}
          <motion.div
            animate={{
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-gradient-to-br from-pink-light to-pink-medium rounded-2xl sm:rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"
          ></motion.div>

          <div className="relative bg-gradient-to-br from-white/98 to-pink-50/98 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-pink-dark/10 group-hover:border-gold/30 transition-all overflow-hidden">
            {/* Shine effect */}
            <motion.div
              animate={{
                x: [-100, 300],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="absolute top-0 left-0 right-0 h-full w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            ></motion.div>

            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 relative z-10">
              {/* Ganesha Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 10,
                  transition: { duration: 0.3 },
                }}
                className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src="/ganesha.jpg"
                    alt="Lord Ganesha"
                    width={200}
                    height={200}
                    className="object-contain rounded-2xl drop-shadow-xl"
                    quality={90}
                  />
                </motion.div>
              </motion.div>

              {/* Blessings Text */}
              <div className="flex-1 text-center md:text-left">
                {/* Sanskrit Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-wine font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-6 font-semibold leading-relaxed"
                >
                  वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।
                  <br />
                  निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
                </motion.p>

                {/* English Translation */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-rose-800 font-playfair text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed md:leading-loose font-light"
                >
                  O Lord Ganesha, remover of all obstacles, with a body like the universe and
                  brilliance like millions of suns, please bless us and remove all hurdles in all our
                  endeavors.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, delay: 0.6, type: 'spring', stiffness: 200 }}
          className="flex justify-center items-center mt-10 sm:mt-12 md:mt-16 gap-2 sm:gap-3"
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0,
            }}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-gold to-yellow-500"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.2,
            }}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-gold to-yellow-500"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.4,
            }}
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-gold to-yellow-500"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  )
}
