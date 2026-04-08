import React from 'react';
import { ShieldCheck, Zap, Layers3 } from 'lucide-react';

const features = [
  {
    id: 'unified-itinerary',
    icon: ShieldCheck,
    title: 'One Home for Everything',
    desc: 'The end of tab-fatigue. We unify your flights, hotel bookings, and daily activities into one simple, cohesive route.',
  },
  {
    id: 'travel-tools',
    icon: Layers3,
    title: 'Integrated Travel Tools',
    desc: 'Everything you need, built-in. Track expenses, manage your budget, and follow custom packing lists without leaving the system.',
  },
  {
    id: 'ai-assistant',
    icon: Zap,
    title: 'AI Travel Assistant',
    desc: 'A partner who knows your vibe. Our AI learns your taste to provide real-time suggestions, ensuring every detour is worth the drive.',
  },
];

export const WhatIsUnmapped = () => {
  return (
    <section 
      id="what-is-unmapped" 
      className="relative py-24 md:py-40 bg-[#f8f8f6] overflow-hidden" 
    >
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#1a2e1a 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* ── VISUAL ASSET (Left) ── */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
                alt="Vision of the Northeast"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2e1a]/40 via-transparent to-white/10 mix-blend-multiply" />
            </div>

            {/* THE CONCIERGE CARD */}
            <div className="absolute -bottom-8 -right-4 md:-right-16 p-6 rounded-[2rem] bg-[#0a120a]/90 backdrop-blur-3xl border border-white/10 shadow-2xl max-w-[260px] z-20 transition-transform duration-500 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-[#c5a383] animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 font-bold">
                  System Active
                </span>
              </div>
              
              <p className="font-serif italic text-lg text-white/90 leading-tight mb-6">
                "Every detail unified. Every mile managed."
              </p>
              
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <p className="text-[9px] text-[#c5a383] font-mono tracking-[0.2em]">
                  OS SYNC // 24/7
                </p>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>

          {/* ── CONTENT (Right) ── */}
          <div className="flex flex-col gap-12 order-1 lg:order-2">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.5em] text-black/30 font-bold block">
                  India's First Travel OS
                </span>
                <h2 className="font-serif italic font-light text-5xl md:text-8xl text-[#1a2e1a] tracking-tighter leading-[0.95]">
                  Managed <br />
                  <span className="text-black/20">not just planned.</span>
                </h2>
              </div>

              {/* FIXED SYNTAX HERE: Added closing tags */}
              <p className="font-sans text-xl text-black/50 leading-relaxed max-w-md">
                Unmapped is the single platform that unifies every step of your trip. From the first spark of an idea to the final mile back home, all roads lead here.
              </p> 
            </div>

            <div className="grid gap-8">
              {features.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <div key={item.id} className="flex gap-6 group items-start border-l-2 border-transparent hover:border-[#c5a383]/40 pl-6 transition-all duration-300">
                    <div className="shrink-0 mt-1 text-[#1a2e1a]/40 group-hover:text-[#1a2e1a]">
                      <FeatureIcon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-sm font-bold text-black/80 uppercase tracking-widest">
                        {item.title}
                      </h4>
                      <p className="font-sans text-sm text-black/40 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* ── END CONTENT ── */}

        </div>
      </div>
    </section>
  );
};
