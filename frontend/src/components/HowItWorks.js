import { Button } from './ui/button';
import { MessageSquare, Compass, Plane } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/unmapped-early-access';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell us your plan',
    desc: 'Share where you want to go, your travel dates, vibe, and budget. Takes 2 minutes.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'We design your trip',
    desc: 'Our AI + real travel experience combines to craft a detailed, personal itinerary just for you.',
  },
  {
    number: '03',
    icon: Plane,
    title: 'You travel stress-free',
    desc: "Receive your plan, pack your bags, and go. We're your backup if anything changes.",
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
            Three steps to a trip
            <br />
            <em>you'll remember.</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-border" />

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
                  <span className="font-sans text-[10px] font-semibold text-muted-foreground mt-0.5 tracking-widest">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-16 flex flex-col items-center gap-3 fade-up">
          <Button
            variant="earthy"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Reserve your spot
          </Button>
          <p className="font-sans text-xs text-muted-foreground">
            Takes 30 seconds. We'll reach out on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};
