import { Button } from './ui/button';
import { MessageSquare, Compass, BookOpen } from 'lucide-react';
import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell us where, when & vibe',
    desc: 'Share your destination, travel dates, budget, and what kind of experience you want. Takes two minutes.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'We craft your trip plan',
    desc: 'We use AI-powered planning and human insight to design a detailed, personalised itinerary just for you.',
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'Receive your curated itinerary',
    desc: 'You get a refined, ready-to-use plan with curated recommendations — delivered with clarity.',
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="section-pad bg-background grain-overlay"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center fade-up">
          <span className="tracking-editorial text-muted-foreground">
            How it works
          </span>
          <div className="gold-divider-center mt-3 mb-5" />
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
            Simple from your end.
            <br />
            <em>Thoughtful from ours.</em>
          </h2>
          <p className="mt-4 font-sans text-sm text-muted-foreground leading-relaxed">
            You share your travel intent. We do the hard part — research, curation,
            and planning — then hand you a clean, confident trip plan.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-10 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-px" style={{ background: 'hsl(var(--gold) / 0.3)' }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="fade-up relative flex flex-col items-center text-center gap-5 px-4"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Step circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-accent flex flex-col items-center justify-center shadow-gold">
                  <Icon size={20} className="text-olive" />
                  <span className="font-sans text-[10px] font-semibold text-muted-foreground mt-1 tracking-widest">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-[230px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-16 flex flex-col items-center gap-2.5 fade-up">
          <Button
            variant="earthy"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Reserve your spot
          </Button>
          <p className="font-sans text-xs text-muted-foreground">
            {CTA_MICROCOPY}
          </p>
        </div>
      </div>
    </section>
  );
};
