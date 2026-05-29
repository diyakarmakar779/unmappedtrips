// import React from 'react';
// import { MapPin, Compass } from 'lucide-react';

// const destinations = [
//   {
//     name: 'Meghalaya Monsoon Route',
//     tag: 'Northeast India // 01',
//     desc: 'Waterfalls, hidden stays, misty roads, and slow routes across the Khasi hills curated end-to-end by Unmapped.',
//     image:
//       'https://images.pexels.com/photos/19469039/pexels-photo-19469039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//     concepts: ['Waterfall routes', 'Local stays', 'Foggy drives'],
//     whatsapp:
//       'https://wa.me/918147922283?text=Hi%2C%20I%27m%20interested%20in%20the%20Meghalaya%20Monsoon%20Route%20with%20Unmapped',
//   },

//   {
//     name: 'Sikkim Slow Route',
//     tag: 'Eastern Himalayas // 02',
//     desc: 'Monasteries, mountain roads, quiet cafés, and scenic Himalayan routes planned with depth, not rush.',
//     image:
//       'https://images.pexels.com/photos/32010298/pexels-photo-32010298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
//     concepts: ['Monasteries', 'Mountain routes', 'Scenic drives'],
//     whatsapp:
//       'https://wa.me/918147922283?text=Hi%2C%20I%27m%20interested%20in%20the%20Sikkim%20Slow%20Route%20with%20Unmapped',
//   },

//   {
//     name: 'Hampi Weekend',
//     tag: 'Karnataka // 03',
//     desc: 'Ancient ruins, golden mornings, café corners, and slower days designed around exploration and atmosphere.',
//     image:
//       'https://images.unsplash.com/photo-1718469743818-12d7d4c5f7ab?q=80&w=1200&auto=format&fit=crop',
//     concepts: ['Ruins', 'Sunrise spots', 'Cafe mornings'],
//     whatsapp:
//       'https://wa.me/918147922283?text=Hi%2C%20I%27m%20interested%20in%20the%20Hampi%20Weekend%20with%20Unmapped',
//   },

//   {
//     name: 'Kannur Escape',
//     tag: 'Kerala Coast // 04',
//     desc: 'Quiet beaches, local seafood, Theyyam culture, and coastal Kerala beyond the tourist route.',
//     image:
//       'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1200&auto=format&fit=crop',
//     concepts: ['Hidden beaches', 'Theyyam', 'Coastal routes'],
//     whatsapp:
//       'https://wa.me/918147922283?text=Hi%2C%20I%27m%20interested%20in%20the%20Kannur%20Escape%20with%20Unmapped',
//   },
// ];

// export const Destinations = () => {
//   return (
//     <section
//       id="destinations"
//       className="relative py-24 md:py-32 bg-[#f2f2f0] overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

//         {/* Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
//           <div className="max-w-2xl space-y-4">
//             <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-black/30">
//               Curated journeys
//             </span>

//             <h2 className="font-serif italic font-light text-4xl md:text-6xl text-[#0a120a] tracking-tighter leading-tight">
//               Routes designed
//               <br />
//               <span className="opacity-30">
//                 for deeper journeys.
//               </span>
//             </h2>
//           </div>

//           <p className="font-sans text-sm text-black/50 max-w-[320px] leading-relaxed border-l border-black/10 pl-6">
//             Thoughtfully structured routes across India —
//             built around atmosphere, pacing, and memorable experiences.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
//           {destinations.map((dest, i) => (
//             <div
//               key={i}
//               className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-black/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.01]"
//             >
//               {/* Image */}
//               <div className="relative h-72 overflow-hidden">
//                 <img
//                   src={dest.image}
//                   alt={dest.name}
//                   className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

