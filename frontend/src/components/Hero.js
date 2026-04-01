import { Button } from './ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/unmapped-early-access';

export const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('what-is-unmapped')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col grain-overlay overflow-hidden">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/9332620/pexels-photo-9332620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Misty mountains of India"
          className="w-full h-full object-cover hero-parallax-img"
        />
        {/* Warm dark overlay for text contrast */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero-overlay)' }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-6xl mx-auto w-full px-6 md:px-10 pb-20 md:pb-28">
        {/* Eyebrow */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="tracking-editorial text-primary-foreground/70">
            Curated travel for India
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-primary-foreground mt-4 leading-tight max-w-3xl animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Plan your trip.
          <br />
          <em className="font-light">We'll make it better.</em>
        </h1>

        {/* Subtext */}
        <p
          className="mt-6 font-sans text-base md:text-lg text-primary-foreground/80 max-w-xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          Customized itineraries, stays, and experiences — thoughtfully planned
          for how you travel.
        </p>

        {/* Trust cue */}
        <p
          className="mt-3 font-sans text-sm text-primary-foreground/60 flex items-center gap-2 animate-fade-in"
          style={{ animationDelay: '0.65s' }}
        >
          <Sparkles size={13} className="text-gold" />
          Built by a travel creator who actually travels.
        </p>

        {/* CTA block */}
        <div
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.75s' }}
        >
          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="btn-pulse"
          >
            Reserve your spot
          </Button>
          <Button
            variant="ghost-light"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Get early access
          </Button>
        </div>
        <p
          className="mt-3 font-sans text-xs text-primary-foreground/55 animate-fade-in"
          style={{ animationDelay: '0.9s' }}
        >
          Takes 30 seconds. We'll reach out on WhatsApp.
        </p>

        {/* Urgency badge */}
        <div
          className="mt-6 inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 w-fit animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-sans text-xs text-primary-foreground/80 tracking-wide">
            First 50 early access spots open
          </span>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 group"
        aria-label="Scroll down"
      >
        <span className="tracking-editorial text-primary-foreground/50 group-hover:text-primary-foreground/70 transition-colors duration-200">
          Scroll
        </span>
        <ArrowDown
          size={14}
          className="text-primary-foreground/50 group-hover:text-primary-foreground/70 animate-bounce transition-colors duration-200"
        />
      </button>
    </section>
  );
};
