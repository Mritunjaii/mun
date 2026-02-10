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

        <div className="text-center py-16">
          <div className="inline-block px-8 py-4 bg-accent text-card border-4 border-primary">
            <p className="font-serif text-2xl md:text-3xl font-bold">
              Announce Soon
            </p>
          </div>
          <p className="font-serif text-lg text-muted-foreground mt-8 max-w-2xl mx-auto">
            Committee details, agendas, and background guides will be announced shortly. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  )
}