//                 {/* Status Badge */}
//                 <div className="absolute top-6 right-6">
//                   <span className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#0a120a]">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#c5a383] animate-pulse" />
//                     Curated Route
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-8 flex flex-col flex-1 gap-6">
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2 text-[#c5a383]">
//                     <MapPin size={12} />

//                     <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
//                       {dest.tag}
//                     </span>
//                   </div>

//                   <h3 className="font-serif text-[2rem] leading-tight text-[#0a120a] tracking-tight">
//                     {dest.name}
//                   </h3>
//                 </div>

//                 <p className="font-sans text-sm text-black/50 leading-relaxed">
//                   {dest.desc}
//                 </p>

//                 {/* Concepts */}
//                 <div className="flex flex-wrap gap-2">
//                   {dest.concepts.map((c, j) => (
//                     <span
//                       key={j}
//                       className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] border border-black/[0.03] text-[10px] font-medium text-black/40"
//                     >
//                       <Compass
//                         size={10}
//                         className="text-[#c5a383]"
//                       />

//                       {c}
//                     </span>
//                   ))}
//                 </div>

//                 {/* CTA */}
//                 <div className="mt-auto pt-4">
//                   <p className="text-[10px] uppercase tracking-widest text-[#c5a383] mb-3">
//                     Limited slots available
//                   </p>

//                   <a
//                     href={dest.whatsapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-full inline-flex items-center justify-center py-3 text-sm tracking-wide 
//                                border border-black/10 rounded-xl 
//                                bg-white text-[#0a120a] 
//                                hover:bg-[#0a120a] hover:text-white 
//                                transition-all duration-300 ease-out
//                                shadow-[0_2px_10px_rgba(0,0,0,0.05)] 
//                                hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
//                   >
//                     Start this journey →
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="mt-24 text-center">
//           <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-black/20">
//             More thoughtfully curated routes unlocking soon
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import { MapPin, Compass } from 'lucide-react';

const destinations = [
  {
    name: 'Meghalaya',
    tag: 'Northeast India // 01',
    desc: 'We handle your Meghalaya trip end-to-end. From stays and transport to local routes, everything is planned, booked, and managed for you.',
    image:
      'https://images.pexels.com/photos/19469039/pexels-photo-19469039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    concepts: ['Waterfall routes', 'Local stays', 'Slow travel'],
    status: 'available',
  },
  {
    name: 'Sikkim',
    tag: 'Eastern Himalayas // 02',
    desc: 'Your Sikkim trip, without the stress. Permits, routes, and stays, we take care of everything so you can just experience the mountains.',
    image:
      'https://images.pexels.com/photos/32010298/pexels-photo-32010298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    concepts: ['Mountain routes', 'Monasteries', 'Scenic drives'],
    status: 'available',
  },
  {
    name: 'Expansion',
    tag: 'System Update',
    desc: 'Spiti, Coorg, and Hampi are next. Early users help shape where Unmapped goes deeper next.',
    image:
      'https://images.unsplash.com/photo-1752318080519-442bf251f28f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
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

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl space-y-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-black/30">
              Where we go deep
            </span>

            <h2 className="font-serif italic font-light text-4xl md:text-6xl text-[#0a120a] tracking-tighter leading-tight">
              Trips we personally manage,
              <br />
              <span className="opacity-30">not just list.</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-black/50 max-w-[280px] leading-relaxed border-l border-black/10 pl-6">
            We’re starting with the Northeast.
            Every trip here is handled end-to-end by our team.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-black/[0.03] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                dest.status === 'mapping'
                  ? 'grayscale-[0.5] opacity-80'
                  : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  {dest.status === 'available' ? (
                    <span className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#0a120a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a383] animate-pulse" />
                      Concierge Active
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
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                      {dest.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl text-[#0a120a]">
                    {dest.name}
                  </h3>
                </div>

                <p className="font-sans text-sm text-black/50 leading-relaxed">
                  {dest.desc}
                </p>

                {/* Concepts */}
                <div className="flex flex-wrap gap-2">
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

                {/* CTA */}
                {dest.status === 'available' && (
                  <div className="mt-auto pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#c5a383] mb-2">
                      Limited slots available
                    </p>

                    {dest.name === 'Meghalaya' && (
                      <a
                        href="https://wa.me/918147922283?text=Hi%2C%20I%27m%20interested%20in%20a%20Meghalaya%20trip%20with%20Unmapped"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center py-3 text-sm tracking-wide 
                                   border border-black/10 rounded-xl 
                                   bg-white text-[#0a120a] 
                                   hover:bg-[#0a120a] hover:text-white 
                                   transition-all duration-300 ease-out
                                   shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                      >
                        Start this journey →
                      </a>
                    )}

                    {dest.name === 'Sikkim' && (
                      <a
                        href="https://wa.me/918147922283?text=Hi%2C%20I%27m%20interested%20in%20a%20Sikkim%20trip%20with%20Unmapped"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center py-3 text-sm tracking-wide 
                                   border border-black/10 rounded-xl 
                                   bg-white text-[#0a120a] 
                                   hover:bg-[#0a120a] hover:text-white 
                                   transition-all duration-300 ease-out
                                   shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                      >
                        Start this journey →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-black/20">
            New regions unlocking based on early travelers
          </p>
        </div>
      </div>
    </section>
  );
};
