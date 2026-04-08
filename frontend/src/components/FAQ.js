import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'What exactly is a "Travel OS"?',
    a: 'Unlike a static travel agency, Unmapped is a coordinated system. We act as the central intelligence for your journey—consolidating your bookings, optimizing your routes, and managing your logistics in one unified, thoughtful stream.',
  },
  {
    q: 'How does the Concierge Coordination work?',
    a: "Once you share your vision, our concierge team takes over. We don't just plan; we manage. From syncing external bookings to real-time adjustments, the system ensures your itinerary stays fluid and curated around how you travel.",
  },
  {
    q: 'Can I import bookings from other platforms?',
    a: 'Yes. That is a core function of the OS. Whether you book through Goibibo, Airbnb, or direct, you can sync those details with us. We unify them into your master Unmapped route so everything is managed in one place.',
  },
  {
    q: 'How do I start the process?',
    a: "Fill out the 2-minute vision brief. We'll reach out on WhatsApp within 24 hours to sync on your 'Preferred Vibe' and logistics. Your first coordinated trip plan is shared within 24–48 hours.",
  },
  {
    q: 'Is the first trip plan really free?',
    a: 'Correct. We want you to experience the clarity of a coordinated journey. Your initial personalized route—including curated stays and optimized transit—is provided at no cost.',
  },
  {
    q: 'Do you handle solo and group travel?',
    a: 'While our system is highly optimized for the complexity of solo travel, the concierge service is designed to coordinate couples and small groups who value a deeper, more refined travel experience.',
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[#0a120a] overflow-hidden"
    >
      {/* Subtle designer accent: Deep forest glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a383]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* ── Left Content ── */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-[#c5a383] font-bold">
              The Protocol
            </span>
            <h2 className="font-serif italic font-light text-5xl md:text-7xl text-white tracking-tighter leading-tight">
              Common <br />
              <span className="text-white/30">enquiries.</span>
            </h2>
            <p className="font-sans text-white/40 text-sm md:text-base leading-relaxed max-w-sm">
              If you have a specific requirement or a unique travel style, 
              mention it in the waitlist form. We answer every enquiry personally via WhatsApp.
            </p>
          </div>

          {/* ── Right Accordion ── */}
          <div className="w-full">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="group rounded-[2rem] border border-white/5 bg-white/[0.02] px-8 transition-all duration-300 data-[state=open]:bg-white/[0.04] data-[state=open]:border-white/10"
                >
                  <AccordionTrigger className="font-sans text-base md:text-lg font-medium text-white/70 py-7 hover:no-underline hover:text-white transition-colors text-left tracking-tight">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm md:text-base text-white/40 leading-relaxed pb-7">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
