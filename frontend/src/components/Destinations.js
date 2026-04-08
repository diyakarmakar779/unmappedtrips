import React from 'react';
import { MapPin, Compass } from 'lucide-react';

const destinations = [
  {
    name: 'Meghalaya',
    tag: 'Northeast India // 01',
    desc: "A module built for depth. Explore living root bridges and turquoise rivers through a system-managed route that prioritizes slow, intentional travel.",
    image: 'https://images.pexels.com/photos/19469039/pexels-photo-19469039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    concepts: ['Scenic slow trips', 'Cultural deep dives', 'Hidden waterfall routes'],
    status: 'available',
  },
  {
    name: 'Sikkim',
    tag: 'Eastern Himalayas // 02',
    desc: 'Ancient monasteries and alpine lakes synced into a seamless itinerary. Experience the quiet shadow of Kangchenjunga with zero logistical noise.',
    image: 'https://images.pexels.com/photos/32010298/pexels-photo-32010298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    concepts: ['Mountain monastery trails', 'Hidden-route concepts', 'Cultural deep dives'],
    status: 'available',
  },
  {
    name: 'Expansion',
    tag: 'System Update',
    desc: 'Spiti Valley, Coorg, and Hampi are currently being mapped into the system. Our founding members help shape the next modules we unlock.',
    image: 'https://images.unsplash.com/photo-1752318080519-442bf251f28f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    concepts: ['Spiti Valley', 'Coorg', 'Hampi'],
    status: 'mapping',
  },
];

export const Destinations = () => {
  return (
    <section
      id="destinations"
      className="relative py-24 md:py-32 bg-[#f2f2f0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-black/30">
              The Collection
            </span>
            <h2 className="font-serif italic font-light text-4xl md:text-6xl text-[#0a120a] tracking-tighter leading-tight">
              Active Routes, <br />
              <span className="opacity-30">managed by the OS.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-black/50 max-w-[280px] leading-relaxed border-l border-black/10 pl-6">
            We begin in the Northeast, where our curation is deepest. Every route is a pre-synced system ready for departure.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-black/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                dest.status === 'mapping' ? 'grayscale-[0.5] opacity-80' : ''
              }`}
            >
              {/* Image Wrap */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Status Badges */}
                <div className="absolute top-6 right-6">
                  {dest.status === 'available' ? (
                    <span className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#0a120a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a383] animate-pulse" />
                      System Live
                    </span>
                  ) : (
                    <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white">
                      Mapping
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#c5a383]">
                    <MapPin size={12} />
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{dest.tag}</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#0a120a]">
                    {dest.name}
                  </h3>
                </div>

                <p className="font-sans text-sm text-black/50 leading-relaxed">
                  {dest.desc}
                </p>

                {/* Concept tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {dest.concepts.map((c, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] border border-black/[0.03] text-[10px] font-medium text-black/40"
                    >
                      <Compass size={10} className="text-[#c5a383]" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Closer ── */}
        <div className="mt-24 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-black/20">
            All roads lead to Unmapped. More modules unlocking seasonally.
          </p>
        </div>
      </div>
    </section>
  );
};
