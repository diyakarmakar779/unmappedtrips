import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a120a] py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* ── PRIMARY LINKS ── */}
        <div className="flex flex-row items-center justify-center flex-wrap gap-8 md:gap-14 mb-14">

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

          <a
            href="https://wa.me/918147922283?text=Hey%20Unmapped%2C%20I%27m%20planning%20a%20trip%20and%20wanted%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-medium text-white/50 hover:text-white transition-colors tracking-tight"
          >
            WhatsApp
          </a>

          <button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="text-sm md:text-base font-semibold text-[#c5a383] hover:text-[#d4b496] transition-colors tracking-tight"
          >
            Waitlist
          </button>

        </div>

        {/* ── SIGNATURE ── */}
        <div className="text-center space-y-8 w-full max-w-2xl">

          <p className="font-serif italic text-xl md:text-2xl text-white/40 leading-relaxed">
            Curating the quiet corners of India.
          </p>

          {/* Divider */}
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
