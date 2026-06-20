import { Factory, ShoppingBag, Warehouse, Hospital, ArrowRight } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

const products = [
  {
    title: 'Auris Factory',
    status: 'Live',
    icon: Factory,
    desc: 'Real-time worker intelligence for manufacturing floors.',
    actionText: 'Request Demo',
    link: 'https://wa.me/918766385565?text=Hi!%20I%27m%20interested%20in%20Auris%20Factory.',
    isLive: true,
  },
  {
    title: 'Auris Retail',
    status: 'Coming Soon',
    icon: ShoppingBag,
    desc: 'Customer flow, dwell time, and zone analytics for retail stores.',
    actionText: 'Notify Me',
    link: 'https://wa.me/918766385565?text=Hi!%20I%27m%20interested%20in%20Auris%20Retail%20when%20it%20launches.',
    isLive: false,
  },
  {
    title: 'Auris Warehouse',
    status: 'Coming Soon',
    icon: Warehouse,
    desc: 'Worker tracking and inventory zone monitoring for warehouses.',
    actionText: 'Notify Me',
    link: 'https://wa.me/918766385565?text=Hi!%20I%27m%20interested%20in%20Auris%20Warehouse%20when%20it%20launches.',
    isLive: false,
  },
  {
    title: 'Auris Hospital',
    status: 'Coming Soon',
    icon: Hospital,
    desc: 'Staff presence and patient zone monitoring for healthcare facilities.',
    actionText: 'Notify Me',
    link: 'https://wa.me/918766385565?text=Hi!%20I%27m%20interested%20in%20Auris%20Hospital%20when%20it%20launches.',
    isLive: false,
  },
];

export default function Products() {
  const containerRef = useRevealMany();

  return (
    <section id="products" className="py-16 md:py-24" ref={containerRef}>
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-[800] mb-4">
            The Auris Product Line
          </h2>
          <p className="reveal text-text-muted text-base md:text-lg max-w-xl mx-auto">
            One platform. Every physical space.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="reveal glass-card p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] group"
              >
                <div>
                  {/* Card Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-card-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-300">
                      <Icon size={28} className="text-accent" />
                    </div>
                    {p.isLive ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-text-muted border border-white/10">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-[800] text-white mb-4">{p.title}</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-8">
                    {p.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors duration-300"
                  >
                    {p.actionText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
