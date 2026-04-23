'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/wedding/Navbar'
import Hero from '@/components/wedding/Hero'
import BlessingsSection from '@/components/wedding/BlessingsSection'
import CoupleSection from '@/components/wedding/CoupleSection'
import EventDetails from '@/components/wedding/EventDetails'
import CelebrationMessage from '@/components/wedding/CelebrationMessage'
import Footer from '@/components/wedding/Footer'
import ConfettiEffect from '@/components/wedding/ConfettiEffect'

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="w-full">
      <Navbar />
      {mounted && showConfetti && <ConfettiEffect />}
      <Hero />
      <BlessingsSection />
      <CoupleSection />
      <EventDetails />
      <CelebrationMessage />
      <Footer />
    </main>
  )
}
