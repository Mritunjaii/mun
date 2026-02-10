export function ImportantDates() {
  const dates = [
    {
      event: 'Secretariat Application',
      date: 'February 1-4, 2025',
      description: 'Application period for prospective members of the SYGNET MUN Secretariat and organizational team.'
    },
    {
      event: 'Secretariat Interview',
      date: 'February 6, 2025',
      description: 'Interviews for secretariat candidates to finalize the organizing committee.'
    },
    {
      event: 'MUN Workshop',
      date: 'February 15, 2025',
      description: 'Preparatory workshop for delegates covering MUN procedures, parliamentary rules, and best practices.'
    },
    {
      event: 'MUN Registrations Open',
      date: 'February 15, 2025',
      description: 'Official registration window opens for all delegates, press corps, and committee chairs.'
    },
    {
      event: 'MUN Registration Deadline',
      date: 'March 14, 2025',
      description: 'Final deadline to complete registration and secure your place at SYGNET MUN.'
    },
    {
      event: 'Background Guide Release',
      date: 'March 16, 2025',
      description: 'Comprehensive background guides for all committees released to registered delegates.'
    },
    {
      event: 'SYGNET MUN Conference',
      date: 'March 20-22, 2025',
      description: 'The maiden conference - three days of intensive diplomatic simulation and international debate at NIT Hamirpur.'
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-card border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 md:mb-12 pb-6 sm:pb-8 border-b-2 border-foreground">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-1 sm:mb-2 text-balance">
            Important Dates
          </h2>
          <p className="text-xs sm:text-sm font-serif text-muted-foreground uppercase tracking-widest">
            Press Release — Timeline & Deadlines
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {dates.map((item, idx) => (
            <article key={idx} className="flex gap-4 sm:gap-6 md:gap-8 border-b border-border pb-4 sm:pb-6 md:pb-8 last:border-b-0 last:pb-0">
              <div className="flex-shrink-0 pt-1 sm:pt-2">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-accent rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-1 sm:mb-2">
                  <h3 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary text-balance">
                    {item.event}
                  </h3>
                  <span className="font-serif font-bold text-accent text-sm sm:text-base md:text-lg flex-shrink-0">
                    {item.date}
                  </span>
                </div>
                <p className="font-serif text-xs sm:text-sm md:text-base text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 pt-6 sm:pt-8 border-t-2 border-foreground">
          <div className="bg-primary text-card p-4 sm:p-6 text-center">
            <p className="font-serif text-xs sm:text-sm uppercase tracking-widest font-bold mb-2">
              Conference Venue
            </p>
            <p className="font-serif text-lg sm:text-xl font-bold">
              National Institute of Technology Hamirpur
            </p>
            <p className="font-serif text-xs sm:text-sm mt-1 sm:mt-2">
              Himachal Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
