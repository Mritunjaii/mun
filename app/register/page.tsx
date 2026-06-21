'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AlertCircle, Mail, Home, Image as ImageIcon } from 'lucide-react'

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navigation />

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 md:py-32 bg-background flex-grow flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
          <div className="border-4 border-foreground bg-card p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Header Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-accent" />

            <div className="text-center">
              {/* Notice Banner */}
              <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-accent bg-accent/5 text-accent font-serif text-xs sm:text-sm font-bold uppercase tracking-widest mb-6">
                <AlertCircle className="w-4 h-4" /> Capacity Reached
              </div>

              {/* Title */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-primary uppercase tracking-tight mb-4">
                REGISTRATION CLOSED
              </h1>
              
              <div className="w-16 h-1 bg-foreground mx-auto mb-6" />

              {/* Subheading/Message */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed max-w-2xl mx-auto mb-8">
                Thank you for the overwhelming response! The delegate registration portal for the maiden edition of <strong className="text-accent">SYGNET MUN 2026</strong> is now officially closed.
              </p>

              {/* Notice Box */}
              <div className="border-2 border-dashed border-foreground/30 bg-background p-6 rounded-none text-left max-w-xl mx-auto mb-10 space-y-4">
                <h3 className="font-serif font-bold text-lg text-primary border-b border-foreground/10 pb-2">
                  Important Notices for Delegates:
                </h3>
                <ul className="font-serif text-sm text-muted-foreground space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <span><strong>Allocations:</strong> Double-check your registered email for country/committee allocation details.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <span><strong>Payments:</strong> Payment receipt verification is in progress. Please allow 48-72 hours for your status update.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    <span><strong>Queries:</strong> If you did not receive a confirmation mail or need corrections, reach out to the Secretariat.</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 font-serif font-bold py-3 px-6 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-primary transition-all duration-300 text-sm uppercase"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
                
                <a
                  href="mailto:sygnetmun@nith.ac.in"
                  className="flex items-center justify-center gap-2 font-serif font-bold py-3 px-6 border-2 border-foreground bg-background text-primary hover:bg-foreground hover:text-background transition-all duration-300 text-sm uppercase"
                >
                  <Mail className="w-4 h-4" />
                  Email Secretariat
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-foreground/20 text-center">
                <p className="font-serif text-sm text-muted-foreground">
                  View highlights of the previous edition:{" "}
                  <Link href="/#sygnet-glimpse" className="text-accent font-bold hover:underline inline-flex items-center gap-1">
                    <ImageIcon className="w-3.5 h-3.5" /> SYGNET MUN 2026 Glimpse
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
