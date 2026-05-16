import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const products = [
  {
    title: 'Auris',
    badge: 'LIVE',
    desc: 'Auris turns your existing CCTV cameras into a powerful retail intelligence engine — no new hardware required. Real-time footfall heatmaps, dwell time tracking across every zone, and AI-powered daily reports delivered to WhatsApp.',
    details: 'All processing on-premise — footage never leaves your building.',
    features: [
      'Connects to existing camera infrastructure',
      'Real-time footfall heatmaps',
      'Dwell time tracking per area',
      'Dashboard with WhatsApp reports',
    ],
  },
  {
    title: 'TrafficIQ',
    badge: 'COMING SOON',
    desc: 'AI-powered traffic signal management that reduces congestion, optimises signal timing in real time, and prioritises emergency vehicles — making cities move smarter.',
    details: 'Building the future of urban mobility with computer vision and edge computing.',
    features: [
      'Real-time signal optimization',
      'Emergency vehicle prioritization',
      'Congestion predictive analysis',
      'Multi-junction orchestration',
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-40 bg-bg">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block"
        >
          Selected Works
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-normal"
        >
          Built for the <span className="italic">Intelligent Frontier</span>
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/5 border border-black/5">
        {products.map((product, i) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group relative bg-bg h-full p-10 md:p-16 flex flex-col hover:bg-black/[0.01] transition-all duration-700"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-serif font-bold text-text-primary tracking-widest uppercase">
                  {product.title}
                </h3>
                <span className={`px-4 py-1.5 rounded-sm text-[9px] font-bold tracking-widest uppercase ${
                  product.badge === 'LIVE' 
                    ? 'bg-accent/10 text-accent border border-accent/20' 
                    : 'bg-black/5 text-text-muted border border-black/10'
                }`}>
                  {product.badge}
                </span>
              </div>

              <p className="text-base text-text-muted leading-relaxed mb-8 font-normal tracking-wide">
                {product.desc}
              </p>
              
              <p className="text-[11px] text-accent font-bold uppercase tracking-[0.3em] mb-12">
                // {product.details}
              </p>

              <div className="space-y-4 mb-14">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-text-muted group-hover:text-text-primary transition-colors">
                    <div className="w-1 h-1 bg-accent/40 rounded-full" />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button className="flex items-center gap-3 text-accent text-[10px] font-bold uppercase tracking-[0.3em] group/btn transition-all duration-500 hover:gap-5">
                  <span>Explore Intelligence</span>
                  <ChevronRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Placeholder for future products */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="p-10 md:p-16 flex flex-col items-center justify-center text-center bg-bg group"
        >
          <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center mb-8 bg-black/[0.02] group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500">
            <span className="text-xl font-serif text-accent">+</span>
          </div>
          <h3 className="text-xl font-serif text-text-primary mb-3 tracking-widest uppercase font-bold">Pipeline</h3>
          <p className="text-[11px] text-text-muted max-w-[220px] uppercase tracking-widest leading-loose">Continuously defining new intelligence paradigms.</p>
        </motion.div>
      </div>
    </section>
  );
}
