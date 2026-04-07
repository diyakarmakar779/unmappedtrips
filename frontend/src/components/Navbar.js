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
          ? 'bg-[#f8f8f6]/80 backdrop-blur-xl border-b border-black/[0.03] h-20' 
          : 'bg-transparent h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-full flex items-center justify-between">
        
        {/* ── LOGO ── */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-serif italic text-2xl md:text-3xl tracking-tighter text-[#1a2e1a]">
            Unmapped
          </span>
          <div className="h-1 w-1 rounded-full bg-[#c5a383] animate-pulse" />
        </a>

        {/* ── ACTION ── */}
        <div className="flex items-center">
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className={`transition-all duration-500 rounded-full font-medium px-6 md:px-8 py-5 md:py-6 text-sm md:text-base ${
              isScrolled
                ? 'bg-[#1a2e1a] text-white shadow-lg shadow-[#1a2e1a]/10'
                : 'bg-white/10 backdrop-blur-md border border-white/20 text-[#1a2e1a] hover:bg-white/20'
            }`}
          >
            Join the waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};
