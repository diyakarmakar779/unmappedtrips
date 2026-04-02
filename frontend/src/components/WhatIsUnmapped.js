import { Button } from './ui/button';
import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

const problems = [
  {
    title: 'Most travel planning feels generic',
    desc: 'Copy-pasted blogs, rushed timelines, and places you could have found on any Instagram reel.',
  },
  {
    title: 'Fragmented and exhausting',
    desc: 'Dozens of tabs, contradictory advice, and no clear plan — before the trip even starts.',
  },
  {
    title: 'Unmapped is the alternative',
    desc: 'Thoughtfully planned, culturally rich, concept-led trips designed around how you travel.',
  },
];

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
              src="https://images.unsplash.com/photo-1586078716042-46355c732f61?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
              alt="Lush green misty hills"
              className="w-full h-80 md:h-[500px] object-cover"
            />
          </div>

          {/* Right — copy */}
          <div className="fade-right flex flex-col gap-6">
            <span className="tracking-editorial text-muted-foreground">
              What is Unmapped
            </span>
            <div className="gold-divider" />

            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
              Not a travel app.
              <br />
              <em>A travel concierge.</em>
            </h2>

            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Travel planning today is noisy, generic, and fragmented. Unmapped
              replaces that with one curated plan, tailored to your destination,
              your travel style, and what actually matters to you.
            </p>

            <div className="space-y-5 mt-1">
              {problems.map((item, i) => (
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

            {/* Positioning line */}
            <p className="font-sans text-xs text-muted-foreground italic border-l-2 border-accent pl-3 mt-1">
              AI-powered planning. Human-curated trips. Meaningful travel, not generic itineraries.
            </p>

            {/* <div className="flex flex-col gap-2 mt-2">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
