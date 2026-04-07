import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('what-is-unmapped')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#070a07]">
      
      {/* ── Background: High-Fidelity Rendering ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png" 
          alt="Unmapped Travel OS"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ 
            // Fixes "dullness" by preventing browser-side softening
            imageRendering: 'crisp-edges',
            transform: 'translateZ(0)',
            filter: 'contrast(1.05) brightness(0.95)' // Tiny boost to make it pop
          }} 
        />
        
        {/* REFINED SCRIM: Only darkens the very top and very bottom.
            The center (where the image content is) stays clear and vibrant.
        */}
        <div
          className="absolute inset-0 z-10"
          style={{ 
            background: `linear-gradient(to bottom, 
              rgba(7, 10, 7, 0.5) 0%, 
              transparent 30%, 
              transparent 70%, 
              rgba(7, 10, 7, 0.8) 100%)` 
          }} 
        />
      </div>

      {/* ── Grain Overlay: Keep this light! ── */}
      <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none grain-overlay" />

      {/* ── Content: Focused & Consistent ── */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        
        {/* Minimal Badge */}
        <div className="mb-8 animate-fade-in">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[9px] uppercase tracking-[0.3em] font-medium text-white/80 backdrop-blur-md">
            Early Access Open
          </span>
        </div>

        {/* The Mixed-Typography Header */}
        <h1 className="flex flex-col items-center gap-1 animate-fade-in-up">
          <span className="font-sans font-medium text-5xl md:text-7xl lg:text-[5rem] text-white tracking-tighter leading-none">
            Travel OS for
          </span>
          <span className="font-serif italic font-light text-4xl md:text-6xl lg:text-[4.5rem] text-white/90 tracking-tight">
            Indian Explorers
          </span>
        </h1>

        <p className="mt-8 font-sans text-base md:text-lg text-white/70 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Coordinate your entire journey. Manage stays, local routes, and budgets—all in one thoughtful system.
        </p>

        {/* Refined White Button */}
        <div className="mt-10 flex flex-col items-center gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-white text-black hover:bg-[#f8f8f8] px-10 py-6 text-base font-semibold tracking-tight rounded-full transition-all hover:scale-[1.03] shadow-2xl">
            Join Waitlist
          </Button>

          <p className="text-[11px] text-white/40 font-medium tracking-widest uppercase">
            Join <span className="text-white/70">1,200+ pioneers</span>
          </p>
        </div>
      </div>

      {/* Scroll Hint */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 z-30 opacity-40 hover:opacity-100 transition-opacity">
        <ArrowDown size={20} className="text-white animate-bounce" />
      </button>
    </section>
  );
};
