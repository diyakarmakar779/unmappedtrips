import { Button } from './ui/button';
import { ArrowDown, MapPin } from 'lucide-react';
import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

export const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('what-is-unmapped')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col grain-overlay overflow-hidden">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/12883589/pexels-photo-12883589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Lush green misty forest of Northeast India"
          className="w-full h-full object-cover hero-parallax-img" />

        {/* Main bottom-up scrim — very dark where text lives */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, hsl(120 33% 8% / 0.30) 30%, hsl(120 33% 8% / 0.70) 58%, hsl(120 33% 8% / 0.88) 100%)' }} />

        {/* Left-side vignette for additional text backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, hsl(120 33% 8% / 0.35) 0%, transparent 55%)' }} />

      </div>

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-6xl mx-auto w-full px-6 md:px-10 pt-20 pb-20 md:pb-28">

        {/* Eyebrow */}
        <div className="animate-fade-in" style={{ animationDelay: '0.15s' }}>
          <span className="tracking-editorial text-primary-foreground/65">
            Curated travel &middot; India
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-light text-primary-foreground mt-5 leading-tight max-w-4xl animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}>

          Concept trips.
          <br />
          Cultural deep dives.
          <br />
          <em className="font-light">Curated for how you travel.</em>
        </h1>
{/* Positioning line */}
<p
  className="mt-5 font-sans text-base md:text-lg font-light max-w-2xl leading-relaxed animate-fade-in-up"
  style={{ color: 'rgba(245, 240, 228, 0.92)', animationDelay: '0.4s' }}
>
  A travel OS that brings your itinerary, stays, budgets, and bookings into one thoughtful plan.
</p>

        {/* Trust cue */}
        <p
          className="mt-4 font-sans text-sm flex items-center gap-2 animate-fade-in"
          style={{ color: 'rgba(212, 165, 116, 0.95)', animationDelay: '0.55s' }}>

          <MapPin size={13} style={{ color: '#D4A574' }} className="shrink-0" />
          Backed by local wisdom and the shared adventures of our travel community.
        </p>

        {/* CTA block */}
        <div
          className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.65s' }}>

          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="btn-pulse">

            Reserve your spot
          </Button>
          {/* <Button
            variant="ghost-light"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}>

            Join early access
          </Button> */}
        </div>

        <p
          className="mt-3 font-sans text-xs text-primary-foreground/50 animate-fade-in"
          style={{ animationDelay: '0.8s' }}>

          {CTA_MICROCOPY}
        </p>

        {/* Urgency badge */}
        <div
          className="mt-7 inline-flex items-center gap-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/18 rounded-full px-4 py-2 w-fit animate-fade-in"
          style={{ animationDelay: '0.95s' }}>

          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-sans text-xs tracking-wide !text-[#F9F8F5]">
            First 50 early access spots — now open
          </span>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 group"
        aria-label="Scroll down">

        <span className="tracking-editorial text-primary-foreground/45 group-hover:text-primary-foreground/65 transition-colors duration-200">
          Discover
        </span>
        <ArrowDown
          size={14}
          className="text-primary-foreground/45 group-hover:text-primary-foreground/65 animate-bounce transition-colors duration-200" />

      </button>
    </section>);

};
