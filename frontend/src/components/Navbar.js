import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-[#070a07]/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* ── Logo ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <div className="relative flex items-center justify-center h-8 w-8 rounded-full border border-white/20 transition-all group-hover:border-white/40">
            <span className="font-serif text-sm text-white font-light">u</span>
          </div>
          <span className="font-serif text-xl text-white tracking-tight font-light">
            Unmapped
          </span>
        </button>

        {/* ── Action Button (Desktop) ── */}
        <div className="hidden md:block">
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className={`px-6 py-5 text-sm font-medium tracking-tight rounded-full transition-all duration-500 ${
              scrolled 
                ? 'bg-white text-black hover:bg-white/90 shadow-lg' 
                : 'bg-white/10 text-white border border-white/10 backdrop-blur-md hover:bg-white/20'
            }`}
          >
            Join waitlist
          </Button>
        </div>

        {/* Mobile menu toggle (Only for the CTA on small screens) */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile Menu (Simplified) ── */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#070a07] border-b border-white/5 p-8 animate-in fade-in slide-in-from-top-2">
            <Button
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="w-full bg-white text-black py-6 rounded-full text-sm font-semibold"
            >
              Join waitlist
            </Button>
        </div>
      )}
    </header>
  );
};
