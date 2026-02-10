export function WhyParticipate() {
  const benefits = [
    {
      title: 'Public Speaking & Oratory',
      description: 'Develop confidence and eloquence in presenting ideas on the global stage. Master the art of persuasive communication.'
    },
    {
      title: 'Negotiation & Diplomacy',
      description: 'Learn strategies for consensus-building, compromise, and finding common ground among diverse perspectives.'
    },
    {
      title: 'Policy Research & Analysis',
      description: 'Dive deep into international issues, analyze complex geopolitical situations, and develop evidence-based policy positions.'
    },
    {
      title: 'Leadership Development',
      description: 'Exercise leadership through chairing committees, drafting resolutions, and guiding collaborative discourse.'
    },
    {
      title: 'Global Awareness',
      description: 'Gain comprehensive understanding of world affairs, international institutions, and contemporary global challenges.'
    },
    {
      title: 'Networking Opportunities',
      description: 'Connect with peers from across the nation, build lasting relationships, and expand your professional network.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 pb-8 border-b-2 border-foreground">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
            Why Participate?
          </h2>
          <p className="text-sm font-serif text-muted-foreground uppercase tracking-widest">
            Career & Personal Development Benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, idx) => (
            <article key={idx} className="border-b-2 border-border pb-6 last:border-b-0">
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                {idx + 1}. {benefit.title}
              </h3>
              <p className="font-serif text-foreground leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* Testimonial Style Section */}
        <div className="bg-card border-l-4 border-accent p-8">
          <p className="font-serif text-lg italic text-foreground mb-4">
            "Model United Nations transformed my understanding of global affairs and made me a more confident communicator. SYGNET MUN is an opportunity not to be missed."
          </p>
          <p className="font-serif font-bold text-primary">— Delegate, Previous MUN Participant</p>
        </div>
      </div>
    </section>
  )
}
