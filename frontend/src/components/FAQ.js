import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'How do I join early access?',
    a: "Fill in the short form — it takes about 2 minutes. We'll reach out on WhatsApp within 24–48 hours to learn more about your trip and start shaping your plan.",
  },
  {
    q: 'What do early users get?',
    a: 'Early access members get priority trip access, closer planning support, and first access to new destinations and curated drops. Once all 50 spots are claimed, early access closes.',
  },
  {
    q: 'What does Travel OS actually mean?',
    a: 'Unmapped is a Travel OS for thoughtful trips. AI helps behind the scenes with research, routing, budgets, and trip structuring, while human curation refines the final plan around your travel style.',
  },
  {
    q: 'Which destinations are you starting with?',
    a: 'We are starting with Meghalaya and Sikkim. More destinations across India will follow, and early access helps us shape what comes next.',
  },
  {
    q: 'What happens after I sign up?',
    a: "We'll reach out on WhatsApp within 24–48 hours, understand your travel style and plans, and begin shaping a coordinated trip plan around them.",
  },
  {
    q: 'Do you plan trips for families and spiritual travelers?',
    a: 'Yes. While our primary focus is solo travelers, couples, and small groups, we also plan trips for families and spiritual journeys. Just mention your travel style in the form.',
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
              Still have a question? Mention it in the early-access form and
              we will answer personally on WhatsApp.
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
                  <AccordionTrigger className="font-serif text-lg font-medium text-foreground py-5 hover:no-underline hover:text-forest transition-colors duration-200 text-left">
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
