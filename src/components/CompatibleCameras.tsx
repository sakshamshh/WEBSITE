import { useReveal } from '../lib/hooks';

const brands = ['CP Plus', 'Dahua', 'Hikvision', '+ more'];

export default function CompatibleCameras() {
  const ref = useReveal();

  return (
    <section className="py-16 md:py-20" ref={ref}>
      <div className="reveal section-container text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[800] mb-4">
          Works with what you already have.
        </h2>
        <p className="text-text-muted text-base md:text-lg mb-12 max-w-lg mx-auto">
          Auris connects to the CCTV brands already on your wall.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-8">
          {brands.map((b) => (
            <span key={b} className="brand-pill">
              {b}
            </span>
          ))}
        </div>

        <p className="text-text-muted text-sm">
          No new cameras. No complex wiring. No downtime.
        </p>
      </div>
    </section>
  );
}
