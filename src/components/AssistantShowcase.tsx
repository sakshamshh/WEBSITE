import { Check } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';
import BrowserMockup from './BrowserMockup';

export default function AssistantShowcase() {
  const containerRef = useRevealMany();

  const features = [
    'Live floor context, always current',
    'Remembers every conversation',
    'Instant answers, no dashboards to dig through',
  ];

  return (
    <section id="product" className="py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="reveal order-2 lg:order-1">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              AI CHATBOT
            </p>
            <h2 className="text-3xl md:text-[2.25rem] font-bold tracking-[-0.02em] leading-[1.2] mb-5">
              Talk to your physical spaces. Literally.
            </h2>
            <p className="text-base md:text-lg text-[var(--color-text-body)] leading-[1.7] mb-8 max-w-lg">
              No more digging through complex dashboards or exporting CSVs. Just ask Auris questions in plain English and get answers backed by live camera data.
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

          {/* Image/Mockup */}
          <div className="reveal order-1 lg:order-2 w-full">
            <BrowserMockup src="/images/assistant.png" alt="Auris AI Assistant" />
          </div>

        </div>
      </div>
    </section>
  );
}
