import { Button } from './ui/button';
import { MessageSquare, Compass, BookOpen } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share the vision',
    desc: 'Tell us your destination, dates, and the specific vibe you’re seeking. It takes two minutes.',
  },
  {
    number: '02',
    icon: Compass,
    title: 'System Coordination',
    desc: 'The Travel OS builds your route, matching AI-powered efficiency with human curation.',
  },
  {
    number: '03',
    icon: BookOpen,
    title: 'Seamless Departure',
    desc: 'Receive a coordinated journey with stays, transport, and logistics handled. Just go.',
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-[#0a120a] overflow-hidden"
    >
      {/* ── Background Detail ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,163,131,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* ── Header ── */}
        <div className="max-w-2xl mx-auto text-center mb-20 space-y-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[#c5a383]">
            The Process
          </span>
          <h2 className="font-serif italic font-light text-4xl md:text-6xl text-white tracking-tighter leading-tight">
            Simple for you. <br />
            <span className="text-white/40">Organised by the system.</span>
          </h2>
          <p className="font-sans text-white/50 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            You define the journey; the Travel OS handles the coordination of itinerary, 
            stays, transport, and logistics.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          
          {/* Connector line (Desktop) - Matching the Bronze Palette */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#c5a383]/30 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle - Glass Effect */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-white/[0.02] border border-white/10 flex flex-col items-center justify-center backdrop-blur-xl shadow-2xl transition-all duration-500 group-hover:border-[#c5a383]/50 group-hover:bg-[#c5a383]/5">
                  <Icon size={22} className="text-white/60 group-hover:text-[#c5a383] transition-colors" />
                  <span className="font-mono text-[9px] text-[#c5a383] mt-2 tracking-widest font-bold">
                    {step.number}
                  </span>
                </div>

                <div className="mt-8 space-y-3">
                  <h3 className="font-sans text-xl font-medium text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-white/40 leading-relaxed max-w-[260px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mid-page CTA ── */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-white text-black hover:bg-white/90 px-10 py-7 text-sm font-bold uppercase tracking-widest rounded-full transition-transform hover:scale-[1.03] shadow-2xl"
          >
            Join Waitlist
          </Button>
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/20">
            Full trip coordination for your first journey
          </p>
        </div>
      </div>
    </section>
  );
};
