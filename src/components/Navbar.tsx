import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function scrollToHash(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Product', href: '#products' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : ''
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo: owl mark + Auris */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <img
            src="/images/logo-owl.png"
            alt="Skym Labs"
            className="h-8 w-auto"
          />
          <span className="text-[var(--color-text-primary)] font-bold text-lg tracking-tight">
            Auris
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => { e.preventDefault(); scrollToHash(l.href); }}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/918178332368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2.5 !px-5 !text-sm"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--color-text-primary)] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(255, 255, 255, 0.97)', backdropFilter: 'blur(12px)' }}
      >
        <div className="section-container py-5 flex flex-col gap-3 border-t border-[var(--color-border)]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[var(--color-text-body)] hover:text-[var(--color-text-primary)] text-base font-medium transition-colors py-1"
              onClick={(e) => { e.preventDefault(); scrollToHash(l.href); setMobileOpen(false); }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/918178332368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !text-sm mt-2 w-fit"
          >
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
