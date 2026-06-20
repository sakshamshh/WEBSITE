import { Check } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

const features = [
  'Live factory context, always current',
  'Remembers every conversation',
  'Instant answers, no dashboards to dig through',
];

export default function AssistantShowcase() {
  const containerRef = useRevealMany();

  return (
    <section id="product" className="py-16 md:py-20" ref={containerRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div className="order-2 lg:order-1">
            <p className="reveal text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              AI Assistant
            </p>
            <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-[800] mb-6">
              Ask anything.
              <br />
              Know everything.
            </h2>
            <p className="reveal text-text-muted text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              A factory-aware AI trained on your floor. It knows your shift timings, peak hours,
              and worker activity. Ask in plain English, get answers in seconds.
            </p>

            <div className="space-y-4">
              {features.map((f) => (
                <div key={f} className="reveal flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-accent" />
                  </div>
                  <span className="text-sm md:text-base text-text-muted">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="reveal order-1 lg:order-2 relative">
            <div className="float-anim-alt">
              <div className="image-frame glow-cyan">
                <img
                  src="/images/assistant.png"
                  alt="Auris AI Assistant"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Glow underneath */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(0,212,255,0.25) 0%, transparent 70%)',
                filter: 'blur(16px)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
