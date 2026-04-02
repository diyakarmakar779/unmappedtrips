import { Button } from './ui/button';
import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

export const FinalCTA = () => {
  return (
    <section
      className="relative overflow-hidden grain-overlay"
      style={{ background: 'var(--gradient-sand)' }}
    >
      {/* Decorative image strip with fade-out */}
      <div className="h-52 md:h-72 relative">
        <img
          src="https://images.unsplash.com/photo-1650884986695-d1e5cf90610f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
          alt="Emerald green valley India"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, hsl(var(--ivory) / 0.05) 0%, hsl(var(--ivory)) 90%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-24 -mt-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center fade-up">
          <span className="tracking-editorial text-muted-foreground">
            Limited early access
          </span>
          <div className="gold-divider-center mt-3 mb-6" />

          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight">
            Be among the first
            <br />
            <em>to travel Unmapped.</em>
          </h2>

          <p className="mt-6 font-sans text-base text-muted-foreground leading-relaxed">
            The first 50 spots come with free trip customization and
            founder-reviewed itineraries. Once filled, pricing goes live.
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="earthy"
              size="lg"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="btn-pulse w-full sm:w-auto"
            >
              Reserve your spot
            </Button>
            {/* <Button
              variant="sand"
              size="lg"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="w-full sm:w-auto"
            >
              Join early access
            </Button> */}
          </div>

          <p className="mt-4 font-sans text-xs text-muted-foreground">
            {CTA_MICROCOPY}
          </p>

          {/* Urgency note */}
          <div className="mt-6 inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-olive" />
            <span className="font-sans text-xs text-muted-foreground">
              Limited to 50 spots. Once filled, this offer ends.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
