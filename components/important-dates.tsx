export function ImportantDates() {
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

        {/* Announce Soon Banner */}
        <div className="border-4 border-primary bg-background p-8 sm:p-12 md:p-16 text-center">
          {/* Breaking News Banner */}
          <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-4 border-foreground">
            <p className="font-serif text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">
              Breaking News
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-4">
              ANNOUNCE SOON
            </h3>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200"></div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 sm:space-y-6">
            <p className="font-serif text-base sm:text-lg md:text-xl text-foreground leading-relaxed">
              Conference dates, registration deadlines, and key milestones will be announced shortly.
            </p>
            <p className="font-serif text-sm sm:text-base text-muted-foreground italic">
              Mark your calendars and stay tuned for the official timeline.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t-2 border-foreground">
            <div className="flex justify-center gap-2">
              <div className="w-1 h-8 bg-primary"></div>
              <div className="w-1 h-8 bg-accent"></div>
              <div className="w-1 h-8 bg-primary"></div>
            </div>
          </div>
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
