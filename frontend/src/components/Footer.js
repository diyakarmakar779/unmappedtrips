import { Instagram, Mail } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f8f6] py-12 md:py-16 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* ── CENTRAL LOGO (Scaled Down) ── */}
        <div className="mb-8 group cursor-default">
          <div className="flex flex-col items-center">
            <span className="font-serif italic text-2xl md:text-3xl tracking-tighter text-[#1a2e1a] transition-transform duration-500 group-hover:scale-105">
              Unmapped
            </span>
            <div className="h-px w-6 bg-[#c5a383]/30 mt-1 transition-all duration-500 group-hover:w-10" />
          </div>
        </div>

        {/* ── CENTERED CONNECT LINKS (Tighter spacing) ── */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-10">
          <a 
            href="mailto:hello@unmappedtrips.in" 
            className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 hover:text-[#1a2e1a] transition-all"
          >
            <Mail size={12} strokeWidth={1.5} className="text-black/20 group-hover:text-[#c5a383] transition-colors" />
            <span>Email</span>
          </a>
          
          <a 
            href="https://www.instagram.com/unmapped.travel_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-bold text-black/40 hover:text-[#1a2e1a] transition-all"
          >
            <Instagram size={12} strokeWidth={1.5} className="text-black/20 group-hover:text-[#c5a383] transition-colors" />
            <span>Instagram</span>
          </a>

          <button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="text-[9px] uppercase tracking-[0.3em] font-bold text-[#c5a383] hover:text-[#1a2e1a] transition-all border-b border-[#c5a383]/20 pb-0.5"
          >
            Join Waitlist
          </button>
        </div>

        {/* ── FINAL SIGN-OFF (More Compact) ── */}
        <div className="w-full max-w-xl text-center space-y-4">
          <p className="font-serif italic text-base md:text-lg text-[#1a2e1a]/30">
            "Curating the quiet corners of India."
          </p>
          
          <div className="pt-6 border-t border-black/[0.03] flex flex-row items-center justify-center gap-4">
            <p className="text-[8px] uppercase tracking-[0.4em] text-black/20 font-bold whitespace-nowrap">
              © {year} Unmapped
            </p>
            <span className="w-1 h-1 rounded-full bg-black/10" />
            <p className="text-[8px] uppercase tracking-[0.4em] text-black/20 font-bold whitespace-nowrap">
              Designed for the curious
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
