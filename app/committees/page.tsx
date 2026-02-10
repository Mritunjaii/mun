'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const committeeDetails = [
  {
    id: 1,
    name: 'United Nations Security Council',
    acronym: 'UNSC',
    agenda: 'Geopolitical Stability and Peacekeeping Operations',
    difficulty: 'Advanced',
    description: 'The primary organ responsible for maintaining international peace and security. The Security Council addresses conflict resolution, sanctions regimes, and peacekeeping operations.',
    topics: [
      'Ukrainian Crisis and NATO Expansion',
      'Middle East Peace Process',
      'Cybersecurity and Emerging Threats'
    ],
    backgroundGuide: '/guides/unsc-bg.pdf'
  },
  {
    id: 2,
    name: 'United Nations General Assembly',
    acronym: 'UNGA',
    agenda: 'Sustainable Development Goals and Climate Action',
    difficulty: 'Intermediate',
    description: 'The main deliberative body of the United Nations where all member states have representation. Discusses a wide range of international issues from human rights to sustainable development.',
    topics: [
      'Climate Crisis and Green Energy Transition',
      'Education Access and Digital Divide',
      'Gender Equality and Women Empowerment'
    ],
    backgroundGuide: '/guides/unga-bg.pdf'
  },
  {
    id: 3,
    name: 'Economic and Social Council',
    acronym: 'ECOSOC',
    agenda: 'Global Economic Integration and Development',
    difficulty: 'Intermediate',
    description: 'Coordinates the economic and social work of the UN and its specialized agencies. Focuses on sustainable development, poverty alleviation, and international economic cooperation.',
    topics: [
      'Trade Agreements and Economic Partnerships',
      'Poverty Alleviation Strategies',
      'Labor Rights and Fair Working Conditions'
    ],
    backgroundGuide: '/guides/ecosoc-bg.pdf'
  },
  {
    id: 4,
    name: 'Human Rights Council',
    acronym: 'HRC',
    agenda: 'Protection of Minority Rights and Indigenous Communities',
    difficulty: 'Advanced',
    description: 'Addresses human rights violations, promotes fundamental freedoms, and investigates allegations of human rights abuses. Works to strengthen mechanisms for protecting vulnerable populations.',
    topics: [
      'Refugee Rights and Migration',
      'Digital Privacy and Data Protection',
      'Religious Tolerance and Discrimination'
    ],
    backgroundGuide: '/guides/hrc-bg.pdf'
  }
]

export default function CommitteesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-8 sm:py-12 md:py-16 lg:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 sm:mb-4 text-balance">
            Global Chambers
          </h1>
          <p className="font-serif text-sm sm:text-base md:text-lg text-muted-foreground">
            Committees in Session at SYGNET MUN
          </p>
        </div>
      </section>

      {/* Committee Details */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {committeeDetails.map((committee, idx) => (
              <article key={committee.id} className={`pb-8 sm:pb-12 md:pb-16 border-b border-border ${idx === committeeDetails.length - 1 ? 'border-b-0 pb-0' : ''}`}>
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 text-balance">
                        {committee.name}
                      </h2>
                      <p className="font-serif text-base sm:text-lg font-semibold text-accent">
                        ({committee.acronym})
                      </p>
                    </div>

                    <p className="font-serif text-sm sm:text-base md:text-lg font-semibold text-primary italic mb-4 sm:mb-6 pb-3 sm:pb-4 border-b-2 border-foreground">
                      {committee.agenda}
                    </p>

                    <p className="font-serif text-sm sm:text-base md:text-lg leading-relaxed text-foreground mb-6 sm:mb-8">
                      {committee.description}
                    </p>

                    <div>
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">
                        Discussion Topics
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {committee.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start gap-2 sm:gap-3 font-serif">
                            <span className="text-accent font-bold mt-0.5 flex-shrink-0">▪</span>
                            <span className="text-sm sm:text-base text-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div>
                    <div className="bg-card border-2 border-foreground p-4 sm:p-6">
                      <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-foreground">
                        <p className="font-serif text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1 sm:mb-2">
                          Difficulty Level
                        </p>
                        <p className="font-serif text-lg sm:text-2xl font-bold text-primary">
                          {committee.difficulty}
                        </p>
                      </div>

                      <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-foreground">
                        <p className="font-serif text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1 sm:mb-2">
                          Committee Size
                        </p>
                        <p className="font-serif text-base sm:text-lg text-foreground">
                          20-30 Delegates
                        </p>
                      </div>

                      <div>
                        <button className="w-full font-serif font-bold py-2 sm:py-3 px-3 sm:px-4 text-sm sm:text-base bg-primary text-card hover:bg-accent hover:text-primary transition-colors">
                          Download Background Guide
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Application Info */}
          <div className="mt-8 sm:mt-12 md:mt-16 pt-8 sm:pt-12 md:pt-16 border-t-2 border-foreground">
            <div className="bg-primary text-card p-6 sm:p-8 text-center">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-balance">
                Ready to Join a Committee?
              </h3>
              <p className="font-serif text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Register now and select your preferred committee for SYGNET MUN.
              </p>
              <button className="font-serif font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base md:text-lg bg-card text-primary hover:bg-accent hover:text-card transition-colors">
                Register as Delegate
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
