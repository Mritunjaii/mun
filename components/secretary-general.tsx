export function SecretaryGeneral() {
  return (
    <section className="py-16 md:py-24 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12 pb-8 border-b-2 border-foreground">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
            Secretary General's Editorial
          </h2>
          <p className="text-sm font-serif text-muted-foreground uppercase tracking-widest">
            Leadership Message
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Message Column */}
          <div className="md:col-span-2 font-serif text-lg leading-relaxed space-y-6 border-r-2 border-border pr-8">
            <p className="text-foreground">
              Welcome to SYGNET MUN, the Maiden Edition of our premier Model United Nations conference. As the Secretary General, it is my distinct privilege to welcome delegates from institutions across the nation to this inaugural gathering of emerging leaders.
            </p>

            <p className="text-foreground">
              The world today faces unprecedented challenges—from climate crisis to geopolitical tensions, from economic disparities to pandemics. SYGNET MUN provides a platform where the next generation of policymakers, diplomats, and thought leaders can engage with these complex issues, develop informed perspectives, and practice the art of constructive dialogue.
            </p>

            <p className="text-foreground">
              Through rigorous debate, collaborative resolution drafting, and authentic diplomatic simulation, we endeavor to build bridges of understanding and foster a generation equipped to address global challenges with wisdom, empathy, and innovation.
            </p>

            <p className="italic text-foreground">
              I invite you to bring your passion, intellect, and commitment to this conference. Let us together shape tomorrow.
            </p>

            <div className="pt-4 border-t border-foreground">
              <p className="font-bold text-primary text-lg">— Secretary General, SYGNET MUN</p>
              <p className="text-sm text-muted-foreground">Maiden Edition</p>
            </div>
          </div>

          {/* Sidebar with key information */}
          <div>
            <div className="bg-card border-2 border-foreground p-6">
              <h3 className="font-serif text-lg font-bold text-primary mb-4 pb-3 border-b border-foreground">
                Message Highlights
              </h3>
              <ul className="space-y-3 font-serif text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">▪</span>
                  <span>Vision for emerging leaders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">▪</span>
                  <span>Platform for global engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">▪</span>
                  <span>Focus on contemporary issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">▪</span>
                  <span>Building diplomatic skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
