import { Button } from './ui/button';

const GOOGLE_FORM_URL = 'https://forms.gle/unmapped-early-access';

export const WhatIsUnmapped = () => {
  return (
    <section
      id="what-is-unmapped"
      className="section-pad bg-background grain-overlay"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* 2-col editorial layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left — image */}
          <div className="fade-left img-zoom-wrap rounded-xl overflow-hidden shadow-card">
            <img
              src="https://images.pexels.com/photos/4429619/pexels-photo-4429619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Solo traveler in India"
              className="w-full h-80 md:h-[480px] object-cover"
            />
          </div>

          {/* Right — copy */}
          <div className="fade-right flex flex-col gap-6">
            <span className="tracking-editorial text-muted-foreground">
              What is Unmapped
            </span>
            <div className="gold-divider" />

            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
              Your trip, end-to-end.
              <br />
              <em>No tabs. No confusion.</em>
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: 'We plan your trip end-to-end',
                  desc: 'From the first day to the last — stays, routes, experiences, and backup plans.',
                },
                {
                  title: 'No multiple tabs, no confusion',
                  desc: 'One clear, ready-to-follow plan delivered straight to you.',
                },
                {
                  title: 'You get a plan you can actually use',
                  desc: 'Day-wise, readable, and tuned for how you like to travel.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="font-sans text-sm text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* AI subtle line */}
            <p className="font-sans text-xs text-muted-foreground italic border-l-2 border-accent pl-3">
              Powered by AI, refined by real travel experience.
            </p>

            <Button
              variant="earthy"
              onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
              className="w-fit mt-2"
            >
              Get early access
            </Button>
            <p className="text-xs text-muted-foreground -mt-2">
              Takes 30 seconds. We'll reach out on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
