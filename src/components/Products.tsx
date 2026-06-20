import { useState, useEffect } from 'react';
import { Factory, ShoppingBag, Warehouse, Hospital, ArrowRight, Check } from 'lucide-react';
import { useRevealMany } from '../lib/hooks';

const products = [
  {
    id: 'factory',
    title: 'Auris Factory',
    icon: Factory,
    desc: 'Real-time worker intelligence for manufacturing floors.',
    detailedDesc: 'Provides real-time worker intelligence and bottleneck detection for manufacturing floors. Tracks cycle times, idle periods, and layout flows using existing cameras to optimize floor throughput.',
    features: [
      'Real-time cycle time & bottleneck alerts',
      'Zone-level worker occupancy tracking',
      'Automated shift activity reporting',
    ],
  },
  {
    id: 'retail',
    title: 'Auris Retail',
    icon: ShoppingBag,
    desc: 'Customer flow, dwell time, and zone analytics for retail stores.',
    detailedDesc: 'Delivers deep customer analytics and zone heatmaps for physical retail environments. Understand customer journeys, measure display effectiveness, and track dwell times in real time.',
    features: [
      'Customer flow & path tracking',
      'Zone heatmaps & layout optimization',
      'Real-time queue & checkout alerts',
    ],
  },
  {
    id: 'warehouse',
    title: 'Auris Warehouse',
    icon: Warehouse,
    desc: 'Worker tracking and inventory zone monitoring for warehouses.',
    detailedDesc: 'Optimizes logistics operations by tracking picker efficiency and inventory zone occupancy. Improve worker safety, streamline loading dock cycles, and monitor high-traffic lanes automatically.',
    features: [
      'Picker flow & travel path analytics',
      'Forklift & machinery safety zones',
      'Loading dock turnaround tracking',
    ],
  },
  {
    id: 'hospital',
    title: 'Auris Hospital',
    icon: Hospital,
    desc: 'Staff presence and patient zone monitoring for healthcare facilities.',
    detailedDesc: 'Enhances healthcare operations through real-time staff presence and patient flow monitoring. Ensure timely nurse rounds, monitor patient zone times, and improve overall emergency room throughput.',
    features: [
      'Staff presence & round tracking',
      'Patient wait time & flow analytics',
      'Critical zone occupancy alerts',
    ],
  },
];

export default function Products() {
  const containerRef = useRevealMany();
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  useEffect(() => {
    if (activeProduct) {
      const el = document.getElementById(`card-${activeProduct}`);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 150);
      }
    }
  }, [activeProduct]);

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
            const isExpanded = activeProduct === p.id;
            return (
              <div
                key={p.title}
                id={`card-${p.id}`}
                onClick={() => setActiveProduct(isExpanded ? null : p.id)}
                className={`reveal glass-card p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] group cursor-pointer ${
                  isExpanded ? 'border-accent shadow-[0_0_30px_rgba(0,255,136,0.15)]' : ''
                }`}
              >
                <div>
                  {/* Card Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/5 border border-card-border flex items-center justify-center group-hover:border-accent/40 transition-colors duration-300">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-[800] text-white mb-4">{p.title}</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed mb-4">
                    {p.desc}
                  </p>

                  {/* Expandable Details Container using CSS Grid for height animation */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-card-border/40'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-6">
                        <p className="text-text-muted text-sm md:text-base leading-relaxed">
                          {p.detailedDesc}
                        </p>

                        <ul className="space-y-3">
                          {p.features.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Check size={12} className="text-accent" />
                              </div>
                              <span className="leading-relaxed">{f}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-2">
                          <a
                            href="https://wa.me/918178332368"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn-primary w-full justify-center text-sm font-semibold"
                          >
                            Request Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow indicator at the bottom (collapses/expands action link style) */}
                <div
                  className={`mt-6 pt-4 border-t border-card-border/20 flex items-center justify-between text-sm font-semibold text-accent hover:text-white transition-colors duration-300 ${
                    isExpanded ? 'hidden' : ''
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
