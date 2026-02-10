'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-16 md:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-4">
            Delegate Registration
          </h1>
          <p className="font-serif text-lg text-muted-foreground">
            Secure Your Place at SYGNET MUN
          </p>
        </div>
      </section>

      {/* Announce Soon Section */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="border-4 border-primary bg-card p-8 sm:p-12 md:p-16 text-center">
            {/* Breaking News Banner */}
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-4 border-foreground">
              <p className="font-serif text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">
                Breaking News
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-4">
                OPEN SOON
              </h2>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4 sm:space-y-6">
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed">
                Registration details, fees, and deadlines are being finalized.
              </p>
              <p className="font-serif text-base sm:text-lg text-muted-foreground italic">
                The registration portal will open soon. Stay tuned for official announcements regarding delegate registration.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t-2 border-foreground">
              <div className="flex justify-center gap-2">
                <div className="w-1 h-8 bg-primary"></div>
                <div className="w-1 h-8 bg-accent"></div>
                <div className="w-1 h-8 bg-primary"></div>
              </div>
              <p className="font-serif text-sm text-muted-foreground mt-6">
                For updates and inquiries, contact us at sygnetmun@nith.ac.in
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
