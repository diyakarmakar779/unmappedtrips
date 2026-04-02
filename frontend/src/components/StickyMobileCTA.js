import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        background: 'hsl(var(--forest-deep))',
        borderTop: '1px solid hsl(var(--primary-foreground) / 0.1)',
      }}
    >
      <div className="px-5 py-4 flex flex-col gap-1.5">
        <Button
          variant="gold"
          className="w-full btn-pulse"
          onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
        >
          Reserve your spot
        </Button>
        <p className="font-sans text-xs text-center" style={{ color: 'hsl(var(--primary-foreground) / 0.4)' }}>
          {CTA_MICROCOPY}
        </p>
      </div>
    </div>
  );
};
