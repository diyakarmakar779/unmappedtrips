import { Button } from './ui/button';

const GOOGLE_FORM_URL = 'https://forms.gle/unmapped-early-access';

export const FinalCTA = () => {
  return (
    <section
      className="relative overflow-hidden grain-overlay"
      style={{ background: 'var(--gradient-sand)' }}
    >
      {/* Decorative image strip */}
      <div className="h-48 md:h-64 relative">
        <img
          src="https://images.pexels.com/photos/35020489/pexels-photo-35020489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="India landscape"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, hsl(var(--sand)) 100%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-20 -mt-10 relative z-10">
        <div className="max-w-2xl mx-auto text-center fade-up">
          <span className="tracking-editorial text-muted-foreground">
            Ready to go?
          </span>
          <div className="gold-divider-center mt-3 mb-5" />

          <h2 className="font-serif text-4xl md:text-6xl font-light text-foreground leading-tight">
            Your next trip is
            <br />
            <em>waiting to be planned.</em>
          </h2>

          <p className="mt-5 font-sans text-base text-muted-foreground leading-relaxed">
            Join the first 50 people who'll experience Unmapped — before it opens to everyone.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="earthy"
              size="lg"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="btn-pulse w-full sm:w-auto"
            >
              Reserve your spot
            </Button>
            <Button
              variant="sand"
              size="lg"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="w-full sm:w-auto"
            >
              Get early access
            </Button>
          </div>

          <p className="mt-4 font-sans text-xs text-muted-foreground">
            Takes 30 seconds. Limited early access.
          </p>
        </div>
      </div>
    </section>
  );
};
