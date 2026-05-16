import { motion } from 'motion/react';
import { 
  Building2, 
  ShieldCheck, 
  Truck, 
  Compass, 
  Landmark, 
  HeartPulse, 
  Store, 
  Factory 
} from 'lucide-react';

const industries = [
  { label: 'Security & Surveillance', icon: ShieldCheck },
  { label: 'Transport & Logistics', icon: Truck },
  { label: 'Smart Cities', icon: Compass },
  { label: 'Infrastructure', icon: Building2 },
  { label: 'Government', icon: Landmark },
  { label: 'Healthcare', icon: HeartPulse },
  { label: 'Retail', icon: Store },
  { label: 'Manufacturing', icon: Factory },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-40 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block"
        >
          Ecosystem
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-serif font-normal"
        >
          Built for <span className="italic">Every Scale</span>
        </motion.h2>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1 - Left to Right */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-4 whitespace-nowrap py-2 shrink-0"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...industries, ...industries, ...industries].map((ind, i) => (
              <IndustryPill key={i} label={ind.label} icon={ind.icon} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-4 whitespace-nowrap py-2 shrink-0"
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {[...industries, ...industries, ...industries].reverse().map((ind, i) => (
              <IndustryPill key={i} label={ind.label} icon={ind.icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function IndustryPill({ label, icon: Icon }: { label: string; icon: any; key?: any }) {
  return (
    <div className="flex items-center gap-3 px-6 py-4 bg-card border border-black/5 rounded-sm group hover:border-accent/40 hover:bg-bg transition-all duration-700 cursor-default shadow-sm hover:shadow-md">
      <div className="p-1.5 bg-accent/5 rounded-sm text-accent group-hover:scale-110 transition-transform duration-700">
        <Icon size={16} />
      </div>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary group-hover:text-accent transition-colors duration-700 whitespace-nowrap opacity-60 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}
