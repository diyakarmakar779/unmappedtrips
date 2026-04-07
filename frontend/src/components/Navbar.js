import { GOOGLE_FORM_URL } from '../constants';
import { Button } from './ui/button';

export const Navbar = () => {
  return (
    <nav className="w-full py-6 md:py-8 bg-[#f8f8f6] border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* ── LOGO ── */}
        <div className="flex flex-col">
          <span className="font-serif italic text-2xl md:text-3xl tracking-tighter text-[#1a2e1a]">
            Unmapped
          </span>
          <span className="text-[8px] uppercase tracking-[0.4em] text-black/30 font-bold -mt-1 ml-0.5">
            Travel OS
          </span>
        </div>

        {/* ── ACTION ── */}
        <div className="flex items-center gap-6">
          {/* Desktop Links - Hidden on Mobile to keep it minimal */}
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-black/40">
            <a href="#destinations" className="hover:text-[#c5a383] transition-colors">Destinations</a>
            <a href="#faq" className="hover:text-[#c5a383] transition-colors">FAQ</a>
          </div>

          <Button
            variant="ghost"
            className="bg-[#1a2e1a] text-white hover:bg-[#2a442a] px-5 md:px-8 py-5 md:py-6 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all active:scale-95"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Join waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};
