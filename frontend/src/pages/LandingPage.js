import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { WhatIsUnmapped } from '../components/WhatIsUnmapped';
import { WhatYouGet } from '../components/WhatYouGet';
import { HowItWorks } from '../components/HowItWorks';
import { WhyDifferent } from '../components/WhyDifferent';
import { SoftAI } from '../components/SoftAI';
import { Destinations } from '../components/Destinations';
import { EarlyAccess } from '../components/EarlyAccess';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { StickyMobileCTA } from '../components/StickyMobileCTA';
import { useScrollAnimation } from '../hooks/useIntersectionObserver';

export default function LandingPage() {
  useScrollAnimation();

  return (
    <main className="relative overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <WhatIsUnmapped />
      <HowItWorks />
      <Destinations />
      <FAQ />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
