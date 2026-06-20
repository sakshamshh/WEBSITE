import { Check } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

const features = [
  'Built from your existing CCTV',
  'Live worker detection on the map',
  'Camera field-of-view overlays',
];

export default function LiveMapShowcase() {
  const containerRef = useRevealMany();

  return (
    <section className="py-16 md:py-20" ref={containerRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="reveal relative">
            <div className="float-anim">
              <div className="image-frame glow-green">
                <img
                  src="/images/factory-map.png"
                  alt="Auris 3D Live Map"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Glow underneath */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(0,255,136,0.25) 0%, transparent 70%)',
                filter: 'blur(16px)',
              }}
            />
          </div>

          {/* Text side */}
          <div>
            <p className="reveal text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Live 3D Map
            </p>
            <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-[800] mb-6">
              See your space
              <br />
              like never before.
            </h2>
            <p className="reveal text-text-muted text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              A real-time 3D model of your floor. Watch zone activity. See every camera's field of
              view. Spot bottlenecks the moment they form.
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
        </div>
      </div>
    </section>
  );
}
