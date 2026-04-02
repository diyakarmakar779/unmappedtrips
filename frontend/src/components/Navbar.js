import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 group"
          aria-label="Go to top"
        >
          <span
            className="h-7 w-7 rounded-full border-2 border-accent flex items-center justify-center"
            style={{ background: 'hsl(var(--forest))' }}
          >
            <span className="text-primary-foreground font-serif text-sm font-semibold leading-none">
              U
            </span>
          </span>
          <span
            className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-200 ${
              scrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            Unmapped
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'How it works', id: 'how-it-works' },
            { label: 'Destinations', id: 'destinations' },
            { label: 'Our approach', id: 'our-approach' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-sans text-sm font-medium transition-colors duration-200 hover:text-accent ${
                scrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="earthy"
            size="sm"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
            className="btn-pulse"
          >
            Reserve your spot
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden p-2 transition-colors duration-200 ${
            scrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-border shadow-hover animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
            {[
              { label: 'How it works', id: 'how-it-works' },
              { label: 'Destinations', id: 'destinations' },
              { label: 'Our approach', id: 'our-approach' },
              { label: 'Early access', id: 'early-access' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left font-sans text-base text-foreground font-medium hover:text-forest transition-colors duration-150"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="earthy"
              onClick={() => {
                window.open(GOOGLE_FORM_URL, '_blank');
                setMenuOpen(false);
              }}
              className="w-full mt-1"
            >
              Reserve your spot
            </Button>
            <p className="font-sans text-xs text-muted-foreground text-center -mt-1">
              You'll be redirected to a quick early-access form.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
