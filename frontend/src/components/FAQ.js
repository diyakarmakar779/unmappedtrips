import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'Is Unmapped live yet?',
    a: 'Unmapped is currently in early access. We are onboarding our first 50 users to refine the experience before opening to the public. Reserving your spot now means you get free trip customization and a founder-reviewed itinerary.',
  },
  {
    q: 'What do early users get?',
    a: 'The first 50 users receive: free trip customization for their first trip, a founder-reviewed itinerary, and priority access to new curated trip drops and destinations as we expand. Once 50 spots are filled, these perks end and pricing goes live.',
  },
  {
    q: 'Is this an AI travel app?',
    a: 'Not exactly. Unmapped uses AI to power the planning process — routes, budgets, itinerary drafting — but every plan is reviewed and refined by a human curator before it reaches you. Think of it as a travel concierge that uses smart technology behind the scenes, not a chatbot you interact with.',
  },
  {
    q: 'Which destinations are you starting with?',
    a: 'We are starting with Meghalaya and Sikkim — two of the most culturally rich and visually stunning destinations in India that are chronically underplanned by most travelers. More destinations will follow. Early users help us decide where next.',
  },
  {
    q: 'How does the early-access process work?',
    a: 'Fill in the short early-access form (takes about 2 minutes). Our team will reach out on WhatsApp within 24–48 hours to learn more about your travel plans. We will then craft and deliver a curated itinerary tailored to your trip.',
  },
  {
    q: 'Do you plan trips for families and spiritual travelers?',
    a: 'Yes — while our primary focus is solo travelers, couples, and small groups, we plan trips for families and spiritual journeys too. Just mention your travel style in the form and we will design accordingly.',
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
