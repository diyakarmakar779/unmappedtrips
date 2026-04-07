import { Button } from './ui/button';

import { ArrowDown } from 'lucide-react';

import { GOOGLE_FORM_URL } from '../constants';



export const Hero = () => {

  const scrollToNext = () => {

    document.getElementById('what-is-unmapped')?.scrollIntoView({ behavior: 'smooth' });

  };



  return (

    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#070a07]">

      

      {/* ── Background: High-Fidelity Rendering ── */}

      <div className="absolute inset-0 z-0">

        <img

          src="/hero-bg.png" 

          alt="Lush landscapes of Northeast India"

          className="w-full h-full object-cover"

          loading="eager"

          style={{ 

            // 1. Boost saturation and contrast to prevent 'dull' look

            filter: 'contrast(1.1) saturate(1.1) brightness(0.95)',

            // 2. Ensure crisp pixel rendering

            imageRendering: 'auto',

            transform: 'translateZ(0)' 

          }} 

        />

        

        {/* 3. REFINED OVERLAY: 

            Instead of a solid dark layer, we use a radial 'soft-light' 

            vignette. This leaves the center 40% of the image 

            completely clear so the greens pop.

        */}

        <div

          className="absolute inset-0 z-10"

          style={{ 

            background: `radial-gradient(circle at center, transparent 0%, rgba(7, 10, 7, 0.2) 40%, rgba(7, 10, 7, 0.85) 100%)` 

          }} 

        />

      </div>



      {/* ── Grain: Isolated so it doesn't blur the image ── */}

      <div className="absolute inset-0 z-20 opacity-[0.02] pointer-events-none mix-blend-overlay" />



      {/* ── Content ── */}

      <div className="relative z-30 flex flex-col items-center text-center max-w-5xl mx-auto px-6">

        

        {/* Minimal Badge */}

        <div className="mb-8 animate-fade-in">

          <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] font-medium text-white/80 backdrop-blur-md">

            Now Curating: Northeast India

          </span>

        </div>



        {/* The Mixed-Typography Header */}

       <h1 className="flex flex-col items-center gap-1 animate-fade-in-up">



          <span className="font-sans font-medium text-5xl md:text-7xl lg:text-[5.5rem] text-white tracking-tighter leading-none">



            Travel OS for



          </span>



          {/* Pulling the serif line up slightly for a tighter lockup */}



          <span className="font-serif italic font-light text-4xl md:text-6xl lg:text-[5rem] text-white/90 tracking-tight -mt-2">



            Thoughtful Journeys



          </span>



        </h1>


        <p className="mt-8 font-sans text-base md:text-lg text-white/70 max-w-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>

          Centralizing your logistics through concierge-led coordination.

          <span className="block mt-1 text-white/50">A system designed for depth, not just distance.</span>

        </p>



        {/* Refined White Button */}

        <div className="mt-10 flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>

         <Button
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="bg-white text-black hover:bg-[#f8f8f6] px-8 md:px-10 py-5 md:py-6 text-sm md:text-base font-semibold tracking-tight rounded-full transition-all active:scale-95 shadow-xl shadow-black/20"
          >
            Join waitlist
          </Button>


          <p className="font-sans text-xs md:text-sm text-white/40 tracking-tight">

            Join <span className="text-white/70 font-medium">1,400+ travelers</span> 

          </p>

        </div>

      </div>



      <button

        onClick={scrollToNext}

        className="absolute bottom-10 z-30 opacity-40 hover:opacity-100 transition-opacity">

        <ArrowDown size={20} className="text-white animate-bounce" />

      </button>

    </section>

  );

};
