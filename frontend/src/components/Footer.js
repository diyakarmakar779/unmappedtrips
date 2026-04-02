import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border"
      style={{ background: 'hsl(var(--forest-deep))' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span
                className="h-7 w-7 rounded-full border-2 border-accent flex items-center justify-center"
                style={{ background: 'hsl(var(--forest))' }}
              >
                <span className="text-primary-foreground font-serif text-sm font-semibold">
                  U
                </span>
              </span>
              <span className="font-serif text-xl font-semibold text-primary-foreground">
                Unmapped
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.55)' }}>
              Curated travel planning powered by AI and refined by human insight.
              Made for how India wants to travel.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/unmapped.travel_/' },
                // { icon: MessageCircle, label: 'WhatsApp', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:hello@unmappedtrips.in' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: 'hsl(var(--primary-foreground) / 0.08)',
                      color: 'hsl(var(--primary-foreground) / 0.55)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'hsl(var(--gold))'}
                    onMouseLeave={e => e.currentTarget.style.color = 'hsl(var(--primary-foreground) / 0.55)'}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-wider uppercase mb-5" style={{ color: 'hsl(var(--primary-foreground) / 0.35)' }}>
              Navigate
            </p>
            <ul className="space-y-3">
              {[
                { label: 'What you get', id: 'what-you-get' },
                { label: 'How it works', id: 'how-it-works' },
                { label: 'Destinations', id: 'destinations' },
                { label: 'Early access', id: 'early-access' },
                { label: 'FAQ', id: 'faq' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="font-sans text-sm transition-colors duration-150"
                    style={{ color: 'hsl(var(--primary-foreground) / 0.55)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'hsl(var(--primary-foreground) / 0.9)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'hsl(var(--primary-foreground) / 0.55)'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-semibold tracking-wider uppercase" style={{ color: 'hsl(var(--primary-foreground) / 0.35)' }}>
              Join early
            </p>
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.55)' }}>
              First 50 spots are open. Reserve yours before pricing goes live.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors duration-200"
              style={{ color: 'hsl(var(--gold))' }}
            >
              Reserve your spot
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: 'hsl(var(--primary-foreground) / 0.1)' }}
        >
          <p className="font-sans text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.3)' }}>
            © {year} Unmapped. All rights reserved.
          </p>
          <p className="font-sans text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.3)' }}>
            Made with care for Indian travelers
          </p>
        </div>
      </div>
    </footer>
  );
};
