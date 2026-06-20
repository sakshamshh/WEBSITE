const footerLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
];

const team = [
  { name: 'Ayush Ranjan', email: 'ayush@skymlabs.com' },
  { name: 'Saksham Sharma', email: 'saksham@skymlabs.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-6 md:py-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Brand */}
          <div>
            <span className="text-white font-[800] text-xl tracking-tight opacity-40">AURIS</span>
            <p className="text-text-muted text-xs mt-2">Total factory intelligence.</p>
            <p className="text-text-muted text-xs mt-1 opacity-60">A Skymlabs Pvt Ltd product.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-xs font-semibold mb-3 tracking-normal uppercase opacity-50">Links</h4>
            <ul className="space-y-1.5">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-text-muted text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-semibold mb-3 tracking-normal uppercase opacity-50">Contact</h4>
            <div className="space-y-2">
              {team.map((t) => (
                <div key={t.email}>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <a
                    href={`mailto:${t.email}`}
                    className="text-text-muted text-xs hover:text-accent transition-colors"
                  >
                    {t.email}
                  </a>
                </div>
              ))}
              <a
                href="tel:+918178332368"
                className="text-text-muted text-xs hover:text-accent transition-colors block"
              >
                +91 81783 32368
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card-border pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-text-muted text-xs">© 2026 Skym Labs Pvt Ltd</p>
          <p className="text-text-muted text-xs">Built in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
