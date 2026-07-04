import { useRevealMany } from '../lib/hooks';

const brands = ['CP Plus', 'Dahua', 'Hikvision', '+ more'];

export default function CompatibleCameras() {
  const containerRef = useRevealMany();

  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]" ref={containerRef}>
      <div className="section-container text-center">
        <h2 className="reveal text-3xl md:text-[2.25rem] font-bold tracking-[-0.02em] leading-[1.2] mb-4">
          Works with your existing hardware.
        </h2>
        <p className="reveal text-base md:text-lg text-[var(--color-text-body)] mb-10 max-w-lg mx-auto leading-[1.7]">
          No need to rip and replace. Auris connects to standard RTSP/IP cameras you already own.
        </p>

        <div className="reveal flex flex-wrap justify-center gap-4 mb-6">
          {brands.map((b) => (
            <div key={b} className="brand-pill">
              {b}
            </div>
          ))}
        </div>
        
        <p className="reveal text-sm text-[var(--color-text-muted)]">
          Supports any RTSP compatible IP camera.
        </p>
      </div>
    </section>
  );
}
