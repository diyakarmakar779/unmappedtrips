import { Brain, User, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    label: 'AI-powered',
    title: 'Plans faster than any human researcher',
    desc: 'AI processes hundreds of travel signals — routes, seasons, budgets, local nuances to draft a strong starting point in seconds.',
  },
  {
    icon: User,
    label: 'Human-curated',
    title: 'Refined by people who actually travel',
    desc: 'Every itinerary is reviewed and shaped by a human curator with real local knowledge. The AI drafts. We refine.',
  },
  {
    icon: Brain,
    label: 'Personalised',
    title: 'Calibrated to your specific trip',
    desc: 'Budget flow, pacing, hidden spots, dietary preferences, travel style, the plan adapts to who you are, not who the average traveler is.',
  },
];

export const SoftAI = () => {
  return (
    <section
      id="our-approach"
      className="section-pad grain-overlay"
      style={{ background: 'var(--gradient-sand)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header — editorial two-col */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-16">
          <div className="fade-left">
            <span className="tracking-editorial text-muted-foreground">
              Our approach
            </span>
            <div className="gold-divider mt-3 mb-5" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
              AI helps us plan
              <em className="block"> faster.</em>
              Human curation makes
              <em className="block"> it personal.</em>
            </h2>
          </div>
          <div className="fade-right">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              We don't hide the technology behind Unmapped we just keep it
              where it belongs: in the background. What you receive is a human
              experience, backed by intelligent planning.
            </p>
            <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed italic border-l-2 border-accent pl-3">
              Think of it as a concierge who has done their homework before you
              even walk in the door.
            </p>
          </div>
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="fade-up card-hover bg-card rounded-xl border border-border shadow-card p-8 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon + label row */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-forest/10 border border-forest/20 flex items-center justify-center">
                    <Icon size={16} className="text-forest" />
                  </div>
                  <span className="tracking-editorial text-muted-foreground">
                    {p.label}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
