import { CheckCircle2, XCircle } from 'lucide-react';

const comparisons = [
  {
    bad:  'Copy-paste itineraries from travel blogs',
    good: 'Designed around how you like to travel',
  },
  {
    bad:  'Rushed checklists that miss the soul',
    good: 'Thoughtful pacing with breathing room',
  },
  {
    bad:  'Generic "top 10" recommendations',
    good: 'Hidden gems picked for your interests',
  },
  {
    bad:  'One-size-fits-all travel packages',
    good: 'Custom to your group, budget & vibe',
  },
];

export const WhyDifferent = () => {
  return (
    <section
      className="section-pad"
      style={{ background: 'hsl(var(--olive-dark))' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <div className="fade-left">
            <span className="tracking-editorial" style={{ color: 'hsl(var(--gold-light))' }}>
              Why it's different
            </span>
            <div className="gold-divider mt-3 mb-5" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground leading-snug">
              Not another
              <br />
              <em>travel checklist.</em>
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.7)' }}>
              Most travel plans are designed for the average traveler.
              Unmapped is designed for you — your pace, your style, your definition
              of a great trip.
            </p>
          </div>

          {/* Right: comparison table */}
          <div className="fade-right space-y-4">
            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-3"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Bad */}
                <div className="flex items-start gap-2.5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3">
                  <XCircle size={14} className="mt-0.5 shrink-0" style={{ color: 'hsl(0 60% 65%)' }} />
                  <p className="font-sans text-xs text-primary-foreground/55 leading-relaxed">{row.bad}</p>
                </div>
                {/* Good */}
                <div className="flex items-start gap-2.5 rounded-lg px-4 py-3" style={{ background: 'hsl(var(--gold) / 0.12)', border: '1px solid hsl(var(--gold) / 0.25)' }}>
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-gold" />
                  <p className="font-sans text-xs text-primary-foreground/85 leading-relaxed">{row.good}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
