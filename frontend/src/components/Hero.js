import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('what-is-unmapped');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center grain-overlay overflow-hidden bg-[#070a07] font-sans">
      
      {/* ── Background Image: Full Vibrancy ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png" 
          alt="Unmapped Travel OS"
          className="w-full h-full object-cover scale-105" // Slight scale to prevent edge gaps
          loading="eager" 
        />
        
        {/* REFINED OVERLAY: Instead of a flat dark color, we use a 
            "Vignette" that stays clear in the center and only darkens the edges.
        */}
        <div
          className="absolute inset-0"
          style={{ 
            background: 'radial-gradient(circle at center, rgba(7,10,7,0.1) 0%, rgba(7,10,7,0.4) 50%, rgba(7,10,7,0.9) 100%)' 
          }} 
        />
      </div>

      {/* ── Content Area: Focused & High-Contrast ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
        
        {/* Minimalist Badge */}
        <div className="mb-8 animate-fade-in">
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-medium text-white/80 backdrop-blur-md">
            Early Access Open
          </span>
        </div>

        {/* Headline: Using Inter + Tight Tracking for that "Apple" feel */}
        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-[5.8rem] text-white tracking-tighter leading-[1.02] animate-fade-in-up">
          Travel OS for <br className="hidden md:block" />
          <span className="text-white/90 font-medium italic">Indian Explorers</span>
        </h1>

        {/* Sub-headline: Increased contrast and cleaner line breaks */}
        <p className="mt-8 font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Coordinate your entire journey. Manage stays, local routes, and budgets. 
          <span className="block mt-2 text-white/50">Deep cultural immersion, powered by local wisdom.</span>
        </p>

        {/* Action Block: The White Button Upgrade */}
        <div className="mt-12 flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-white text-black hover:bg-white/90 px-14 py-8 text-lg font-semibold tracking-tight rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            Join Waitlist
          </Button>

          {/* Social Proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#070a07] bg-white/20 backdrop-blur-sm" />
              ))}
            </div>
            <p className="text-sm text-white/40 font-medium tracking-tight">
              Join <span className="text-white/80">1,200+ travelers</span> on the journey
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 z-10 flex flex-col items-center gap-2 group opacity-40 hover:opacity-100 transition-all duration-500">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white">Discover</span>
        <ArrowDown size={18} className="text-white animate-bounce" />
      </button>
    </section>
  );
};
