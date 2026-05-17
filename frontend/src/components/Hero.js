import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { GOOGLE_FORM_URL } from '../constants';

export const Hero = () => {
  const scrollToNext = () => {
    document
      .getElementById('what-is-unmapped')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#070a07]">

      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Lush landscapes of Northeast India"
          className="w-full h-full object-cover"
          loading="eager"
          style={{
            filter: 'contrast(1.1) saturate(1.1) brightness(0.95)',
            imageRendering: 'auto',
            transform: 'translateZ(0)',
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              'radial-gradient(circle at center, transparent 0%, rgba(7, 10, 7, 0.2) 40%, rgba(7, 10, 7, 0.85) 100%)',
          }}
        />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 z-20 opacity-[0.02] pointer-events-none mix-blend-overlay" />

      {/* ── Content ── */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto px-6">

        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-medium text-white/80 backdrop-blur-md">
            Now Curating: Northeast India
          </span>
        </div>

        {/* Heading */}
        <h1 className="flex flex-col items-center gap-2 md:gap-3 animate-fade-in-up">
          <span className="font-sans font-medium text-5xl md:text-7xl lg:text-[5.5rem] text-white tracking-tighter leading-none">
            Travel OS for
          </span>

          <span className="font-serif italic font-light text-4xl md:text-6xl lg:text-[5rem] text-white/90 tracking-tight mt-1">
            Thoughtful Journeys
          </span>
        </h1>

        {/* Description */}
        <p
          className="mt-8 font-sans text-base md:text-lg text-white/70 max-w-xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          India’s first platform to unify every step of your trip from scattered
          bookings to the journey itself.

          <span className="block mt-2 text-white/50">
            A system designed for depth, not just distance.
          </span>
        </p>

        {/* CTA */}
        <div
          className="mt-10 flex flex-col items-center gap-3 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-white text-black hover:bg-[#f8f8f6] px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-semibold tracking-tight rounded-full transition-all active:scale-95 shadow-xl shadow-black/20"
          >
            Join waitlist
          </Button>

          <p className="font-sans text-xs md:text-sm text-white/40 tracking-tight">
            Join{' '}
            <span className="text-white/70 font-medium">
              1,400+ travelers
            </span>{' '}
            already planning smarter trips
          </p>
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 z-30 opacity-40 hover:opacity-100 transition-opacity"
      >
        <ArrowDown size={20} className="text-white animate-bounce" />
      </button>

      {/* Floating WhatsApp Button */}
    
<a
  href="https://wa.me/918147922283?text=Hey%20Unmapped%2C%20I%27m%20planning%20a%20trip%20and%20wanted%20to%20know%20more."
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-5
    right-5
    md:bottom-8
    md:right-8
    z-50
    group
  "
>
  <div
    className="
      relative
      flex items-center justify-center
      w-14 h-14
      rounded-full
      bg-[#111]/80
      backdrop-blur-xl
      border border-white/10
      shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      transition-all duration-300
      hover:scale-110
      hover:bg-[#1a1a1a]
    "
  >
    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl animate-pulse" />

    {/* Icon */}
    <FaWhatsapp
      size={26}
      className="relative text-green-400"
    />
  </div>
</a>
    </section>
  );
};
