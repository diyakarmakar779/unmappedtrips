import { Map, Bed, Coffee, Wallet, Lightbulb, Navigation } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Day-wise itinerary',
    desc: 'A structured, day-by-day plan that flows naturally — no rushed jumps or wasted travel time.',
  },
  {
    icon: Bed,
    title: 'Stay recommendations',
    desc: 'Handpicked stays that match your vibe — boutique, budget, or somewhere in between.',
  },
  {
    icon: Coffee,
    title: 'Hidden cafes & local experiences',
    desc: "The spots that aren't on every travel blog. Local food, quiet corners, real culture.",
  },
  {
    icon: Wallet,
    title: 'Budget breakdown',
    desc: 'A clear estimate of what to expect — so you can plan without nasty surprises.',
  },
  {
    icon: Lightbulb,
    title: 'Travel tips & suggestions',
    desc: "What to pack, what to skip, when to go — practical advice from people who've been.",
  },
  {
    icon: Navigation,
    title: 'Route optimization',
    desc: 'The smartest way to get from A to B, whether by road, rail, or air.',
  },
];

export const WhatYouGet = () => {
  return (
    <section
      id="what-you-get"
      className="section-pad"
      style={{ background: 'var(--gradient-sand)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-xl fade-up">
          <span className="tracking-editorial text-muted-foreground">
            What you get
          </span>
          <div className="gold-divider mt-3 mb-5" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
            Everything you need.
            <br />
            <em>Nothing you don't.</em>
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground leading-relaxed">
            Every Unmapped plan is built around your travel style — not a
            copy-paste template.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="fade-up card-hover bg-card rounded-xl p-7 shadow-card border border-border flex flex-col gap-4"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-olive/10 border border-olive/20 flex items-center justify-center">
                  <Icon size={18} className="text-olive" />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {feat.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
