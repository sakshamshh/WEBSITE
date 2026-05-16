import { Instagram, Mail, Phone, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card pt-32 pb-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-12 mb-32">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="group flex flex-col items-start gap-1 mb-8">
              <span className="text-xl font-serif font-bold text-text-primary tracking-[0.25em] uppercase group-hover:text-accent transition-colors">
                Skymlabs
              </span>
              <div className="w-12 h-[1px] bg-accent/30 origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
            <p className="text-[10px] text-text-muted leading-relaxed max-w-xs uppercase tracking-[0.2em] font-medium">
              Architecting the systems that define the future of high-performance scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Intelligence</h4>
            <ul className="space-y-5">
              <li><a href="#about" className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors">Philosophy</a></li>
              <li><a href="#products" className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors">Products</a></li>
              <li><a href="#industries" className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors">Ecosystem</a></li>
              <li><a href="#contact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors">Dialogue</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Direct</h4>
            <div className="space-y-6">
              <a href="mailto:contact@skymlabs.com" className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors block">
                contact@skymlabs.com
              </a>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted opacity-80">
                +91 98181 67998 <br />
                +91 81783 32368
              </p>
            </div>
          </div>

          {/* Founders */}
          <div>
            <h4 className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-10">Leadership</h4>
            <div className="space-y-8">
              {[
                { name: 'Saksham Sharma', role: 'CEO', url: 'https://instagram.com/sakshamsh' },
                { name: 'Ayush Ranjan', role: 'CTO', url: 'https://www.instagram.com/_ayushranjan7?igsh=dGl3NTA1ajIyZWZp&utm_source=qr' }
              ].map(person => (
                <div key={person.name} className="flex items-center justify-between group/line">
                   <div className="flex flex-col">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-primary group-hover/line:text-accent transition-colors">{person.name}</span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted opacity-60 font-bold">{person.role}</span>
                   </div>
                   <a href={person.url} target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 transition-opacity">
                      <Instagram size={14} className="text-accent" />
                   </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <p className="text-[9px] uppercase tracking-[0.4em] text-text-muted opacity-60 font-bold">
            © {currentYear} Skymlabs Architecture. All Rights Reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-all duration-500"
          >
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-accent">Return</span>
            <ChevronUp size={16} className="text-accent group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex gap-8">
            {['Privacy', 'Legal', 'Security'].map(label => (
              <a key={label} href="#" className="text-[9px] font-bold uppercase tracking-[0.4em] text-text-muted hover:text-accent transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
