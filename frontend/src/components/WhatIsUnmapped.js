import { Target, Layers3, Zap } from 'lucide-react';

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
      className="relative py-24 md:py-32 bg-[#0a120a] border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* ── VISUAL ── */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
                alt="Vision of the Northeast"
                className="w-full h-full object-cover brightness-[0.8] contrast-110 grayscale-[0.2] group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a120a] via-transparent to-transparent opacity-80" />
            </div>

            {/* Floating UI Card - Using pure glass effect */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-3xl max-w-[260px]">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c5a383] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold">Travel OS Active</span>
              </div>
              <p className="font-serif italic text-lg text-white/80 leading-tight mb-4">
                "Curating the slow routes of Meghalaya..."
              </p>
              <div className="h-px w-full bg-white/5 mb-4" />
              <p className="text-[9px] text-white/20 font-mono tracking-widest uppercase">
                25.5° N / 91.8° E
              </p>
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full border border-[#c5a383]/20 bg-[#c5a383]/5 text-[#c5a383] text-[10px] uppercase tracking-[0.2em] font-medium">
                A system, not an app
              </span>
              
              <h2 className="font-serif italic font-light text-5xl md:text-7xl text-white tracking-tighter leading-[1.1]">
                Not generic planning. <br />
                <span className="text-white/30">A system for journeys.</span>
              </h2>

              <p className="font-sans text-lg text-white/50 leading-relaxed max-w-xl">
                Unmapped coordinates your itinerary, stays, and budget into one 
                thoughtful system, designed around <span className="text-white/90 italic">how you travel.</span>
              </p>
            </div>

            <div className="space-y-8">
              {features.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="mt-1 shrink-0 w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#c5a383]/40 group-hover:bg-[#c5a383]/5 transition-all duration-500">
                      <FeatureIcon size={20} className="text-white/40 group-hover:text-[#c5a383] transition-colors" />
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
