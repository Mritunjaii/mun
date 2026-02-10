'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const secretariat = [
  {
    name: 'Ananya Sharma',
    role: 'Secretary General',
    bio: 'Ananya is a final-year student of Civil Engineering with a passion for international relations and diplomacy. She has successfully chaired multiple MUN committees and is committed to fostering dialogue on global issues.'
  },
  {
    name: 'Rahul Patel',
    role: 'Under-Secretary General, Committees',
    bio: 'Rahul brings extensive experience in committee management and resolution drafting. His meticulous attention to detail ensures smooth proceedings across all committees.'
  },
  {
    name: 'Priya Verma',
    role: 'Under-Secretary General, Administration',
    bio: 'Priya oversees all logistical and administrative arrangements for SYGNET MUN. Her organizational prowess ensures a seamless experience for all participants.'
  },
  {
    name: 'Aditya Singh',
    role: 'Head of Credentials',
    bio: 'Aditya manages delegate registration, verification, and credentials. He ensures all participants are properly registered and recognized throughout the conference.'
  },
  {
    name: 'Neha Gupta',
    role: 'Head of Publications',
    bio: 'Neha is responsible for all conference publications including the daily newsletter, press releases, and official documents. She maintains the editorial voice of SYGNET MUN.'
  },
  {
    name: 'Vihaan Kapoor',
    role: 'Head of Hospitality',
    bio: 'Vihaan ensures that all delegates feel welcome and comfortable throughout the conference. He coordinates accommodation, meals, and recreational activities.'
  },
  {
    name: 'Isha Reddy',
    role: 'Delegate Advisor',
    bio: 'Isha provides guidance to delegates, offering support on research methodology, resolution writing, and presentation techniques. She is available throughout the conference.'
  },
  {
    name: 'Karan Malhotra',
    role: 'Financial Coordinator',
    bio: 'Karan manages all financial aspects of the conference including budget allocation, sponsorships, and expense management. He ensures transparent and efficient resource utilization.'
  }
]

export default function SecretariatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-8 sm:py-12 md:py-16 lg:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 sm:mb-4 text-balance">
            Editorial Board
          </h1>
          <p className="font-serif text-xs sm:text-base md:text-lg text-muted-foreground">
            Secretariat — Leadership of SYGNET MUN
          </p>
        </div>
      </section>

      {/* Secretariat Directory */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-8 sm:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground">
            <p className="font-serif text-xs uppercase tracking-widest text-muted-foreground mb-1 sm:mb-2">
              Meet the Organizers
            </p>
            <p className="font-serif text-sm sm:text-base md:text-lg text-foreground">
              The following team members comprise the Secretariat of SYGNET MUN and are committed to delivering an exceptional conference experience.
            </p>
          </div>

          {/* Secretariat Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {secretariat.map((member, idx) => (
              <article key={idx} className="border-2 border-foreground bg-card p-4 sm:p-6 hover:shadow-lg transition-shadow">
                <div className="pb-3 sm:pb-4 border-b-2 border-foreground mb-3 sm:mb-4">
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary text-balance">
                    {member.name}
                  </h2>
                  <p className="font-serif text-sm sm:text-base md:text-lg font-semibold text-accent">
                    {member.role}
                  </p>
                </div>
                <p className="font-serif text-xs sm:text-sm md:text-base text-foreground leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>

          {/* Departments Section */}
          <div className="border-t-2 border-foreground pt-16">
            <h2 className="font-serif text-4xl font-bold text-primary mb-12 pb-4 border-b-2 border-foreground">
              Departments
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Committee Affairs
                </h3>
                <p className="font-serif text-foreground">
                  Responsible for all committee operations, including chair assignments, agenda finalization, and procedural guidelines.
                </p>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Logistics & Hospitality
                </h3>
                <p className="font-serif text-foreground">
                  Ensures smooth conference operations from registration to accommodation and provides support throughout the event.
                </p>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Communications & Media
                </h3>
                <p className="font-serif text-foreground">
                  Manages all publications, press releases, social media, and official communications of SYGNET MUN.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 pt-16 border-t-2 border-foreground">
            <div className="bg-primary text-card p-8 text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Questions for the Secretariat?
              </h3>
              <p className="font-serif text-lg mb-6">
                Contact us at sygnetmun@nith.ac.in or reach out through our social channels.
              </p>
              <button className="font-serif font-bold py-3 px-8 bg-card text-primary hover:bg-accent hover:text-card transition-colors text-lg">
                Send an Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
