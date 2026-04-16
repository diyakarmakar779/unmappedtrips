import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'What is Unmapped exactly?',
    a: 'Unmapped is a Travel OS + concierge. We organise your entire trip into one clean timeline and personally help manage your bookings, stays, and on-ground flow so you don’t have to.',
  },
  {
    q: 'Do I need to plan everything myself?',
    a: 'Not at all. You can either share your bookings or just tell us your plan. We help you structure it, improve it, and manage the experience end-to-end.',
  },
  {
    q: 'How do I share my bookings?',
    a: 'Simply upload your tickets, forward confirmation emails, or send screenshots. We extract everything and build your trip timeline automatically.',
  },
  {
    q: 'Is there real human support?',
    a: 'Yes. Especially for destinations like Meghalaya and Sikkim, we actively help coordinate stays, routes, and local logistics to keep your trip smooth.',
  },
  {
    q: 'What makes this different from other travel apps?',
    a: 'Most apps help you discover or book. Unmapped helps you manage the entire trip in one place — from bookings to daily flow to real-time changes.',
  },
  {
    q: 'How do I get started?',
    a: 'Join the waitlist and fill a short trip brief. We’ll reach out personally and set up your trip inside Unmapped.',
  },
  {
    q: 'Is it free?',
    a: 'Your first trip setup is free. For deeper concierge support, custom routes, and on-ground coordination, we offer paid plans.',
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
                Before You Travel
              </span>
              <h2 className="font-serif italic font-light text-5xl md:text-7xl text-white tracking-tighter leading-tight">
                Everything <br />
                <span className="text-white/30">you need to know.</span>
              </h2>
            </div>
            <p className="font-sans text-white/40 text-sm md:text-base leading-relaxed max-w-sm">
              Planning, bookings, and on-ground support simplified into one smooth experience.
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
