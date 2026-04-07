// import { Button } from './ui/button';
// import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

// const problems = [
//   {
//     id: 'where-we-begin',
//     title: 'Where we begin',
//     desc: 'We’re currently curating concept-led, culturally rich trips across Meghalaya and Sikkim, with more destinations across India to follow.',
//   },
//   {
//     id: 'generic-planning',
//     title: 'Most travel planning feels generic',
//     desc: 'Copy-pasted blogs, rushed itineraries, and places you could find on any reel.',
//   },
//   {
//     id: 'the-alternative',
//     title: 'Unmapped is the alternative',
//     desc: 'A calmer, more meaningful way to plan — powered by AI, refined by human curation, and grounded in real destination insight.',
//   },
// ];

// export const WhatIsUnmapped = () => {
//   return (
//     <section
//       id="what-is-unmapped"
//       className="section-pad bg-background grain-overlay"
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-10">
//         <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
//           <div className="fade-left img-zoom-wrap rounded-xl overflow-hidden shadow-card">
//             <img
//               src="https://images.unsplash.com/photo-1586078716042-46355c732f61?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
//               alt="Lush green misty hills"
//               className="w-full h-80 md:h-[500px] object-cover"
//             />
//           </div>

//           <div className="fade-right flex flex-col gap-6">
//             <span className="tracking-editorial text-muted-foreground">
//               What is Unmapped
//             </span>

//             <div className="gold-divider" />

//             <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
//               Not a travel app.
//               <br />
//               <em>A travel OS for meaningful trips.</em>
//             </h2>

//             <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-xl">
//               Most trips start the same way, a dozen tabs open, saved reels everywhere, and no real plan. 
// Unmapped coordinates your itinerary, stays, transport, budget, bookings, and trip details 
// into one thoughtful system, designed around how you travel.
//             </p>

//             <div className="space-y-5 mt-1">
//               {problems.map((item) => (
//                 <div key={item.id} className="flex gap-4">
//                   <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
//                     <span className="w-1.5 h-1.5 rounded-full bg-accent" />
//                   </span>
//                   <div>
//                     <p className="font-sans text-sm font-semibold text-foreground">
//                       {item.title}
//                     </p>
//                     <p className="font-sans text-sm text-muted-foreground mt-0.5 leading-relaxed">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <p className="font-sans text-xs text-muted-foreground italic border-l-2 border-accent pl-3 mt-1 max-w-lg">
//               One thoughtful system for better-planned trips.
//             </p>

//             {/*
//             <div className="flex flex-col gap-2 mt-2">
//               <Button
//                 variant="earthy"
//                 onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
//                 className="w-fit"
//               >
//                 Join early access
//               </Button>
//               <p className="text-xs text-muted-foreground">
//                 {CTA_MICROCOPY}
//               </p>
//             </div>
//             */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
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
    desc: 'Most travel planning feels like a chore copy-pasted blogs and rushed itineraries.',
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
      {/* This smoothly pulls the green from your hero into this section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#070a07] to-transparent opacity-50" />

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

            {/* Floating UI Card with matching palette */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-3xl max-w-[260px]">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold text-center">Travel OS Active</span>
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
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="mt-1 shrink-0 w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all">
                      <Icon size={18} className="text-white/40 group-hover:text-white transition-colors" />
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

            // <div className="pt-4">
            //   <Button
            //     onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            //     className="bg-white text-black hover:bg-white/90 px-10 py-7 text-sm font-bold uppercase tracking-widest rounded-full transition-all shadow-2xl"
            //   >
            //     Join the Waitlist
            //   </Button>
            // </div>
          </div>
        </div>
      </div>
    </section>
  );
};
