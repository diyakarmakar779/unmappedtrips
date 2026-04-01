import { useEffect, useRef } from 'react';

/**
 * Adds 'visible' class to elements with .fade-up / .fade-in / .fade-left / .fade-right
 * when they enter the viewport.
 */
export const useScrollAnimation = () => {
  useEffect(() => {
    const els = document.querySelectorAll(
      '.fade-up, .fade-in, .fade-left, .fade-right'
    );

    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            // slight stagger when multiple siblings fire together
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
};

export const useRef_ = useRef;
