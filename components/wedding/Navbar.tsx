'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['hero', 'blessings', 'couple', 'event']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()

    // Prevent multiple rapid clicks
    if (isNavigating) return

    const element = document.getElementById(id)
    if (element) {
      setIsNavigating(true)
      // Close mobile menu first
      setMobileMenuOpen(false)

      // Small delay to allow menu animation to complete
      setTimeout(() => {
        // Calculate offset based on navbar height and some extra padding
        const navbarHeight = window.innerWidth < 768 ? 80 : 100 // Different heights for mobile/desktop
        const offsetTop = element.offsetTop - navbarHeight - 20 // Extra 20px padding

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })

        // Reset navigation flag after scroll completes
        setTimeout(() => setIsNavigating(false), 1000)
      }, 300) // Wait for mobile menu to close
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
{ label: 'Blessings', id: 'blessings' },
    { label: 'Couple', id: 'couple' },
    { label: 'Event', id: 'event' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{
        boxShadow: scrolled ? '0 10px 30px rgba(110, 44, 58, 0.15)' : '0 0px 0px rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled ? 'bg-white/90' : 'bg-gradient-to-b from-pink-50/95 via-white/20 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="text-great-vibes text-2xl sm:text-3xl text-wine font-normal cursor-pointer"
          >
            J&D
          </motion.div>
        </Link>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="relative px-2 py-2 text-sm font-medium text-wine/70 hover:text-wine transition-colors"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  initial={{ opacity: 0, scaleX: 0, y: 8 }}
                  animate={{ opacity: 1, scaleX: 1, y: 0 }}
                  exit={{ opacity: 0, scaleX: 0, y: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  className="absolute bottom-0 left-2 right-2 h-1 bg-gradient-to-r from-gold via-gold to-yellow-400 rounded-full origin-left"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-wine hover:bg-pink-100/50 rounded-lg transition-colors touch-manipulation"
          aria-label="Menu"
        >
          <motion.div
            animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5 sm:w-6 sm:h-6 relative"
          >
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 0 : -8
              }}
              className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2"
            />
            <motion.span
              animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2"
            />
            <motion.span
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? 0 : 8
              }}
              className="absolute top-1/2 left-0 w-full h-0.5 bg-current transform -translate-y-1/2"
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-pink-dark/10"
          >
            <div className="px-3 sm:px-6 py-3 sm:py-4 flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all touch-manipulation ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-gold to-yellow-400 text-wine shadow-lg'
                      : 'text-wine/70 hover:text-wine hover:bg-pink-100/50 active:bg-pink-200/50'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

