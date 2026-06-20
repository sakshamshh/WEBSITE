import { useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = 'rgba(0, 255, 136, 0.06)';

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      });

      ctx!.strokeStyle = 'rgba(0, 255, 136, 0.03)';
      ctx!.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Particle background */}
      <canvas ref={canvasRef} className="particles-container" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,255,136,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Eyebrow */}
        <p className="text-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-5">
          Factory Intelligence, Reimagined
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[800] leading-[0.95] mb-5">
          Your Factory.
          <br />
          <span className="gradient-text">Total Control.</span>
        </h1>

        {/* Subtext */}
        <p className="text-text-muted text-base md:text-xl max-w-[600px] mx-auto mb-8 leading-relaxed">
          Real-time intelligence from the cameras you already own. No new hardware. No guesswork. Just clarity.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center mb-12">
          <a
            href="https://wa.me/918178332368"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Request Demo <ArrowRight size={16} />
          </a>
        </div>

        {/* Factory map image */}
        <div className="relative max-w-4xl mx-auto">
          {/* LIVE badge — centered above image */}
          <div className="flex justify-center mb-4">
            <span className="live-badge">LIVE</span>
          </div>

          {/* Image with 3D tilt and glow */}
          <div className="float-anim">
            <div
              className="image-frame glow-green"
              style={{ transform: 'perspective(1000px) rotateX(8deg)' }}
            >
              <img
                src="/images/factory-map.png"
                alt="Auris 3D Live Factory Map"
                loading="eager"
              />
            </div>
          </div>

          {/* Glow underneath */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(0,212,255,0.3) 0%, rgba(0,255,136,0.15) 40%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
