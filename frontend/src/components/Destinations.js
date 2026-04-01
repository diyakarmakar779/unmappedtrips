import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/unmapped-early-access';

const destinations = [
  {
    name: 'Meghalaya',
    tag: 'Northeast India',
    desc: "Living root bridges, valley waterfalls, and the world's wettest place. A destination unlike any other in India.",
    image: 'https://images.pexels.com/photos/19469039/pexels-photo-19469039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    highlights: ['Cherrapunji', 'Dawki River', 'Mawlynnong'],
    status: 'available',
  },
  {
    name: 'Sikkim',
    tag: 'Eastern Himalayas',
    desc: 'Monasteries perched on misty hills, alpine lakes, and the shadow of Kangchenjunga.',
    image: 'https://images.pexels.com/photos/32010298/pexels-photo-32010298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    highlights: ['Gangtok', 'Tsomgo Lake', 'Pelling'],
    status: 'available',
  },
  {
    name: 'Coming Soon',
    tag: 'More destinations',
    desc: 'Spiti Valley, Coorg, Hampi, Kutch, and many more being added. Join early to shape what we build next.',
    image: 'https://images.unsplash.com/photo-1752318080519-442bf251f28f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    highlights: ['Spiti Valley', 'Coorg', 'Hampi'],
    status: 'soon',
  },
];

export const Destinations = () => {
  return (
    <section
      id="destinations"
      className="section-pad"
      style={{ background: 'var(--gradient-sand)' }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="fade-up">
            <span className="tracking-editorial text-muted-foreground">
              Early destinations
            </span>
            <div className="gold-divider mt-3 mb-5" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
              Where we'll take
              <br />
              <em>you first.</em>
            </h2>
          </div>
          <p className="fade-up font-sans text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right">
            We're starting with Northeast India — raw, beautiful, and criminally underplanned.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`fade-up card-hover rounded-xl overflow-hidden bg-card shadow-card border border-border flex flex-col ${
                dest.status === 'soon' ? 'opacity-75' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="img-zoom-wrap h-52 md:h-60 relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                {dest.status === 'soon' && (
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                    <span className="font-sans text-xs tracking-widest uppercase text-primary-foreground/90 bg-foreground/60 px-3 py-1.5 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-foreground">
                      {dest.name}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin size={10} /> {dest.tag}
                    </p>
                  </div>
                  {dest.status === 'available' && (
                    <span className="flex items-center gap-1 bg-olive/10 text-olive border border-olive/20 text-xs px-2.5 py-1 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                      Live
                    </span>
                  )}
                </div>

                <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                  {dest.desc}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {dest.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="font-sans text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 fade-up">
          <Button
            variant="earthy"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Reserve your spot
          </Button>
          <p className="font-sans text-xs text-muted-foreground">
            Takes 30 seconds. We'll reach out on WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};
