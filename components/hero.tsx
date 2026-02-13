'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="bg-card py-8 sm:py-12 md:py-16 lg:py-24 border-b-4 border-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Logo Display */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <Image
            src="/logo.png"
            alt="SYGNET Logo"
            width={100}
            height={100}
            className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24"
          />
        </div>

        {/* Main Masthead */}
        <div className="text-center mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-foreground">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-primary mb-2 sm:mb-4 tracking-tight text-balance">
            THE CSOC CHRONICLE
          </h1>
          <p className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl text-accent italic mb-4 sm:mb-6">
            Voices That Shape Tomorrow
          </p>
          <div className="h-1 w-16 sm:w-20 md:w-24 bg-primary mx-auto mb-4 sm:mb-6"></div>
        </div>

        {/* Edition Info */}
        <div className="text-center mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-border">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-3">
            SYGNET
          </h2>
          <p className="font-serif text-base sm:text-lg text-foreground mb-1 sm:mb-2">
            Model United Nations
          </p>
          <p className="text-xs sm:text-sm font-serif text-muted-foreground">
            Maiden Edition
          </p>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="font-serif text-xs sm:text-sm md:text-base text-muted-foreground">
            An initiative by CSOC — Society of Civil Engineering
          </p>
          <p className="font-serif text-xs sm:text-sm text-muted-foreground">
            National Institute of Technology Hamirpur
          </p>
        </div>

        {/* Decorative line */}
        <div className="flex justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
          <div className="w-1 h-6 sm:h-8 bg-primary"></div>
          <div className="w-1 h-6 sm:h-8 bg-accent"></div>
          <div className="w-1 h-6 sm:h-8 bg-primary"></div>
        </div>

        {/* Register Now Button */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <Link href="/register">
            <Button
              size="lg"
              className="font-serif text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
