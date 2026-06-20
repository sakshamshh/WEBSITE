const footerLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Live Dashboard', href: 'https://auris.skymlabs.com', external: true },
];

const team = [
  { name: 'Ayush Ranjan', email: 'ayush@skymlabs.com' },
  { name: 'Saksham Sharma', email: 'saksham@skymlabs.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 md:py-10">
      <div className="section-container">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="green-dot" />
              <span className="text-white font-[800] text-2xl tracking-tight opacity-30">AURIS</span>
            </div>
            <p className="text-text-muted text-sm">Total factory intelligence.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-normal">Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
            <h4 className="text-white text-sm font-semibold mb-4 tracking-normal">Contact</h4>
            <div className="space-y-3">
              {team.map((t) => (
                <div key={t.email}>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <a
                    href={`mailto:${t.email}`}
                    className="text-text-muted text-sm hover:text-accent transition-colors"
                  >
                    {t.email}
                  </a>
                </div>
              ))}
              <div className="pt-1">
                <a
                  href="tel:+918178332368"
                  className="text-text-muted text-sm hover:text-accent transition-colors"
                >
                  +91 81783 32368
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-muted text-xs">© 2026 Skym Labs Pvt Ltd</p>
          <p className="text-text-muted text-xs">Built in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
