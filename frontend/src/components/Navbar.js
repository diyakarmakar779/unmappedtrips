import { GOOGLE_FORM_URL } from '../constants';
import { Button } from './ui/button';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#f8f8f6]/80 backdrop-blur-xl border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        
        {/* ── LOGO REVERTED ── */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-serif italic text-2xl md:text-3xl tracking-tighter text-[#1a2e1a]">
            Unmapped
          </span>
          {/* Subtle status indicator for the 'OS' vibe */}
          <div className="h-1 w-1 rounded-full bg-[#c5a383] opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* ── NAVIGATION & ACTION ── */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">
            <a href="#destinations" className="hover:text-[#1a2e1a] transition-colors">Destinations</a>
            <a href="#faq" className="hover:text-[#1a2e1a] transition-colors">FAQ</a>
          </div>

          {/* Join Waitlist - Always visible for conversion */}
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-[#1a2e1a] text-white hover:bg-[#2a442a] px-5 md:px-8 py-5 md:py-6 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full transition-all active:scale-95 shadow-lg shadow-[#1a2e1a]/10"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};
