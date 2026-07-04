import { Plug, Brain, Command } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

const steps = [
  {
    num: '01',
    title: 'Connect',
    desc: 'We plug into your existing cameras. Minimal setup, no rewiring.',
    icon: Plug,
  },
  {
    num: '02',
    title: 'Learn',
    desc: 'Auris studies your space for 15 days, learning your unique floor.',
    icon: Brain,
  },
  {
    num: '03',
    title: 'Command',
    desc: 'You get total intelligence — live counts, shifts, bottlenecks, AI answers — forever.',
    icon: Command,
  },
];

export default function HowItWorks() {
  const containerRef = useRevealMany();

  return (
    <section id="how-it-works" className="py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="section-container relative">
        <h2 className="reveal text-3xl md:text-[2.25rem] font-bold text-center tracking-[-0.02em] leading-[1.2] mb-16">
          How Auris is deployed.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="reveal relative group">
                <div className="text-[3.5rem] md:text-6xl font-bold text-[var(--color-accent)] mb-6 leading-none opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  {step.num}
                </div>
                
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Icon size={24} className="text-[var(--color-accent)]" />
                </div>
                
                <h3 className="text-xl font-semibold tracking-[-0.02em] mb-3 text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                
                <p className="text-sm text-[var(--color-text-body)] leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
