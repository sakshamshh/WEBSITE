const footerLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Live Dashboard', href: 'https://auris.skymlabs.com', external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-16 md:py-24">
      <div className="section-container">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="green-dot" />
              <span className="text-white font-[800] text-2xl tracking-tight opacity-30">AURIS</span>
            </div>
            <p className="text-text-muted text-sm">Total factory intelligence.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 tracking-normal">Links</h4>
            <ul className="space-y-3">
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
            <a
              href="mailto:saksham@skymlabs.com"
              className="text-text-muted text-sm hover:text-accent transition-colors"
            >
              saksham@skymlabs.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">© 2026 Skym Labs Pvt Ltd</p>
          <p className="text-text-muted text-xs">Built in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
