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
          alt="Lush landscapes of Northeast India"
          className="w-full h-full object-cover"
          loading="eager"
          style={{ 
            filter: 'contrast(1.05) saturate(1.1) brightness(0.9)',
            imageRendering: 'auto',
            transform: 'translateZ(0)' 
          }} 
        />
        <div
          className="absolute inset-0 z-10"
          style={{ 
            background: `radial-gradient(circle at center, transparent 0%, rgba(7, 10, 7, 0.3) 40%, rgba(7, 10, 7, 0.9) 100%)` 
          }} 
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto px-6 pt-20">
        
        {/* Minimal Badge */}
        <div className="mb-8 animate-fade-in">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-white/60 backdrop-blur-md">
            Now Curating: Northeast India
          </span>
        </div>

        {/* The Mixed-Typography Header */}
        <h1 className="flex flex-col items-center gap-1 animate-fade-in-up">
          <span className="font-sans font-medium text-5xl md:text-7xl lg:text-[5.5rem] text-white tracking-tighter leading-none">
            A Travel OS for
          </span>
          <span className="font-serif italic font-light text-4xl md:text-6xl lg:text-[5rem] text-white/90 tracking-tight -mt-1 md:-mt-3">
            Thoughtful Journeys
          </span>
        </h1>

        <p className="mt-8 font-sans text-sm md:text-lg text-white/60 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Centralizing your logistics through concierge-led coordination. 
          <span className="block mt-2 text-white/40 italic font-serif">A system designed for depth, not just distance.</span>
        </p>

        {/* REFINED BUTTON SIZE */}
        <div className="mt-10 flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-white text-black hover:bg-[#f8f8f6] px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-semibold tracking-tight rounded-full transition-all active:scale-95 shadow-xl shadow-black/20"
          >
            Join waitlist
          </Button>

          <p className="font-sans text-[10px] md:text-xs text-white/30 uppercase tracking-[0.2em]">
            Limited early member access
          </p>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 z-30 opacity-30 hover:opacity-100 transition-opacity"
      >
        <ArrowDown size={18} className="text-white animate-bounce" />
      </button>
    </section>
  );
};
