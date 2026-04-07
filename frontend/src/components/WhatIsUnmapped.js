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
      className="relative py-24 md:py-40 bg-[#f8f8f6] overflow-hidden" 
    >
      {/* ── DESIGNER ACCENT: Subtle grid or topographic lines could go here ── */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#1a2e1a 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* ── THE VISUAL ASSET (LEFT SIDE) ── */}
          <div className="relative order-2 lg:order-1">
            {/* The Main Image with a 'Physical' Frame feel */}
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
                alt="Vision of the Northeast"
                className="w-full h-full object-cover"
              />
              {/* Deepening the image colors without just making it 'dark' */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2e1a]/40 via-transparent to-white/10 mix-blend-multiply" />
            </div>

            {/* ── THE 'DARK GLASS' CARD ── */}
            {/* We switch to a dark glass card to create high-end contrast against the white image/bg */}
            <div className="absolute -bottom-8 -right-4 md:-right-16 p-6 rounded-[2rem] bg-[#0a120a]/80 backdrop-blur-3xl border border-white/10 shadow-2xl max-w-[240px] z-20 transform hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-[#c5a383] animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-bold">
                  System Live
                </span>
              </div>
              
              <p className="font-serif italic text-lg text-white/90 leading-tight mb-6">
                "Finding the quiet routes in a loud world."
              </p>
              
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <p className="text-[9px] text-[#c5a383] font-mono tracking-[0.2em]">
                  SHILLONG // 25.5° N
                </p>
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                </div>
              </div>
            </div>

            {/* Decorative Background Element to 'ground' the image */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#c5a383]/10 rounded-full blur-[80px] -z-10" />
          </div>

          {/* ── THE CONTENT (RIGHT SIDE) ── */}
          <div className="flex flex-col gap-12 order-1 lg:order-2">
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] uppercase tracking-[0.5em] text-black/30 font-bold block">
                  Design Philosophy
                </span>
                <h2 className="font-serif italic font-light text-5xl md:text-8xl text-[#1a2e1a] tracking-tighter leading-[0.95]">
                  A System <br />
                  <span className="text-black/10">not an app.</span>
                </h2>
              </div>

              <p className="font-sans text-xl text-black/50 leading-relaxed max-w-md">
                Generic travel is a chore. Unmapped is a <span className="text-[#1a2e1a] font-semibold underline decoration-[#c5a383]/30 decoration-4 underline-offset-4">coordinated environment</span> for your most thoughtful journeys.
              </p>
            </div>

            <div className="grid gap-8">
              {features.map((item) => {
                const FeatureIcon = item.icon;
                return (
                  <div key={item.id} className="flex gap-6 group items-start border-l-2 border-transparent hover:border-[#c5a383]/40 pl-6 transition-all duration-300">
                    <div className="shrink-0 mt-1 text-[#1a2e1a]/40 group-hover:text-[#1a2e1a] transition-colors">
                      <FeatureIcon size={20} strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-sans text-sm font-bold text-black/80 tracking-tight uppercase tracking-widest">
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
