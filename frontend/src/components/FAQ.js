import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'What exactly is a "Travel OS"?',
    a: 'Most people travel with their plans scattered across ten different apps. Unmapped brings your flights, hotels, and daily plans into one single home. It’s a "Command Center" for your trip that keeps everything simple and in one place.',
  },
  {
    q: 'How do I get my bookings into Unmapped?',
    a: "It’s effortless. Just forward your confirmation emails or screenshots to us. We’ll organize the details into your master route so you don’t have to hunt for PDFs or PNRs ever again.",
  },
  {
    q: 'Is this just an app or a real person helping me?',
    a: 'It’s both. Our system handles the organization, but our team personally hand-picks every stay and route. In the Northeast, we stay in the loop to make sure your car arrives and your trip stays smooth.',
  },
  {
    q: 'How do I start?',
    a: "Fill out the 2-minute brief on our site. We’ll reach out on WhatsApp to understand your style and send you a complete, easy-to-read trip plan within 48 hours.",
  },
  {
    q: 'Can it help with my budget and packing?',
    a: 'Yes. We have simple tools built-in to track your expenses and give you a custom packing list based on where you’re going. You won’t need to switch between different apps anymore.',
  },
  {
    q: 'Is the first plan really free?',
    a: 'Yes. We want you to experience what it feels like to have a trip that’s fully organized and managed. Your first personalized route is on us, with no strings attached.',
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
            <div className="space-y-2">
               <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-[#c5a383] font-bold">
                The Protocol
              </span>
              <h2 className="font-serif italic font-light text-5xl md:text-7xl text-white tracking-tighter leading-tight">
                System <br />
                <span className="text-white/30">Intelligence.</span>
              </h2>
            </div>
            <p className="font-sans text-white/40 text-sm md:text-base leading-relaxed max-w-sm">
              One platform to replace the chaos. If you have a specific requirement for your journey, mention it in the brief. We respond to every sync personally.
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
