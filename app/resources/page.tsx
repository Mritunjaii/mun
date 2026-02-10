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
                {
                  committee: 'UN Security Council',
                  size: 'External Resources',
                  links: [
                    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/United_Nations_Security_Council' },
                    { label: 'UN Official', url: 'https://www.un.org/securitycouncil/' }
                  ]
                },
                {
                  committee: 'UN General Assembly',
                  size: 'External Resources',
                  links: [
                    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/United_Nations_General_Assembly' },
                    { label: 'UN Official', url: 'https://www.un.org/en/ga/' }
                  ]
                },
                {
                  committee: 'ECOSOC',
                  size: 'External Resources',
                  links: [
                    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/United_Nations_Economic_and_Social_Council' },
                    { label: 'UN Official', url: 'https://www.un.org/ecosoc/en/' }
                  ]
                },
                {
                  committee: 'Human Rights Council',
                  size: 'External Resources',
                  links: [
                    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/United_Nations_Human_Rights_Council' },
                    { label: 'UN Official', url: 'https://www.ohchr.org/en/hr-bodies/hrc/home' }
                  ]
                }
              ].map((guide, idx) => (
                <div key={idx} className="border-l-4 border-accent bg-card p-3 sm:p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                    <div className="min-w-0">
                      <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-primary">
                        {guide.committee}
                      </h3>
                      <p className="font-serif text-xs sm:text-sm text-muted-foreground">
                        {guide.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 bg-primary text-card hover:bg-accent hover:text-primary transition-colors font-serif font-bold text-xs"
                      >
                        {link.label} →
                      </a>
                    ))}
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
                <div className="space-y-2">
                  <p className="font-serif text-sm text-muted-foreground mb-3">External Resources:</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://en.wikipedia.org/wiki/Model_United_Nations#Rules_of_procedure"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-card hover:bg-accent hover:text-primary transition-colors font-serif font-bold text-sm"
                    >
                      Wikipedia: MUN Rules →
                    </a>
                    <a
                      href="https://www.un.org/en/model-united-nations"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-card hover:bg-accent hover:text-primary transition-colors font-serif font-bold text-sm"
                    >
                      UN: Model UN →
                    </a>
                  </div>
                </div>
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
                <div className="space-y-2">
                  <a
                    href="https://en.wikipedia.org/wiki/International_relations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    Wikipedia: International Relations →
                  </a>
                  <a
                    href="https://www.un.org/en/about-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    UN Official: About the UN →
                  </a>
                </div>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Resolution Writing Guide
                </h3>
                <p className="font-serif text-foreground mb-4">
                  Step-by-step guide to drafting effective UN resolutions with proper formatting and language.
                </p>
                <div className="space-y-2">
                  <a
                    href="https://en.wikipedia.org/wiki/United_Nations_resolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    Wikipedia: UN Resolutions →
                  </a>
                  <a
                    href="https://www.un.org/en/ga/about/ropga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    UN: Rules of Procedure →
                  </a>
                </div>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Country Matrix Database
                </h3>
                <p className="font-serif text-foreground mb-4">
                  Comprehensive profiles of UN member states including voting records, key policies, and allies.
                </p>
                <div className="space-y-2">
                  <a
                    href="https://en.wikipedia.org/wiki/Member_states_of_the_United_Nations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    Wikipedia: UN Member States →
                  </a>
                  <a
                    href="https://www.un.org/en/about-us/member-states"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    UN Official: Member States →
                  </a>
                </div>
              </div>

              <div className="bg-card border-l-4 border-accent p-6">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Public Speaking Tips
                </h3>
                <p className="font-serif text-foreground mb-4">
                  Best practices for effective speeches, responses, and point of order interventions.
                </p>
                <div className="space-y-2">
                  <a
                    href="https://en.wikipedia.org/wiki/Model_United_Nations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    Wikipedia: Model UN →
                  </a>
                  <a
                    href="https://www.un.org/en/delegate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-serif font-bold text-sm text-primary hover:text-accent transition-colors border-b border-primary hover:border-accent w-fit"
                  >
                    UN: Delegate Resources →
                  </a>
                </div>
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
                  <div className="space-y-3">
                    <p className="font-serif text-sm text-card/80">External Resources:</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://en.wikipedia.org/wiki/United_Nations_General_Assembly#Rules_of_procedure"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-card text-primary hover:bg-accent hover:text-card transition-colors font-serif font-bold text-sm"
                      >
                        Wikipedia: UN Procedure →
                      </a>
                      <a
                        href="https://www.un.org/en/ga/about/ropga/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-card text-primary hover:bg-accent hover:text-card transition-colors font-serif font-bold text-sm"
                      >
                        UN: Rules of Procedure →
                      </a>
                    </div>
                  </div>
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
