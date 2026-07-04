import { Check } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';
import BrowserMockup from './BrowserMockup';

export default function LiveMapShowcase() {
  const containerRef = useRevealMany();

  const features = [
    'Built from your existing CCTV',
    'Live worker detection on the map',
    'Camera field-of-view overlays',
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-[var(--color-bg-alt)]" ref={containerRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image/Mockup (Left side) */}
          <div className="reveal w-full">
            <BrowserMockup src="/images/factory-map.png" alt="Auris 3D Live Map" />
          </div>

          {/* Text Content (Right side) */}
          <div className="reveal">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              3D DIGITAL TWIN
            </p>
            <h2 className="text-3xl md:text-[2.25rem] font-bold tracking-[-0.02em] leading-[1.2] mb-5">
              Your floor. Alive on screen.
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-body)] leading-[1.7] mb-8 max-w-lg">
              We convert your 2D camera feeds into a live 3D map of your facility. See exactly where workers are, identify congestion zones, and monitor safety — all in real time.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="check-circle">
                    <Check size={13} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="text-sm md:text-base text-[var(--color-text-body)] font-medium">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/918178332368"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Request Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
