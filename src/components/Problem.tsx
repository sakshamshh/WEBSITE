import { EyeOff, Clock, LayoutGrid } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

const problems = [
  {
    icon: EyeOff,
    title: 'Manual Headcounts',
    desc: 'Registers and guesswork instead of real numbers.',
  },
  {
    icon: Clock,
    title: 'Invisible Idle Time',
    desc: "Bottlenecks and downtime nobody notices until it's too late.",
  },
  {
    icon: LayoutGrid,
    title: 'Zero Floor Visibility',
    desc: "No live view of who's working where, right now.",
  },
];

export default function Problem() {
  const containerRef = useRevealMany();

  return (
    <section className="py-24 md:py-32" ref={containerRef}>
      <div className="section-container text-center">
        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-[800] mb-5">
          Most factories operate blind.
        </h2>
        <p className="reveal text-text-muted text-base md:text-lg max-w-xl mx-auto mb-16">
          You can't improve what you can't see. Today, the factory floor is a black box.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="reveal glass-card-red p-8 text-left">
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,80,80,0.1)] flex items-center justify-center mb-6">
                <p.icon size={24} className="text-[#ff5050]" />
              </div>
              <h3 className="text-xl font-[700] mb-3 tracking-normal">{p.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
