import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(166,139,91,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(166,139,91,0.05),transparent_70%)]" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-multiply" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: 'linear-gradient(rgba(166,139,91,1) 1px, transparent 1px), linear-gradient(90deg, rgba(166,139,91,1) 1px, transparent 1px)', backgroundSize: '120px 120px' }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center w-full"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-10 overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-accent/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          <div className="w-1 h-1 bg-accent rounded-full shadow-[0_0_8px_rgba(166,139,91,0.5)]" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Systems Architecture</span>
        </motion.div>

        <motion.h1 
          className="text-[clamp(1.8rem,5vw,5rem)] font-serif font-extrabold leading-[1.05] tracking-tight mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          ENGINEERING THE <br />
          <span className="text-accent italic font-light tracking-[0.1em] opacity-90">INTELLIGENT EDGE</span>
        </motion.h1>

        <motion.p 
          className="text-base md:text-lg text-text-muted max-w-lg mx-auto mb-14 font-sans font-normal leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Skymlabs builds high-performance software for complex physical domains. 
          Bridging the gap between raw data and actionable intelligence.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#products"
            onClick={scrollToProducts}
            className="group relative px-10 py-4 bg-text-primary text-bg text-[11px] font-bold uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 rounded-sm"
          >
            <span className="relative z-10">Discover Products</span>
            <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500" />
          </a>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-10 py-4 border border-text-primary/10 text-text-primary text-[11px] font-bold uppercase tracking-[0.3em] hover:border-accent hover:text-accent transition-all duration-500 rounded-sm group overflow-hidden relative"
          >
            <span className="relative z-10">Start Dialogue</span>
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-text-muted/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-accent/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
