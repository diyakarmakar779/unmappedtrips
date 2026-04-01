import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'Is this free?',
    a: 'Yes — for early access members, the first trip customization is completely free. Once we open to the public, plans will be available at a small fee. Early access locks in free access for your first trip.',
  },
  {
    q: 'How do I receive my plan?',
    a: "After you fill in your travel details, we'll send your itinerary directly to you — via WhatsApp or email, whichever you prefer. It'll be a clean, readable document you can refer to on your trip.",
  },
  {
    q: 'Will someone contact me?',
    a: 'Yes. Once you submit the form, our team will reach out on WhatsApp within 24–48 hours to confirm details and answer any questions before we start building your plan.',
  },
  {
    q: 'Do you handle bookings?',
    a: 'Currently, Unmapped focuses on planning — we give you the perfect plan, and you book at your own pace. We do include direct links and recommendations to make bookings easier. Booking support may come later.',
  },
  {
    q: 'Is Unmapped only for India trips?',
    a: "For now, yes. We're starting with Northeast India — Meghalaya and Sikkim — before expanding to more destinations. India has so much unexplored territory, we want to get this right first.",
  },
  {
    q: 'Can I use it for family or spiritual travel?',
    a: 'Absolutely. We design plans for solo travelers, couples, small groups, families, and spiritual journeys. Just let us know your travel style when you fill the form.',
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="section-pad bg-background grain-overlay"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — sticky label */}
          <div className="md:sticky md:top-32 fade-left">
            <span className="tracking-editorial text-muted-foreground">
              Questions
            </span>
            <div className="gold-divider mt-3 mb-5" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
              Things people
              <br />
              <em>usually ask.</em>
            </h2>
            <p className="mt-5 font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
              Still have a question? We'll answer on WhatsApp — just reserve your
              spot and mention it in the form.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="fade-right">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-card px-5 shadow-card data-[state=open]:shadow-hover"
                >
                  <AccordionTrigger className="font-serif text-lg font-medium text-foreground py-5 hover:no-underline hover:text-olive transition-colors duration-200 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5">
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
