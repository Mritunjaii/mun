'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-16 md:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-primary mb-4">
            Archives & Documents
          </h1>
          <p className="font-serif text-lg text-muted-foreground">
            Essential Resources for SYGNET MUN Delegates
          </p>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          {/* Background Guides Section */}
          <article className="mb-16 pb-16 border-b-2 border-foreground">
            <div className="mb-6 sm:mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 text-balance">
                Background Guides
              </h2>
              <p className="font-serif text-xs sm:text-base md:text-lg text-muted-foreground">
                Comprehensive guides for each committee covering agenda items, historical context, and key stakeholders.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                { committee: 'UN Security Council', size: '45 pages', status: 'Available' },
                { committee: 'UN General Assembly', size: '52 pages', status: 'Available' },
                { committee: 'ECOSOC', size: '38 pages', status: 'Available' },
                { committee: 'Human Rights Council', size: '41 pages', status: 'Available' }
              ].map((guide, idx) => (
                <div key={idx} className="border-l-4 border-accent bg-card p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-primary">
                      {guide.committee}
                    </h3>
                    <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                      {guide.size}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 sm:flex-shrink-0">
                    <span className="inline-block px-2 sm:px-3 py-1 bg-primary text-card text-xs font-serif font-bold">
                      {guide.status}
                    </span>
                    <button className="font-serif font-bold text-xs sm:text-sm text-primary hover:text-accent transition-colors border-b-2 border-primary hover:border-accent">
                      Download →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Code of Conduct Section */}
          <article className="mb-16 pb-16 border-b-2 border-foreground">
            <div className="mb-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                Code of Conduct
              </h2>
              <p className="font-serif text-lg text-muted-foreground">
                Guidelines and standards for professional conduct throughout SYGNET MUN.
              </p>
            </div>

            <div className="bg-card border-2 border-foreground p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Delegate Conduct Standards
                  </h3>
                  <p className="font-serif text-xs sm:text-sm md:text-base text-foreground mb-3 sm:mb-4">
                    All delegates are expected to uphold the highest standards of professional and ethical behavior.
                  </p>
                  <ul className="space-y-1 sm:space-y-2 font-serif text-xs sm:text-sm md:text-base text-foreground">
                    <li>• Respect for diverse viewpoints and cultural perspectives</li>
                    <li>• Adherence to parliamentary procedure and decorum</li>
                    <li>• Professional communication and absence of personal attacks</li>
                    <li>• Punctuality and attendance at all scheduled sessions</li>
                    <li>• Compliance with venue rules and safety protocols</li>
                  </ul>
                </div>

                <div className="border-t-2 border-foreground pt-4 sm:pt-6">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2 sm:mb-3">
                    Consequences of Misconduct
                  </h3>
                  <p className="font-serif text-xs sm:text-sm md:text-base text-foreground">
                    Violations of the Code of Conduct may result in warnings, suspension from sessions, or removal from the conference. The Secretariat reserves the right to take appropriate action as deemed necessary.
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-foreground">
                <button className="font-serif font-bold py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base bg-primary text-card hover:bg-accent hover:text-primary transition-colors">
                  Download Full Code of Conduct (PDF)
                </button>
              </div>
            </div>
          </article>

          {/* Study Materials Section */}
          <article className="mb-16 pb-16 border-b-2 border-foreground">
            <div className="mb-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                Study Materials & Resources
              </h2>
              <p className="font-serif text-lg text-muted-foreground">
                Curated materials to help you prepare for successful participation at SYGNET MUN.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  International Relations Primer
                </h3>
                <p className="font-serif text-foreground mb-4">
                  Introduction to key concepts in international relations, diplomacy, and global governance.
                </p>
                <button className="font-serif font-bold text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent">
                  Access Resource →
                </button>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Resolution Writing Guide
                </h3>
                <p className="font-serif text-foreground mb-4">
                  Step-by-step guide to drafting effective UN resolutions with proper formatting and language.
                </p>
                <button className="font-serif font-bold text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent">
                  Access Resource →
                </button>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Country Matrix Database
                </h3>
                <p className="font-serif text-foreground mb-4">
                  Comprehensive profiles of UN member states including voting records, key policies, and allies.
                </p>
                <button className="font-serif font-bold text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent">
                  Access Resource →
                </button>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Public Speaking Tips
                </h3>
                <p className="font-serif text-foreground mb-4">
                  Best practices for effective speeches, responses, and point of order interventions.
                </p>
                <button className="font-serif font-bold text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent">
                  Access Resource →
                </button>
              </div>
            </div>
          </article>

          {/* Procedure & Rules Section */}
          <article className="mb-16 pb-16 border-b-2 border-foreground">
            <div className="mb-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                Procedure & Rules of Conference
              </h2>
              <p className="font-serif text-lg text-muted-foreground">
                Parliamentary procedure and committee rules for SYGNET MUN.
              </p>
            </div>

            <div className="bg-primary text-card p-8">
              <div className="space-y-4 font-serif">
                <p>
                  SYGNET MUN follows modified UN parliamentary procedure with adaptations for an educational setting. All delegates should familiarize themselves with basic parliamentary motions, voting procedures, and amendment processes.
                </p>
                <p>
                  Each committee has a specific agenda document that outlines the particular rules and procedures for that committee. These are included in the individual background guides.
                </p>
                <div className="mt-6 pt-6 border-t border-card/30">
                  <button className="font-serif font-bold py-3 px-6 bg-card text-primary hover:bg-accent hover:text-card transition-colors">
                    Download Rules of Procedure
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Contact for Resources */}
          <article>
            <div className="bg-card border-2 border-foreground p-8 text-center">
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                Need Additional Resources?
              </h3>
              <p className="font-serif text-lg text-foreground mb-6">
                Can't find what you're looking for? Contact our team for assistance.
              </p>
              <button className="font-serif font-bold py-3 px-8 bg-primary text-card hover:bg-accent hover:text-primary transition-colors">
                Contact the Secretariat
              </button>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
