import { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL } from '../constants';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold of 50px before the navbar "solidifies"
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#f8f8f6]/90 backdrop-blur-xl border-b border-black/[0.03] h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        
        {/* ── LOGO (Color shifts for visibility) ── */}
        <a href="/" className="flex items-center gap-1.5 group">
  <span className={`font-brand font-bold text-xl md:text-2xl tracking-tighter uppercase transition-colors duration-500 ${
    isScrolled ? 'text-[#1a2e1a]' : 'text-white'
  }`}>
    Unmapped
  </span>
  
  {/* The "System" Pulse - Adjusted size and color to match the gold in your config */}
  <div className={`h-1.5 w-1.5 rounded-full bg-gold animate-pulse mt-1 transition-colors duration-500 ${
    isScrolled ? 'opacity-80' : 'opacity-100'
  }`} />
</a>

        {/* ── ACTION (Glassmorphic to Solid) ── */}
        <div className="flex items-center">
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className={`transition-all duration-500 rounded-full font-medium px-6 md:px-8 py-5 md:py-6 text-sm md:text-base border ${
              isScrolled
                ? 'bg-[#1a2e1a] text-white border-transparent shadow-lg shadow-[#1a2e1a]/10'
                : 'bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/25'
            }`}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};
