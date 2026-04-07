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
      className="relative py-24 md:py-32 bg-[#f8f8f6]" // Slightly warmer "Bone" white
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* ── VISUAL WRAPPER ── */}
          <div className="relative group max-w-[500px] lg:max-w-none mx-auto lg:mx-0">
            {/* The Main Image Container */}
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
                alt="Vision of the Northeast"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* This overlay kills the "whitish" look and adds depth */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* ── THE REFINED CARD ── */}
            {/* Increased overlap: Pulling it in with -translate-x-16 */}
            <div className="absolute bottom-10 -right-4 md:-right-12 lg:-translate-x-16 p-5 rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] max-w-[220px] z-20">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-[#1a2e1a] animate-pulse" />
                <span className="text-[8px] uppercase tracking-[0.3em] text-black/50 font-bold">
                  System Active
                </span>
              </div>
              
              <p className="font-serif italic text-base text-[#1a2e1a] leading-tight mb-4">
                "Curating the quiet routes of Meghalaya..."
              </p>
              
              <div className="h-px w-full bg-black/5 mb-3" />
              
              <div className="flex justify-between items-center">
                <p className="text-[8px] text-black/40 font-mono tracking-widest">
                  25.5° N / 91.8° E
                </p>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-black/20" />
                  <div className="w-1 h-1 rounded-full bg-black/10" />
                </div>
              </div>
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full border border-black/10 bg-black/5 text-black/60 text-[10px] uppercase tracking-[0.3em] font-bold">
                A system, not an app
              </span>
              
              <h2 className="font-serif italic font-light text-5xl md:text-7xl text-[#1a2e1a] tracking-tighter leading-[1.05]">
                Not generic planning. <br />
                <span className="text-black/20">A system for journeys.</span>
              </h2>

              <p className="font-sans text-lg text-black/60 leading-relaxed max-w-md">
                Unmapped coordinates your itinerary, stays, and budget into one 
                thoughtful system, designed around <span className="text-[#1a2e1a] font-semibold italic">how you travel.</span>
              </p>
            </div>

            <div className="space-y-6">
              {features.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <div key={item.id} className="flex gap-5 group items-start">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-black/5 flex items-center justify-center group-hover:border-black/20 group-hover:shadow-md transition-all duration-300">
                      <FeatureIcon size={18} className="text-black/30 group-hover:text-black transition-colors" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-sans text-sm font-bold text-black/80 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-black/40 leading-relaxed">
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
