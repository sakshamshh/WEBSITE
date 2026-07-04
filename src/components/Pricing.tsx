import { Phone, Check } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

export default function Pricing() {
  const containerRef = useRevealMany();

  const includes = [
    'All cameras connected',
    'Live 3D map + AI assistant',
    'Shift & bottleneck intelligence',
  ];

  return (
    <section id="pricing" className="py-16 md:py-24" ref={containerRef}>
      <div className="section-container max-w-[640px]">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-[2.25rem] font-bold tracking-[-0.02em] leading-[1.2] mb-4">
            Custom built for your floor.
          </h2>
          <p className="reveal text-base md:text-lg text-[var(--color-text-body)] leading-[1.7]">
            Every facility is unique. We price based on your camera count and specific intelligence needs.
          </p>
        </div>

        <div className="reveal pricing-card p-8 md:p-10 mx-auto max-w-[480px]">
          <div className="text-center mb-8">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              ENTERPRISE DEPLOYMENT
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-[var(--color-text-primary)] mb-3">
              Custom Quote
            </h3>
            <p className="text-sm text-[var(--color-text-body)] leading-relaxed max-w-xs mx-auto">
              Flat annual fee based on camera footprint. Hardware agnostic.
            </p>
          </div>

          <div className="h-px bg-[var(--color-border)] mb-8 w-full" />

          <ul className="space-y-4 mb-10">
            {includes.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="check-circle">
                  <Check size={13} className="text-[var(--color-accent)]" />
                </div>
                <span className="text-sm text-[var(--color-text-body)] font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/918178332368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-base py-3.5"
          >
            <Phone size={18} />
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
