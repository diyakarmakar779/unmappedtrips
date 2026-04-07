import { Button } from './ui/button';
import { Target, Layers3, Zap } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

const features = [
  {
    id: 'where-we-begin',
    icon: Target,
    title: 'Where we begin',
    desc: 'Currently curating concept-led, culturally rich trips across Meghalaya and Sikkim.',
  },
  {
    id: 'generic-planning',
    icon: Layers3,
    title: 'The generic alternative',
    desc: 'Most travel planning feels like a chore—copy-pasted blogs and rushed itineraries.',
  },
  {
    id: 'unmapped-is-different',
    icon: Zap,
    title: 'Unmapped is the alternative',
    desc: 'A calmer way to plan powered by AI, refined by human curation and insight.',
  },
];

export const WhatIsUnmapped = () => {
  return (
    <section 
      id="what-is-unmapped" 
      className="relative py-24 md:py-32 bg-[#0a120a] overflow-hidden"
    >
      {/* ── Transition Gradient ── */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#070a07] to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* ── VISUAL: Conceptual OS Stack ── */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
                alt="Vision of the Northeast"
                className="w-full h-full object-cover brightness-75 contrast-110 saturate-[0.8] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a120a] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating UI Card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-3xl max-w-[260px] pointer-events-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">Travel OS Active</span>
              </div>
              
              <div className="space-y-3">
                <p className="font-serif italic text-lg text-white/80 leading-tight">
                  "Curating the slow routes of Meghalaya..."
                </p>
                <p className="text-[9px] text-white/20 font-mono tracking-tighter uppercase mt-4">
                  LAT: 25.5° N / LON: 91.8° E
                </p>
              </div>
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#c5a383]/60">
                A system, not an app
              </span>
              
              <h2 className="font-serif italic font-light text-5xl md:text-6xl text-white tracking-tighter leading-[1.1]">
                Not generic trip planning. <br />
                <span className="text-white/40">A system for journeys.</span>
              </h2>

              <p className="font-sans text-base md:text-lg text-white/50 leading-relaxed max-w-xl">
                Unmapped coordinates your itinerary, stays, budget, and local bookings 
                into one thoughtful system, designed around <span className="text-white/80 font-medium italic">how you travel.</span>
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-8 py-4">
              {features.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="mt-1 shrink-0 w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all duration-300">
                      <FeatureIcon size={18} className="text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-base font-semibold text-white/90 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="font-sans text-sm text-white/40 leading-relaxed">
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
