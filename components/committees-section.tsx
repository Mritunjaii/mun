export function CommitteesSection() {
  const committees = [
    {
      name: 'United Nations Security Council',
      agenda: 'Geopolitical Stability and Peacekeeping Operations',
      description: 'The primary organ responsible for maintaining international peace and security, addressing conflict resolution and sanctions.',
      difficulty: 'Advanced'
    },
    {
      name: 'United Nations General Assembly',
      agenda: 'Sustainable Development Goals and Climate Action',
      description: 'The main deliberative body of the UN, discussing international issues ranging from human rights to sustainable development.',
      difficulty: 'Intermediate'
    },
    {
      name: 'Economic and Social Council',
      agenda: 'Global Economic Integration and Development',
      description: 'Coordinates the economic and social work of the UN and its specialized agencies, focusing on development and welfare.',
      difficulty: 'Intermediate'
    },
    {
      name: 'Human Rights Council',
      agenda: 'Protection of Minority Rights and Indigenous Communities',
      description: 'Addresses human rights violations and promotes the protection of fundamental freedoms across the globe.',
      difficulty: 'Advanced'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-card border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 pb-8 border-b-2 border-foreground">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-2">
            Committees in Session
          </h2>
          <p className="text-sm font-serif text-muted-foreground uppercase tracking-widest">
            Global Chambers
          </p>
        </div>

        <div className="space-y-8">
          {committees.map((committee, idx) => (
            <article key={idx} className="border-b-2 border-border pb-8 last:border-b-0 last:pb-0">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-3xl font-bold text-primary flex-1">
                  {committee.name}
                </h3>
                <span className="inline-block ml-4 px-4 py-2 bg-primary text-card text-sm font-serif font-bold">
                  {committee.difficulty}
                </span>
              </div>

              <p className="font-serif text-lg font-semibold text-accent mb-3 italic">
                Agenda: {committee.agenda}
              </p>

              <p className="font-serif text-lg leading-relaxed text-foreground mb-6">
                {committee.description}
              </p>

              <button className="font-serif font-bold text-primary hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1">
                Download Background Guide →
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-foreground">
          <p className="font-serif text-center text-muted-foreground">
            Each committee offers unique diplomatic challenges and opportunities for substantive engagement on global issues.
          </p>
        </div>
      </div>
    </section>
  )
}
