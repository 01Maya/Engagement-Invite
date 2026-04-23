'use client'

import { useEffect, useState } from 'react'

interface Dot {
  id: number
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

export default function BackgroundDecorations() {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    // Generate random dots
    const generatedDots: Dot[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 2, // 2-8px
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2, // 2-5s
    }))
    setDots(generatedDots)
  }, [])

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.1; transform: scale(0.8); }
        }
        .twinkle-dot {
          animation: twinkle infinite ease-in-out;
          box-shadow: 0 0 10px rgba(244, 114, 182, 0.6), 0 0 20px rgba(244, 114, 182, 0.3);
        }
      `}</style>
      
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-pink-200/40 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-rose-200/30 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-8 right-24 w-64 h-64 rounded-full bg-white/60 blur-3xl"></div>
        <div className="absolute inset-x-1/4 top-1/2 h-96 rounded-full bg-gradient-to-r from-pink-50/60 to-white/0 blur-3xl"></div>

        {/* Twinkling dots */}
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="twinkle-dot absolute rounded-full bg-pink-400"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationDuration: `${dot.duration}s`,
              animationDelay: `${dot.delay}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  )
}

