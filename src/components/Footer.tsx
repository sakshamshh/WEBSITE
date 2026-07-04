import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* Brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 mb-6 group inline-flex"
            >
              <img
                src="/images/logo2.svg"
                alt="Skym Labs"
                className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300"
              />
              <span className="text-[var(--color-text-primary)] font-bold tracking-tight">
                Skym Labs Pvt. Ltd.
              </span>
            </a>
            <p className="text-sm text-[var(--color-text-body)] max-w-xs leading-relaxed">
              Real-time intelligence for physical operations. We turn your existing cameras into an active management system.
            </p>
          </div>

          {/* Contact Links */}
          <div className="md:text-right flex flex-col md:items-end justify-center">
            <h4 className="text-sm font-semibold tracking-[-0.01em] text-[var(--color-text-primary)] mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/918178332368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center md:justify-end gap-2 text-sm text-[var(--color-text-body)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Phone size={16} />
                +91 817 833 2368
              </a>
              <a
                href="mailto:contactus@skymlabs.com"
                className="flex items-center md:justify-end gap-2 text-sm text-[var(--color-text-body)] hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail size={16} />
                contactus@skymlabs.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-border)] gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} Skym Labs Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm font-medium text-[var(--color-text-muted)]">
            Auris is a product of Skym Labs Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
