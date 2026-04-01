import { Button } from './ui/button';
import { Star, Users, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

const GOOGLE_FORM_URL = 'https://forms.gle/unmapped-early-access';
const TOTAL_SPOTS = 50;

const perks = [
  {
    icon: Star,
    title: 'Free trip customization',
    desc: 'Your first itinerary is completely free — no strings, no catches.',
  },
  {
    icon: ShieldCheck,
    title: 'Founder-reviewed itineraries',
    desc: 'Every early-access plan is personally reviewed before it reaches you.',
  },
  {
    icon: Users,
    title: 'Priority access',
    desc: 'Early members always get first access to new destinations and features.',
  },
];

export const EarlyAccess = () => {
  const [claimed, setClaimed] = useState(23); // simulate filled spots

  const percent = Math.round((claimed / TOTAL_SPOTS) * 100);

  return (
    <section
      id="early-access"
      className="section-pad grain-overlay relative overflow-hidden"
      style={{ background: 'hsl(var(--charcoal))' }}
    >
      {/* Decorative gold accent circle */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'hsl(var(--gold) / 0.06)' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-2xl mx-auto text-center fade-up">
          <span className="tracking-editorial" style={{ color: 'hsl(var(--gold))' }}>
            Limited offer
          </span>
          <div className="gold-divider-center mt-3 mb-5" />

          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground leading-snug">
            Be among the
            <br />
            <em>first 50.</em>
          </h2>

          <p className="mt-5 font-sans text-base leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.65)' }}>
            We're onboarding a small founding group to shape how Unmapped works.
            Once 50 spots are filled, pricing goes live.
          </p>

          {/* Progress bar */}
          <div className="mt-8 px-4">
            <div className="flex justify-between mb-2">
              <span className="font-sans text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.5)' }}>
                {claimed} spots claimed
              </span>
              <span className="font-sans text-xs font-semibold text-gold">
                {TOTAL_SPOTS - claimed} left
              </span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: 'hsl(var(--primary-foreground) / 0.12)' }}>
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${percent}%`,
                  background: 'linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))',
                }}
              />
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {perks.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <div
                key={i}
                className="fade-up flex flex-col gap-3 rounded-xl p-7 border"
                style={{
                  background: 'hsl(var(--primary-foreground) / 0.04)',
                  borderColor: 'hsl(var(--primary-foreground) / 0.1)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'hsl(var(--gold) / 0.15)', border: '1px solid hsl(var(--gold) / 0.3)' }}
                >
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-medium text-primary-foreground">
                  {perk.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}>
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 fade-up">
          <Button
            variant="gold"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="btn-pulse"
          >
            Reserve your spot
          </Button>
          <p className="font-sans text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.45)' }}>
            Takes 30 seconds. We'll reach out on WhatsApp.
          </p>
          <p className="font-sans text-xs font-medium" style={{ color: 'hsl(var(--gold))' }}>
            Limited spots. Once filled, pricing goes live.
          </p>
        </div>
      </div>
    </section>
  );
};
