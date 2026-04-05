import { Map, Bed, Coffee, Wallet, Lightbulb, Navigation } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: 'Day-wise itinerary',
    desc: 'A structured, concept-led journey with better flow and fewer rushed decisions.',
  },
  {
    icon: Bed,
    title: 'Stay recommendations',
    desc: 'Handpicked places to stay that match the mood and style of your trip.',
  },
  {
    icon: Coffee,
    title: 'Local experiences',
    desc: "Real cultural immersion, beyond the usual list of popular stops.",
  },
  {
    icon: Wallet,
    title: 'Budget breakdown',
    desc: 'A clear view of costs across stays, transport, and experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Curated travel tips',
    desc: "Useful advice on timing, packing, pace, and the details that make travel easier.",
  },
  {
    icon: Navigation,
    title: 'Hidden route concepts',
    desc: 'Scenic slow routes, deeper cultural detours, and lesser-known ways to explore.',
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
            One complete plan.
            <br />
            <em>Fully coordinated</em>
          </h2>
          <p className="mt-4 font-sans text-base text-muted-foreground leading-relaxed">
            Every Unmapped trip is fully coordinated — itinerary, stays, budget, local experiences, and travel tips brought together. No scattered links. No second-guessing.
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
                <div className="w-10 h-10 rounded-lg bg-forest/10 border border-forest/20 flex items-center justify-center">
                  <Icon size={18} className="text-forest" />
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
