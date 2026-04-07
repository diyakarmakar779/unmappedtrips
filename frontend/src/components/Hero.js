import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('what-is-unmapped');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grain-overlay overflow-hidden bg-[#0A0E0A]">
      {/* ── Background Image (Standard React Tag) ── */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="/hero-bg.png" 
          alt="Travel OS Background"
          className="w-full h-full object-cover hero-parallax-img"
          // 'loading="eager"' ensures it starts loading immediately
          loading="eager" 
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 14, 10, 0.8) 100%)' }} />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6">
        
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-[10px] uppercase tracking-widest text-primary-foreground/70">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Early Access Open
          </span>
        </div>

        <h1 className="font-sans font-semibold text-5xl md:text-7xl lg:text-[5.5rem] text-primary-foreground tracking-tighter leading-[1.1] animate-fade-in-up">
          Travel OS for 
          <span className="block italic font-light opacity-90 tracking-tight">Indian Explorers</span>
        </h1>

        <p className="mt-8 font-sans text-lg md:text-xl font-light text-primary-foreground/80 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Coordinate your entire journey. Manage stays, local routes, and budgets. 
          <span className="md:block text-primary-foreground/60">Deep cultural immersion, powered by local wisdom.</span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="px-12 py-7 text-lg font-medium tracking-tight rounded-full transition-all hover:scale-105">
            Join Waitlist
          </Button>

          <p className="font-sans text-sm text-primary-foreground/50 tracking-tight">
            Join <span className="text-primary-foreground/80 font-medium">1,200+ travelers</span> planning their next journey
          </p>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 group opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground">Discover</span>
        <ArrowDown size={16} className="text-primary-foreground animate-bounce" />
      </button>
    </section>
  );
};
