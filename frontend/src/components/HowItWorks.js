import { Upload, GitBranch, Sparkles } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload your bookings',
    desc: 'Drop your tickets, confirmations, or forward emails. No formats, no setup just upload and go.',
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Everything becomes a timeline',
    desc: 'Your flights, stays, and plans auto-organize into one clean, scrollable trip flow.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'AI keeps it running',
    desc: 'Get real-time suggestions, alerts, and smart changes as your trip unfolds.',
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-[#0a120a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,163,131,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-24 space-y-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[#c5a383]">
            How it works
          </span>

          <h2 className="font-serif italic font-light text-4xl md:text-6xl text-white tracking-tighter leading-tight">
            From chaos to clarity.<br />
            <span className="text-white/40">In one flow.</span>
          </h2>

          <p className="font-sans text-white/50 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
            No planning stress. No app switching. Just drop your bookings, everything else falls into place.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative">
          
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[#c5a383]/30 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group"
              >
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

        {/* Footer Microcopy */}
        <div className="mt-24 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/20">
            Upload • Auto-organize • Real-time assist
          </p>
        </div>
      </div>
    </section>
  );
};
