import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070a07] py-14 md:py-20 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* ── PRIMARY LINKS (Sentence Case) ── */}
        <div className="flex flex-row items-center gap-10 md:gap-16 mb-12">
          <a 
            href="mailto:hello@unmappedtrips.in" 
            className="text-sm font-medium text-white/40 hover:text-white transition-colors tracking-tight"
          >
            Email
          </a>
          
          <a 
            href="https://www.instagram.com/unmapped.travel_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium text-white/40 hover:text-white transition-colors tracking-tight"
          >
            Instagram
          </a>

          <button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="text-sm font-semibold text-[#c5a383] hover:text-white transition-colors tracking-tight"
          >
            Waitlist
          </button>
        </div>

        {/* ── SIGNATURE ── */}
        <div className="text-center space-y-6">
          <p className="font-serif italic text-lg md:text-xl text-white/30">
            Curating the quiet corners of India.
          </p>
          
          {/* Divider line for segregation */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 pt-8 border-t border-white/[0.03]">
            <p className="text-xs text-white/20 font-medium tracking-tight">
              © {year} Unmapped
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <p className="text-xs text-white/20 font-medium tracking-tight">
              Designed for the curious
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
