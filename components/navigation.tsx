'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="SYGNET Logo"
              width={40}
              height={40}
              className="w-16 h-16 sm:w-15 sm:h-15"
            />
            {/* <span className="hidden sm:inline font-serif text-sm sm:text-base font-bold text-primary">
              THE CSOC CHRONICLE
            </span> */}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-4 md:gap-8 text-xs md:text-sm font-serif">
            <Link href="/#what-is-mun" className="text-foreground hover:text-accent transition-colors">
              About MUN
            </Link>
            <Link href="/committees" className="text-foreground hover:text-accent transition-colors">
              Committees
            </Link>
            <Link href="/secretariat" className="text-foreground hover:text-accent transition-colors">
              Secretariat
            </Link>
            <Link href="/registration" className="text-foreground hover:text-accent transition-colors">
              Register
            </Link>
            <Link href="/resources" className="text-foreground hover:text-accent transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="sm:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-border pt-4 text-sm font-serif">
            <Link
              href="#what-is-mun"
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About MUN
            </Link>
            <Link
              href="/committees"
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Committees
            </Link>
            <Link
              href="/secretariat"
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Secretariat
            </Link>
            <Link
              href="/registration"
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/resources"
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
