import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070a07] py-14 md:py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* ── PRIMARY LINKS (Inverted for Dark BG) ── */}
        <div className="flex flex-row items-center gap-10 md:gap-16 mb-12">
          <a 
            href="mailto:hello@unmappedtrips.in" 
            className="text-xs uppercase tracking-[0.25em] font-bold text-white/40 hover:text-white transition-colors"
          >
            Email
          </a>
          
          <a 
            href="https://www.instagram.com/unmapped.travel_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs uppercase tracking-[0.25em] font-bold text-white/40 hover:text-white transition-colors"
          >
            Instagram
          </a>

          <button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="text-xs uppercase tracking-[0.25em] font-bold text-[#c5a383] hover:text-white transition-colors"
          >
            Waitlist
          </button>
        </div>

        {/* ── SIGNATURE ── */}
        <div className="text-center space-y-5">
          <p className="font-serif italic text-lg md:text-xl text-white/30">
            Curating the quiet corners of India.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 pt-6 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
              © {year} Unmapped
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
              Designed for the curious
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
