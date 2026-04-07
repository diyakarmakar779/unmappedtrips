import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    // bg-[#070a07] matches your FAQ exactly. 
    // border-white/10 provides the visible segregation line you asked for.
    <footer className="bg-[#070a07] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* ── PRIMARY LINKS (Increased size for legibility) ── */}
        <div className="flex flex-row items-center gap-10 md:gap-16 mb-14">
          <a 
            href="mailto:hello@unmappedtrips.in" 
            className="text-sm md:text-base font-medium text-white/50 hover:text-white transition-colors tracking-tight"
          >
            Email
          </a>
          
          <a 
            href="https://www.instagram.com/unmapped.travel_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm md:text-base font-medium text-white/50 hover:text-white transition-colors tracking-tight"
          >
            Instagram
          </a>

          <button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="text-sm md:text-base font-semibold text-[#c5a383] hover:text-[#d4b496] transition-colors tracking-tight"
          >
            Waitlist
          </button>
        </div>

        {/* ── SIGNATURE (Balanced Scale) ── */}
        <div className="text-center space-y-8 w-full max-w-2xl">
          <p className="font-serif italic text-xl md:text-2xl text-white/40 leading-relaxed">
            Curating the quiet corners of India.
          </p>
          
          {/* Internal Divider for the copyright section */}
          <div className="pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <p className="text-xs md:text-sm text-white/20 font-medium tracking-wide">
              © {year} Unmapped
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <p className="text-xs md:text-sm text-white/20 font-medium tracking-wide">
              Designed for the curious
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
