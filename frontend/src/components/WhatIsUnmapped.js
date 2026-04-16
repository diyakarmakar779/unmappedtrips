import React from 'react';
import { ShieldCheck, Zap, Layers3 } from 'lucide-react';

const features = [
  {
    id: 'unified-itinerary',
    icon: ShieldCheck,
    title: 'Everything in one place',
    desc: 'Know what’s next without thinking twice. Flights, stays, and plans flow together in one simple timeline.',
  },
  {
    id: 'travel-tools',
    icon: Layers3,
    title: 'No more travel juggling',
    desc: 'Track expenses, manage packing, and stay organized — without switching between apps mid-trip.',
  },
  {
    id: 'ai-assistant',
    icon: Zap,
    title: 'Plans that adapt',
    desc: 'Weather changes, delays happen — your trip adjusts in real time so you don’t have to.',
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
                  LIVE TRIP
                </span>
              </div>
              
              <p className="font-serif italic text-lg text-white/90 leading-tight mb-6">
                "Everything in sync. Just focus on the journey."
              </p>
              
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <p className="text-[9px] text-[#c5a383] font-mono tracking-[0.2em]">
                  SYNCED // REAL-TIME
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
                  A better way to travel
                </span>
                <h2 className="font-serif italic font-light text-5xl md:text-8xl text-[#1a2e1a] tracking-tighter leading-[0.95]">
                  Your trip,<br />
                  <span className="text-black/20">without the chaos.</span>
                </h2>
              </div>

              <p className="font-sans text-base text-black/50 leading-relaxed max-w-md">
                No more digging through emails, switching apps, or second-guessing plans. 
                Everything is where it should be — exactly when you need it.
              </p> 
            </div>

            <div className="grid gap-8">
              {features.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <div 
                    key={item.id} 
                    className="flex gap-6 group items-start border-l-2 border-transparent hover:border-[#c5a383]/40 pl-6 transition-all duration-300 hover:translate-x-1"
                  >
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

        </div>
      </div>
    </section>
  );
};
