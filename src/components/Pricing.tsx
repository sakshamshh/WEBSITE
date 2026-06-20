import { Check, ArrowRight } from 'lucide-react';
import { useReveal } from '../lib/hooks';

const included = [
  'All cameras connected',
  'Live 3D map + AI assistant',
  'Shift & bottleneck intelligence',
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="pricing" className="py-24 md:py-32" ref={ref}>
      <div className="reveal section-container flex justify-center">
        <div className="pricing-card w-full max-w-[480px] p-8 md:p-10 text-center">
          {/* Label */}
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-6">
            Simple Pricing
          </p>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-[800] mb-4">First month free.</h2>

          {/* Price */}
          <div className="mb-2">
            <span className="text-4xl md:text-5xl font-[800] gradient-text">₹6,000</span>
            <span className="text-text-muted text-base ml-1">/month</span>
          </div>
          <p className="text-text-muted text-sm mb-8">
            No contracts. No setup fees. Cancel anytime.
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
            href="https://wa.me/918766385565"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
          >
            Request Demo <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
