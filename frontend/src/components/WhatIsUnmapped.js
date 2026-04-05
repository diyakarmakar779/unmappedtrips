import { Button } from './ui/button';
import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

const problems = [
  {
    id: 'where-we-begin',
    title: 'Where we begin',
    desc: 'We’re currently curating concept-led, culturally rich trips across Meghalaya and Sikkim, with more destinations across India to follow.',
  },
  {
    id: 'generic-planning',
    title: 'Most travel planning feels generic',
    desc: 'Copy-pasted blogs, rushed itineraries, and places you could find on any reel.',
  },
  {
    id: 'the-alternative',
    title: 'Unmapped is the alternative',
    desc: 'A calmer, more meaningful way to plan — powered by AI, refined by human curation, and grounded in real destination insight.',
  },
];

export const WhatIsUnmapped = () => {
  return (
    <section
      id="what-is-unmapped"
      className="section-pad bg-background grain-overlay"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="fade-left img-zoom-wrap rounded-xl overflow-hidden shadow-card">
            <img
              src="https://images.unsplash.com/photo-1586078716042-46355c732f61?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
              alt="Lush green misty hills"
              className="w-full h-80 md:h-[500px] object-cover"
            />
          </div>

          <div className="fade-right flex flex-col gap-6">
            <span className="tracking-editorial text-muted-foreground">
              What is Unmapped
            </span>

            <div className="gold-divider" />

            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
              Not a travel app.
              <br />
              <em>A travel OS for meaningful trips.</em>
            </h2>

            <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
              Most trips start the same way, a dozen tabs open, saved reels everywhere,
              and no real plan. Unmapped brings your itinerary, stays, budget, bookings,
              and trip details into one thoughtful plan, designed around how you travel.
            </p>

            <div className="space-y-5 mt-1">
              {problems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs text-muted-foreground italic border-l-2 border-accent pl-3 mt-1 max-w-lg">
              One thoughtful system for planning better trips.
            </p>

            {/*
            <div className="flex flex-col gap-2 mt-2">
              <Button
                variant="earthy"
                onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
                className="w-fit"
              >
                Join early access
              </Button>
              <p className="text-xs text-muted-foreground">
                {CTA_MICROCOPY}
              </p>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};
