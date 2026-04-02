import { Button } from './ui/button';
import { Star, Users, ShieldCheck } from 'lucide-react';
import { GOOGLE_FORM_URL, CTA_MICROCOPY, TOTAL_SPOTS, SPOTS_CLAIMED } from '../constants';

const perks = [
  {
    icon: Star,
    title: 'Free trip customization',
    desc: 'Your first curated trip plan is completely free — no payment, no commitment, no fine print.',
  },
  {
    icon: ShieldCheck,
    title: 'Founder-reviewed itineraries',
    desc: 'Every early-access plan is personally reviewed and refined before it reaches you.',
  },
  {
    icon: Users,
    title: 'Priority access to curated drops',
    desc: 'Early members get first access to new destinations, seasonal trip concepts, and curated experiences.',
  },
];

export const EarlyAccess = () => {
  const percent = Math.round((SPOTS_CLAIMED / TOTAL_SPOTS) * 100);

  return (
    <section
      id="early-access"
      className="section-pad grain-overlay relative overflow-hidden"
      style={{ background: 'hsl(var(--charcoal))' }}
    >
      {/* Decorative accent orbs */}
      <div
        className="absolute -top-28 -right-28 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'hsl(var(--gold) / 0.05)' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'hsl(var(--olive) / 0.08)' }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-2xl mx-auto text-center fade-up">
          <span className="tracking-editorial" style={{ color: 'hsl(var(--gold))' }}>
            Early access
          </span>
          <div className="gold-divider-center mt-3 mb-5" />

          <h2 className="font-serif text-4xl md:text-5xl font-light text-primary-foreground leading-snug">
            Be among the
            <br />
            <em>first 50.</em>
          </h2>

          <p className="mt-5 font-sans text-base leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.62)' }}>
            We're opening a founding group of 50 travelers to shape how Unmapped
            works. Once those spots are filled, free access ends and pricing goes live.
          </p>

          {/* Progress bar */}
          <div className="mt-9 px-2">
            <div className="flex justify-between mb-2.5">
              <span className="font-sans text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.45)' }}>
                {SPOTS_CLAIMED} spots claimed
              </span>
              <span className="font-sans text-xs font-semibold text-gold">
                {TOTAL_SPOTS - SPOTS_CLAIMED} remaining
              </span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'hsl(var(--primary-foreground) / 0.1)' }}>
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
                className="fade-up flex flex-col gap-4 rounded-xl p-7 border"
                style={{
                  background: 'hsl(var(--primary-foreground) / 0.04)',
                  borderColor: 'hsl(var(--primary-foreground) / 0.09)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'hsl(var(--gold) / 0.14)', border: '1px solid hsl(var(--gold) / 0.28)' }}
                >
                  <Icon size={18} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-medium text-primary-foreground">
                  {perk.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.58)' }}>
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
          <p className="font-sans text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.42)' }}>
            {CTA_MICROCOPY}
          </p>
          <p className="font-sans text-xs font-medium mt-1" style={{ color: 'hsl(var(--gold))' }}>
            Limited spots. Once filled, pricing goes live.
          </p>
        </div>
      </div>
    </section>
  );
};
