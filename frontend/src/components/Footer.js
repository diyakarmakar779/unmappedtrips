import { Instagram, Mail } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f8f8f6] py-24 md:py-32 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* ── CENTRAL LOGO ── */}
        <div className="mb-12 group cursor-default">
          <div className="flex flex-col items-center">
            <span className="font-serif italic text-3xl md:text-4xl tracking-tighter text-[#1a2e1a] transition-transform duration-500 group-hover:scale-105">
              Unmapped
            </span>
            <div className="h-px w-8 bg-[#c5a383]/30 mt-2 transition-all duration-500 group-hover:w-12" />
          </div>
        </div>

        {/* ── CENTERED CONNECT LINKS ── */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-20">
          <a 
            href="mailto:hello@unmappedtrips.in" 
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-[#1a2e1a] transition-all"
          >
            <Mail size={14} strokeWidth={1.5} className="text-black/20 group-hover:text-[#c5a383] transition-colors" />
            <span>Email</span>
          </a>
          
          <a 
            href="https://www.instagram.com/unmapped.travel_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-black/40 hover:text-[#1a2e1a] transition-all"
          >
            <Instagram size={14} strokeWidth={1.5} className="text-black/20 group-hover:text-[#c5a383] transition-colors" />
            <span>Instagram</span>
          </a>

          <button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#c5a383] hover:text-[#1a2e1a] transition-all border-b border-[#c5a383]/20 pb-1"
          >
            Join Waitlist
          </button>
        </div>

        {/* ── FINAL SIGN-OFF ── */}
        <div className="w-full max-w-md text-center space-y-6">
          <p className="font-serif italic text-xl md:text-2xl text-[#1a2e1a]/40 leading-relaxed">
            "Curating the quiet corners of India."
          </p>
          
          <div className="pt-8 border-t border-black/[0.03] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
            <p className="text-[9px] uppercase tracking-[0.5em] text-black/20 font-bold">
              © {year} Unmapped
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-black/10" />
            <p className="text-[9px] uppercase tracking-[0.5em] text-black/20 font-bold">
              Designed for the curious
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
