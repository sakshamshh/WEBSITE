import { useState } from 'react';
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
      {
        title: 'Live worker count per zone',
        desc: 'know exactly how many people are on the floor right now, updated every few seconds',
      },
      {
        title: 'Shift intelligence',
        desc: 'automatic shift start/end detection, peak hours, lunch dip, all without manual input',
      },
      {
        title: 'Bottleneck detection',
        desc: 'identifies which workstation is consistently overloaded and costing you money',
      },
      {
        title: 'Idle time tracking',
        desc: 'measures dead time per zone across the full shift with cost estimates in ₹',
      },
    ],
    chatbotFeature: {
      title: 'Auris AI Chatbot',
      desc: 'ask "How was today\'s shift?" or "Which zone was most idle this week?" and get instant answers in plain English',
    },
  },
  {
    id: 'retail',
    title: 'Auris Retail',
    icon: ShoppingBag,
    desc: 'Customer flow, dwell time, and zone analytics for retail stores.',
    detailedDesc: 'Delivers deep customer analytics and zone heatmaps for physical retail environments. Understand customer journeys, measure display effectiveness, and track dwell times in real time.',
    features: [
      {
        title: 'Customer flow mapping',
        desc: 'see how customers move through your store in real time',
      },
      {
        title: 'Zone dwell time',
        desc: 'know which sections customers spend the most time in',
      },
      {
        title: 'Peak hour detection',
        desc: 'automatically identifies rush hours and slow periods',
      },
      {
        title: 'Queue and checkout monitoring',
        desc: 'alerts when queues build up at billing counters',
      },
    ],
    chatbotFeature: {
      title: 'Auris AI Chatbot',
      desc: 'ask "How many customers visited today?" or "Which zone had the most footfall?" instantly',
    },
  },
  {
    id: 'warehouse',
    title: 'Auris Warehouse',
    icon: Warehouse,
    desc: 'Worker tracking and inventory zone monitoring for warehouses.',
    detailedDesc: 'Optimizes logistics operations by tracking picker efficiency and inventory zone occupancy. Improve worker safety, streamline loading dock cycles, and monitor high-traffic lanes automatically.',
    features: [
      {
        title: 'Picker path analytics',
        desc: 'track worker movement to find inefficiencies in pick routes',
      },
      {
        title: 'Loading dock monitoring',
        desc: 'measure truck turnaround times and dock utilization',
      },
      {
        title: 'Safety zone alerts',
        desc: 'detect when workers enter restricted machinery or forklift zones',
      },
      {
        title: 'Shift productivity tracking',
        desc: 'compare worker activity across shifts automatically',
      },
    ],
    chatbotFeature: {
      title: 'Auris AI Chatbot',
      desc: 'ask "How many dock movements happened today?" or "Which shift was most productive?" in seconds',
    },
  },
  {
    id: 'hospital',
    title: 'Auris Hospital',
    icon: Hospital,
    desc: 'Staff presence and patient zone monitoring for healthcare facilities.',
    detailedDesc: 'Enhances healthcare operations through real-time staff presence and patient flow monitoring. Ensure timely nurse rounds, monitor patient zone times, and improve overall emergency room throughput.',
    features: [
      {
        title: 'Staff presence tracking',
        desc: 'verify nurse rounds are happening on schedule across wards',
      },
      {
        title: 'Patient zone monitoring',
        desc: 'track patient flow through OPD, waiting areas, and wards',
      },
      {
        title: 'Critical zone occupancy',
        desc: 'instant alerts when restricted areas have unauthorized presence',
      },
      {
        title: 'Shift handover intelligence',
        desc: 'automatic summary of staff activity during each shift',
      },
    ],
    chatbotFeature: {
      title: 'Auris AI Chatbot',
      desc: 'ask "Were all nurse rounds completed today?" or "How busy was OPD this afternoon?" instantly',
    },
  },
];

export default function Products() {
  const containerRef = useRevealMany();
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({});

  const toggleProduct = (id: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
            const isExpanded = !!expandedProducts[p.id];
            return (
              <div key={p.title} className="reveal h-full">
                <div
                  id={`card-${p.id}`}
                  onClick={() => toggleProduct(p.id)}
                  className={`glass-card p-8 md:p-10 h-full flex flex-col justify-between transition-colors duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(0,255,136,0.15)] group cursor-pointer ${
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

                  {/* Expandable Details Container */}
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded
                        ? 'max-h-[1000px] opacity-100 mt-6 pt-6 border-t border-card-border/40'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div>
                      <div className="space-y-6">
                        <p className="text-text-muted text-sm md:text-base leading-relaxed">
                          {p.detailedDesc}
                        </p>

                        {/* Standard Features */}
                        <ul className="space-y-4">
                          {p.features.map((f, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-text-muted">
                              <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent/20">
                                <Check size={12} className="text-accent" />
                              </div>
                              <span className="leading-relaxed">
                                <strong className="text-white font-semibold">{f.title}</strong> — {f.desc}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Highlighted Chatbot Feature */}
                        <div className="p-4 rounded-xl bg-accent/[0.03] border border-accent/20 shadow-[0_0_15px_rgba(0,255,136,0.05)] relative overflow-hidden group/chatbot">
                          <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent pointer-events-none" />
                          <div className="flex items-start gap-3 relative z-10">
                            <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5 border border-accent/30 shadow-[0_0_8px_rgba(0,255,136,0.2)]">
                              <Check size={12} className="text-accent" />
                            </div>
                            <span className="text-sm text-text-muted leading-relaxed">
                              <strong className="text-accent font-bold">{p.chatbotFeature.title}</strong> — {p.chatbotFeature.desc}
                            </span>
                          </div>
                        </div>

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

                {/* Arrow indicator at the bottom */}
                <div
                  className={`mt-6 pt-4 border-t border-card-border/20 flex items-center justify-between text-sm font-semibold text-accent hover:text-white transition-colors duration-300 ${
                    isExpanded ? 'hidden' : ''
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
