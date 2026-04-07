import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL } from '../constants';

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Shows after scrolling 600px
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 pb-8 pt-4 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Glassmorphism Container */}
      <div className="bg-[#0a120a]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col gap-3">
          <Button
            className="w-full bg-white text-black hover:bg-white/90 py-6 rounded-xl font-bold text-sm uppercase tracking-widest transition-transform active:scale-95"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Join Waitlist
          </Button>
          
          <p className="font-sans text-[10px] text-center text-white/30 uppercase tracking-[0.2em]">
            Priority Access for Early Members
          </p>
        </div>
      </div>
    </div>
  );
};
