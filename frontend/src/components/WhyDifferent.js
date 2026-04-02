import { CheckCircle2, XCircle } from 'lucide-react';

const comparisons = [
  {
    bad:  'Generic itineraries from travel blogs',
    good: 'Concept trips built around your travel style',
  },
  {
    bad:  'Rushed, touristy plans for the masses',
    good: 'Cultural deep dives with breathing room',
  },
  {
    bad:  'One-size-fits-all tour packages',
    good: 'Personal to your group, budget and vibe',
  },
  {
    bad:  'You do all the research yourself',
    good: 'We handle it — you arrive ready to explore',
  },
];

export const WhyDifferent = () => {
  return (
    <section
      id="why-different"
      className="section-pad"
      style={{ background: 'hsl(var(--forest-deep))' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <div className="fade-left">
            <span className="tracking-editorial" style={{ color: 'hsl(var(--gold))' }}>
              Why Unmapped is different
            </span>
            <div className="gold-divider mt-3 mb-5" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground leading-snug">
              Built around
              <br />
              <em>your travel style.</em>
            </h2>
            <p className="mt-5 font-sans text-base leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.68)' }}>
              Most travel services are designed for the average traveler.
              Unmapped starts with you — your pace, your interests, your definition
              of a great trip — and works outward from there.
            </p>

            {/* 3 positioning bullets */}
            <ul className="mt-7 space-y-3">
              {[
                'Not generic itineraries',
                'Not rushed, touristy plans',
                'Not one-size-fits-all packages',
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1 h-4 rounded-full" style={{ background: 'hsl(var(--gold))' }} />
                  <span className="font-sans text-sm" style={{ color: 'hsl(var(--primary-foreground) / 0.75)' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: comparison table */}
          <div className="fade-right space-y-3">
            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-2 gap-3"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Before */}
                <div className="flex items-start gap-2.5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3">
                  <XCircle size={14} className="mt-0.5 shrink-0" style={{ color: 'hsl(0 55% 62%)' }} />
                  <p className="font-sans text-xs text-primary-foreground/50 leading-relaxed">{row.bad}</p>
                </div>
                {/* After */}
                <div className="flex items-start gap-2.5 rounded-lg px-4 py-3" style={{ background: 'hsl(var(--gold) / 0.12)', border: '1px solid hsl(var(--gold) / 0.28)' }}>
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
