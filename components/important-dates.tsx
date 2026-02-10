export function ImportantDates() {
  const dates = [
    {
      event: 'Registrations Open',
      date: 'January 15, 2025',
      description: 'Begin your journey to SYGNET MUN. Early registration discounts available.'
    },
    {
      event: 'Early Bird Deadline',
      date: 'February 28, 2025',
      description: 'Last date for early bird registration with discounted fees.'
    },
    {
      event: 'Regular Registration Deadline',
      date: 'March 31, 2025',
      description: 'Final deadline for regular registration at standard fees.'
    },
    {
      event: 'Background Guide Release',
      date: 'April 1, 2025',
      description: 'Detailed background guides for all committees released for delegates.'
    },
    {
      event: 'SYGNET MUN Conference',
      date: 'May 10-12, 2025',
      description: 'The main conference event - three days of intensive diplomatic simulation at NIT Hamirpur.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-card border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 pb-8 border-b-2 border-foreground">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
            Important Dates
          </h2>
          <p className="text-sm font-serif text-muted-foreground uppercase tracking-widest">
            Press Release — Timeline & Deadlines
          </p>
        </div>

        <div className="space-y-8">
          {dates.map((item, idx) => (
            <article key={idx} className="flex gap-8 border-b border-border pb-8 last:border-b-0 last:pb-0">
              <div className="flex-shrink-0 pt-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl font-bold text-primary">
                    {item.event}
                  </h3>
                  <span className="font-serif font-bold text-accent text-lg">
                    {item.date}
                  </span>
                </div>
                <p className="font-serif text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-foreground">
          <div className="bg-primary text-card p-6 text-center">
            <p className="font-serif text-sm uppercase tracking-widest font-bold mb-2">
              Conference Venue
            </p>
            <p className="font-serif text-xl font-bold">
              National Institute of Technology Hamirpur
            </p>
            <p className="font-serif text-sm mt-2">
              Himachal Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
