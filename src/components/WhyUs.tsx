import { motion } from 'motion/react';

const reasons = [
  {
    id: '01',
    title: 'Deep Domain Expertise',
    desc: 'Specialized experience in AI, computer vision, and intelligent systems. We understand the domains we build for — deeply.',
  },
  {
    id: '02',
    title: 'Production-Grade Quality',
    desc: 'Every solution engineered for reliability, security, and real-world performance at scale.',
  },
  {
    id: '03',
    title: 'Transparent Partnership',
    desc: 'Clear communication, honest timelines, collaborative problem-solving. We succeed when you succeed.',
  },
  {
    id: '04',
    title: 'Rapid Iteration',
    desc: 'Agile development with continuous feedback loops. We deliver value quickly and adapt to your evolving needs.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-40 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block"
          >
            The Edge
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif font-normal"
          >
            Sovereign <span className="italic">Systems</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-12 bg-bg hover:bg-black/[0.01] transition-all duration-700"
            >
              <div className="flex flex-col gap-8">
                <span className="text-3xl font-serif font-bold text-accent/30">
                  {reason.id}
                </span>
                <div>
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4 tracking-widest uppercase">
                    {reason.title}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-relaxed font-sans tracking-wide">
                    {reason.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
