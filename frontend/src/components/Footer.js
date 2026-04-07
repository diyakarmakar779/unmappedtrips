import { Instagram, Mail } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a120a] border-t border-white/5 relative overflow-hidden">
      {/* Subtle organic glow in the corner to match the hero/cta */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 md:gap-24">
          
          {/* ── Brand ── */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 group">
              <div className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center transition-all group-hover:border-white/40">
                <span className="font-serif text-sm text-white font-light">u</span>
              </div>
              <span className="font-serif text-xl text-white tracking-tight font-light">
                Unmapped
              </span>
            </div>
            
            <p className="font-sans text-sm leading-relaxed text-white/40 max-w-xs">
              A Travel OS for thoughtful journeys across India. Powered by AI and refined by human curation.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              {[
                {
                  icon: Instagram,
                  label: 'Instagram',
                  href: 'https://www.instagram.com/unmapped.travel_/',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  href: 'mailto:hello@unmappedtrips.in',
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/30 hover:text-[#c5a383] transition-colors duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── Navigate (Updated with FAQ) ── */}
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/20 mb-8">
              Navigate
            </p>
            <ul className="space-y-4">
              {[
                { label: 'The System', id: 'what-is-unmapped' },
                { label: 'What you get', id: 'what-you-get' },
                { label: 'Destinations', id: 'destinations' },
                { label: 'FAQ', id: 'faq' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-sans text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CTA ── */}
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
              Priority Access
            </p>
            <p className="font-sans text-sm leading-relaxed text-white/40">
              Join the waitlist to receive updates on new destinations and early member benefits.
            </p>
            <button
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="group flex items-center gap-2 font-sans text-sm font-semibold text-white hover:text-[#c5a383] transition-colors duration-300 w-fit"
            >
              Join Waitlist
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/20">
            © {year} Unmapped. Designed for the curious.
          </p>
          <div className="h-px w-8 bg-white/10 hidden sm:block" />
          <p className="font-sans text-[10px] tracking-widest uppercase text-white/20 text-center sm:text-right">
            Curating the quiet corners of India
          </p>
        </div>
      </div>
    </footer>
  );
};
