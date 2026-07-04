import { EyeOff, Clock, LayoutGrid } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

const problems = [
  {
    icon: EyeOff,
    title: 'No Real-Time Visibility',
    desc: 'Relying on guesswork and manual audits instead of live data.',
  },
  {
    icon: Clock,
    title: 'Invisible Idle Time',
    desc: 'Bottlenecks, delays, and inefficiencies that go unnoticed day after day.',
  },
  {
    icon: LayoutGrid,
    title: 'Zero Floor Intelligence',
    desc: 'No real-time insights into worker movements, zone utilization, or flow dynamics.',
  },
];

export default function Problem() {
  const containerRef = useRevealMany();

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-[2.25rem] font-bold tracking-[-0.02em] leading-[1.2] mb-4">
            The Problem with Physical Operations
          </h2>
          <p className="reveal text-[var(--color-text-body)] text-base md:text-lg max-w-2xl mx-auto leading-[1.7]">
            You have cameras everywhere, but they only record history. Meanwhile, your floor runs blind to what's happening right now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="reveal card p-8 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[var(--color-text-muted)]" />
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] mb-3 text-[var(--color-text-primary)]">
                  {p.title}
                </h3>
                <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
