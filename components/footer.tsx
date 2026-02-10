export function Footer() {
  return (
    <footer className="bg-primary text-card border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-card/30">
          {/* About */}
          <div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b border-card/50">
              The CSOC Chronicle
            </h3>
            <p className="font-serif text-xs sm:text-sm leading-relaxed">
              SYGNET MUN Maiden Edition — An official publication of CSOC, Society of Civil Engineering, NIT Hamirpur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b border-card/50">
              Navigation
            </h3>
            <ul className="space-y-2 font-serif text-xs sm:text-sm">
              <li>
                <a href="/committees" className="hover:underline">
                  Committees
                </a>
              </li>
              <li>
                <a href="/secretariat" className="hover:underline">
                  Secretariat
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:underline">
                  Registration
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b border-card/50">
              Contact Us
            </h3>
            <div className="space-y-2 sm:space-y-3 font-serif text-xs sm:text-sm">
              <div>
                <p className="font-bold">Email</p>
                <a href="mailto:sygnetmun@nith.ac.in" className="hover:underline break-all">
                  sygnetmun@nith.ac.in
                </a>
              </div>
              <div>
                <p className="font-bold">Phone</p>
                <a href="tel:+91-9876543210" className="hover:underline">
                  +91-9876543210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Publication Info */}
        <div className="border-t border-card/30 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <p className="font-serif text-xs text-center text-card/70 mb-2 sm:mb-4">
            Published by CSOC, Society of Civil Engineering, National Institute of Technology Hamirpur
          </p>
          <p className="font-serif text-xs text-center text-card/70">
            "Voices That Shape Tomorrow" — Maiden Edition, 2025
          </p>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
            <a href="#" className="text-card hover:text-accent transition-colors font-serif font-bold text-xs sm:text-sm">
              Twitter
            </a>
            <a href="#" className="text-card hover:text-accent transition-colors font-serif font-bold text-xs sm:text-sm">
              Instagram
            </a>
            <a href="#" className="text-card hover:text-accent transition-colors font-serif font-bold text-xs sm:text-sm">
              Facebook
            </a>
          </div>
          <p className="font-serif text-xs text-card/70 text-center md:text-right">
            © 2025 CSOC, NIT Hamirpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
