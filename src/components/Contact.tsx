import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/mrejnvyk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40 bg-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(175,201,126,0.03),transparent_60%)] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-normal mb-10 leading-tight tracking-wide">
              LET'S DEFINE THE <br /> <span className="text-accent italic">NEW STANDARD</span>
            </h2>
            <p className="text-base text-text-muted max-w-sm leading-relaxed mb-16 opacity-60 font-sans tracking-wide">
              Have a project that requires absolute precision? Reach out and let's explore the possibilities.
            </p>

            <div className="space-y-12">
              <div className="p-8 border border-black/[0.03] bg-bg/50 backdrop-blur-sm group hover:border-accent/20 transition-all max-w-sm">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-3 block">Direct Line</span>
                <a href="mailto:contact@skymlabs.com" className="text-xl font-serif font-normal hover:text-accent transition-colors tracking-widest lowercase">
                  contact@skymlabs.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-accent/[0.03] border border-black/5 p-10 md:p-14"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} className="text-accent" />
                  </div>
                  <h3 className="text-3xl font-serif mb-4 tracking-widest uppercase font-bold">Transmitted</h3>
                  <p className="text-text-muted text-sm uppercase tracking-widest opacity-60">We will respond shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-accent text-[10px] font-bold uppercase tracking-[0.3em] hover:underline"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted ml-1">Signature</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-black/10 py-3 font-sans focus:border-accent focus:outline-none transition-all placeholder:text-black/10 text-sm"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted ml-1">Digital Address</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full bg-transparent border-b border-black/10 py-3 font-sans focus:border-accent focus:outline-none transition-all placeholder:text-black/10 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-muted ml-1">Brief</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder="Project details..."
                      className="w-full bg-transparent border-b border-black/10 py-3 font-sans focus:border-accent focus:outline-none transition-all resize-none placeholder:text-black/10 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-5 bg-text-primary text-bg text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500 rounded-sm disabled:opacity-70 flex items-center justify-center gap-3"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="animate-spin" size={16} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Initialize Consultation</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-[10px] uppercase tracking-widest text-center mt-4">Error encountered. Retry.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
