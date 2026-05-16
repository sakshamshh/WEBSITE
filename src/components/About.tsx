import { motion } from 'motion/react';

const pillars = [
  {
    title: 'Research-led',
    desc: 'Deep inquiry into the possibilities of intelligence before we write a single line of code.',
  },
  {
    title: 'Engineer-built',
    desc: 'Technical excellence is our baseline. We build for performance, security, and scalability.',
  },
  {
    title: 'Scalable by design',
    desc: 'Products that grow with you. From local startups to smart city infrastructures.',
  },
  {
    title: 'Partner-focused',
    desc: 'We don’t just ship code; we build relationships. Your success is our ultimate metric.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
            The Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-normal leading-tight max-w-2xl tracking-wide">
            Technology built with <br /> <span className="text-accent">purpose and precision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-text-muted leading-relaxed font-sans font-light opacity-60 tracking-wide">
              Skymlabs is a product-driven AI company building for the long term. 
              We believe that intelligent software should be seamless, reliable, 
              and fundamentally useful. Our team combines technical excellence  
              with a focus on architectural integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/5 border border-black/5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i + 0.4 }}
                className="p-10 bg-bg group hover:bg-black/[0.01] transition-all duration-700"
              >
                <h3 className="text-lg font-serif mb-4 text-text-primary group-hover:text-accent transition-colors tracking-widest uppercase font-bold">
                  {pillar.title}
                </h3>
                <p className="text-[12px] text-text-muted leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
