export function AboutSYGNET() {
  return (
    <section className="py-16 md:py-24 bg-card border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8 pb-8 border-b-2 border-foreground">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            About SYGNET MUN
          </h2>
          <p className="text-sm font-serif text-muted-foreground mb-6 uppercase tracking-widest">
            Editorial Feature
          </p>
        </div>

        <article className="font-serif text-lg leading-relaxed space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">The Meaning Behind SYGNET</h3>
            <p className="text-foreground">
              SYGNET represents the young swan—a symbol of grace, emerging leadership, and the transformation of ideas into action. Just as swans glide across waters with elegance and purpose, SYGNET MUN brings together emerging leaders who navigate the complex waters of international diplomacy with poise and vision.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 py-2">
            <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-foreground">
              SYGNET MUN is dedicated to fostering academic excellence, diplomatic engagement, and global awareness among students. We create a platform where young minds collaborate, debate, and develop solutions to pressing global issues. Our conference blends rigorous academic preparation with authentic diplomatic simulation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">Hosted by CSOC, NIT Hamirpur</h3>
            <p className="text-foreground">
              The CSOC (Society of Civil Engineering) at National Institute of Technology Hamirpur is proud to present this inaugural edition of SYGNET MUN. Bringing together delegates from institutions across the nation, we aim to create an unforgettable experience of international diplomacy, policy discourse, and transformative leadership development.
            </p>
          </div>

          <div className="border-t-2 border-b-2 border-foreground py-4 my-6">
            <h3 className="text-2xl font-bold text-primary mb-2">What Makes SYGNET Special</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Authentic diplomatic simulation with carefully curated agendas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Expert guidance from experienced chairs and resource persons</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Interactive workshops on international relations and diplomacy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>Networking opportunities with delegates from prestigious institutions</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}
