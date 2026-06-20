import { Check, Phone } from 'lucide-react';

const included = [
  'All cameras connected',
  'Live 3D map + AI assistant',
  'Shift & bottleneck intelligence',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="section-container flex justify-center">
        <div className="pricing-card w-full max-w-[480px] p-8 md:p-10 text-center">
          {/* Label */}
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Pricing
          </p>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-[800] mb-3">
            Custom to your floor.
          </h2>

          <p className="text-text-muted text-sm mb-8 max-w-xs mx-auto leading-relaxed">
            Every physical space is different. We price based on camera count and layout size — no hidden fees, no contracts.
          </p>

          {/* Divider */}
          <div className="h-px bg-card-border mb-8" />

          {/* Included */}
          <div className="space-y-4 mb-10 text-left">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-accent" />
                </div>
                <span className="text-sm text-text-muted">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918766385565?text=Hi!%20I%27d%20like%20to%20talk%20about%20pricing%20for%20Auris."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            <Phone size={16} /> Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
