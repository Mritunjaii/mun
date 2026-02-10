'use client'

import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { WhatIsMUN } from '@/components/what-is-mun'
import { AboutSYGNET } from '@/components/about-sygnet'
import { SecretaryGeneral } from '@/components/secretary-general'
import { CommitteesSection } from '@/components/committees-section'
import { WhyParticipate } from '@/components/why-participate'
import { ImportantDates } from '@/components/important-dates'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <WhatIsMUN />
      <AboutSYGNET />
      <SecretaryGeneral />
      <CommitteesSection />
      <WhyParticipate />
      <ImportantDates />
      <Footer />
    </main>
  )
}
