'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'

const SECRETARIAT_MEMBERS = [
  { name: 'Ayush Mothia', role: 'President Organising Committee' },
  { name: 'Akshatra Rao Bagul', role: 'Secretary General' },
  { name: 'Ayush Arora', role: 'Director General' },
  { name: 'Aryan Thakur', role: 'Deputy Director General' },
  { name: 'Mritunjai', role: 'USG Technical Affairs' },
  { name: 'Yashika Pathak', role: 'USG Finance' },
  { name: 'Kritagya Sharma', role: 'USG Executive Board Affairs' },
  { name: 'Shreya Thakur', role: 'USG Public Relations' },
  { name: 'Riya Sharma', role: 'USG Public Relations' },
  { name: 'Rudra Pratap', role: 'USG Social Media' },
  { name: 'Priyanshi Kashav', role: 'USG Social Media' },
  { name: 'Harsh Chauhan', role: 'USG Conference Affairs' },
  { name: 'Harsh Raghav', role: 'USG Design' },
  { name: 'Sugandhi Thakur', role: 'USG Content' },
  { name: 'Shashwat', role: 'USG Delegate Affairs' },
  { name: 'Navya Singh', role: 'USG Design' },
  { name: 'Riya', role: 'USG Content & Creative' },
  { name: 'Abhinav Pandey', role: 'USG Logistics' },
  { name: 'Miguel', role: 'USG Logistics' },
  { name: 'Danish', role: 'USG Organising Committee' },
  { name: 'Ansh', role: 'USG Organising Committee' },
  { name: 'Anshul', role: 'USG Outreach' },
  { name: 'Rudraksh Jaryal', role: 'USG Outreach' }
]

export default function SecretariatPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Page Header */}
      <section className="bg-card py-8 sm:py-12 md:py-16 lg:py-24 border-b-4 border-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-3 sm:mb-4 text-balance">
            Editorial Board & Secretariat
          </h1>
          <p className="font-serif text-xs sm:text-base md:text-lg text-muted-foreground">
            Secretariat — Leadership of SYGNET MUN
          </p>
        </div>
      </section>

      {/* Secretariat Grid Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 pb-6 sm:pb-8 border-b-2 border-foreground flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="font-serif text-xs uppercase tracking-widest text-accent font-bold mb-1 sm:mb-2">
                Meet the Organizers
              </p>
              <p className="font-serif text-sm sm:text-base md:text-lg text-foreground">
                The following team members comprise the Secretariat of SYGNET MUN and are committed to delivering an exceptional conference experience.
              </p>
            </div>
            <div className="text-right">
              <span className="font-serif text-xs sm:text-sm font-bold uppercase border border-foreground bg-card px-3 py-1.5 text-primary">
                23 Members Active
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {SECRETARIAT_MEMBERS.map((member, i) => {
              const num = i + 1;
              return (
                <article
                  key={num}
                  className="border-2 border-foreground bg-card p-3 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden border border-foreground/15 bg-background">
                    <Image
                      src={`/${num}.webp`}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={num <= 4}
                    />
                  </div>
                  <div className="mt-4 pt-3 border-t-2 border-foreground text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-primary tracking-tight">
                        {member.name}
                      </h3>
                      <p className="font-serif text-xs text-accent font-bold uppercase tracking-wider mt-1">
                        {member.role}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-dashed border-foreground/20 text-[10px] font-sans text-muted-foreground uppercase tracking-widest">
                      SYGNET MUN 2026
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

            {/* Inquiries Section */}
            <div className="mt-16 pt-12 border-t-2 border-foreground">
              <div className="border-4 border-foreground p-8 bg-card text-center max-w-3xl mx-auto">
                <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                  Questions for the Secretariat?
                </h3>
                <p className="font-serif text-muted-foreground mb-6">
                  For official inquiries, support, or partnership opportunities, contact us at sygnetmun@nith.ac.in or reach out to themritunjai@gmail.com.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <a
                    href="mailto:sygnetmun@nith.ac.in"
                    className="font-serif font-bold py-3 px-6 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-primary transition-colors text-sm uppercase"
                  >
                    Email Main Desk
                  </a>
                  <a
                    href="mailto:themritunjai@gmail.com"
                    className="font-serif font-bold py-3 px-6 border-2 border-foreground bg-background text-primary hover:bg-foreground hover:text-background transition-colors text-sm uppercase"
                  >
                    Contact Organizer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </main>
  )
}
