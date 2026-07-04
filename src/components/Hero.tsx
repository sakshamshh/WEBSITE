import { ArrowRight } from 'lucide-react';
import BrowserMockup from './BrowserMockup';

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      <div className="section-container relative z-10 text-center">
        {/* Eyebrow */}
        <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.15em] uppercase mb-5">
          AI INTELLIGENCE FOR PHYSICAL SPACES
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-[3.5rem] font-bold leading-[1.1] tracking-[-0.02em] mb-5">
          Where AI Meets
          <br />
          <span className="text-[var(--color-accent)]">the Real World.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[var(--color-text-body)] text-base md:text-lg max-w-[640px] mx-auto mb-10 leading-[1.7]">
          Skym Labs builds real-time intelligence systems for factories, warehouses, retail stores, and hospitals — using the cameras already on your walls.
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center mb-16">
          <a
            href="https://wa.me/918178332368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Request Demo <ArrowRight size={16} />
          </a>
        </div>

        {/* Factory map image in browser mockup */}
        <div className="max-w-3xl mx-auto">
          <BrowserMockup
            src="/images/factory-map.png"
            alt="Auris 3D Live Factory Map"
          />
        </div>
      </div>
    </section>
  );
}
