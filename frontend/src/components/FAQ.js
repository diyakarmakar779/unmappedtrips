import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'How do I join the waitlist?',
    a: "Fill in the short form—it takes about 2 minutes. We'll reach out on WhatsApp within 24–48 hours to discuss your upcoming travel plans and how the system can coordinate them.",
  },
  {
    q: 'What does "Travel OS" actually mean?',
    a: 'Unmapped is a Travel Operating System. It’s a coordinated way to travel where AI handles the heavy lifting—research, routing, and logistics—while human insight ensures the plan feels personal and culturally rich.',
  },
  {
    q: 'What do early members get?',
    a: 'You get priority access to our coordination system, direct planning support for your first few journeys, and first-look access to new destinations and curated travel "drops" before they go public.',
  },
  {
    q: 'Is this only for solo travelers?',
    a: 'While our system is built for the complexity of solo and small-group travel, we also coordinate trips for couples and families looking for a more thoughtful, less "touristy" experience.',
  },
  {
    q: 'Which destinations are active now?',
    a: 'We are currently active in Meghalaya and Sikkim. We are expanding seasonally to places like Spiti, Hampi, and Coorg based on member feedback.',
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 bg-[#0a120a] overflow-hidden"
    >
      {/* Subtle background glow to match "How It Works" */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a383]/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left — sticky label */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-[#c5a383]">
              Information
            </span>
            <h2 className="font-serif italic font-light text-4xl md:text-6xl text-white tracking-tighter leading-tight">
              Common <br />
              <span className="text-white/30">enquiries.</span>
            </h2>
            <p className="font-sans text-white/40 text-sm leading-relaxed max-w-sm">
              If you have a specific requirement or a unique travel style, 
              mention it in the waitlist form. We answer every enquiry personally.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="group rounded-2xl border border-white/5 bg-white/[0.02] px-6 transition-all duration-300 data-[state=open]:bg-white/[0.04] data-[state=open]:border-white/10"
                >
                  <AccordionTrigger className="font-sans text-base md:text-lg font-medium text-white/80 py-6 hover:no-underline hover:text-white transition-colors text-left tracking-tight">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm md:text-base text-white/40 leading-relaxed pb-6">
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
