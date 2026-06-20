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
    desc: 'Auris studies your factory for 15 days, learning your unique floor.',
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
    <section id="how-it-works" className="py-16 md:py-20" ref={containerRef}>
      <div className="section-container">
        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-[800] text-center mb-20">
          Live in 30 minutes.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting lines (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[calc(33.33%+16px)] right-[calc(33.33%+16px)] h-[2px]">
            <div className="reveal step-line w-full" />
          </div>

          {steps.map((s) => (
            <div key={s.num} className="reveal text-center relative">
              {/* Step number */}
              <div className="text-5xl md:text-6xl font-[800] gradient-text mb-6 leading-none">
                {s.num}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-card-border flex items-center justify-center mx-auto mb-6">
                <s.icon size={24} className="text-accent" />
              </div>

              <h3 className="text-xl font-[700] mb-3 tracking-normal">{s.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
