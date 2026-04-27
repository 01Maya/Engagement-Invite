import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Great_Vibes, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BackgroundDecorations from '@/components/wedding/BackgroundDecorations'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: '400', variable: '--font-great-vibes' });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f8dfe3',
}

export const metadata: Metadata = {
  title: 'Juhi & Devang - Engagement Celebration 💍',
  description: 'Join us as Juhi and Devang celebrate their engagement. May this joyful union be blessed with love and prosperity.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${greatVibes.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-gradient-to-br from-pink-50 via-pink-50 to-white">
        <BackgroundDecorations />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
