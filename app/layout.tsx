import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Merriweather } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
})
const merriweather = Merriweather({ 
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'SYGNET MUN - The CSOC Chronicle',
  description: 'Voices That Shape Tomorrow - Model United Nations by CSOC, NIT Hamirpur',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${merriweather.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
