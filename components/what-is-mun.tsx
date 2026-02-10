export function WhatIsMUN() {
  return (
    <section id="what-is-mun" className="py-8 sm:py-12 md:py-16 lg:py-24 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b-2 border-foreground">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6 md:mb-8 text-balance">
            What is Model United Nations?
          </h2>
          <div className="space-y-4 sm:space-y-6 font-serif text-sm sm:text-base md:text-lg leading-relaxed text-foreground">
            <p>
              Model United Nations is an educational simulation of the United Nations where students take on the roles of delegates representing different countries. It serves as a platform for young leaders to engage in diplomacy, debate, and policy-making on contemporary global issues.
            </p>
            <p>
              Participants engage in rigorous research, develop critical thinking skills, and practice the art of negotiation and consensus-building. Through MUN, students gain deeper insights into international relations, geopolitics, and the complexities of global governance.
            </p>
            <p>
              MUN cultivates public speaking abilities, enhances presentation skills, and fosters a profound understanding of world affairs. It prepares students to become informed, articulate, and globally conscious citizens capable of addressing the challenges of our interconnected world.
            </p>
          </div>
        </div>

        {/* Key Benefits in newspaper column style */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <article className="border-b md:border-b-0 md:border-r-2 border-border pb-6 sm:pb-8 md:pb-0 md:pr-6 lg:pr-8">
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 pb-2 border-b border-foreground">
              Diplomatic Engagement
            </h3>
            <p className="font-serif text-sm sm:text-base text-foreground leading-relaxed">
              Learn the nuances of diplomatic protocol and international negotiation. Experience firsthand how nations communicate, compromise, and collaborate on the world stage.
            </p>
          </article>
          <article>
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4 pb-2 border-b border-foreground">
              Leadership Development
            </h3>
            <p className="font-serif text-sm sm:text-base text-foreground leading-relaxed">
              Build essential leadership competencies including public speaking, strategic thinking, and decision-making under pressure. Emerge as a confident voice in global discourse.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
