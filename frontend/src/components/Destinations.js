import { Button } from './ui/button';
import { MapPin, Compass } from 'lucide-react';
import { GOOGLE_FORM_URL, CTA_MICROCOPY } from '../constants';

const destinations = [
  {
    name: 'Meghalaya',
    tag: 'Northeast India',
    desc: "Living root bridges, turquoise rivers, and the world's wettest village. Trusted local access.",
    image: 'https://images.pexels.com/photos/19469039/pexels-photo-19469039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    concepts: ['Scenic slow trips', 'Cultural deep dives', 'Hidden waterfall routes'],
    status: 'available',
  },
  {
    name: 'Sikkim',
    tag: 'Eastern Himalayas',
    desc: 'Ancient monasteries, alpine lakes, and the quiet shadow of Kangchenjunga. Built for the thoughtful traveler.',
    image: 'https://images.pexels.com/photos/32010298/pexels-photo-32010298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    concepts: ['Mountain monastery trails', 'Hidden-route concepts', 'Cultural deep dives'],
    status: 'available',
  },
  {
    name: 'More coming',
    tag: 'Expanding soon',
    desc: 'Spiti Valley, Coorg, Hampi, Kutch and more are in the pipeline. Early users help us decide what comes next.',
    image: 'https://images.unsplash.com/photo-1752318080519-442bf251f28f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    concepts: ['Spiti Valley', 'Coorg', 'Hampi'],
    status: 'soon',
  },
];

export const Destinations = () => {
  return (
    <section
      id="destinations"
      className="section-pad bg-background grain-overlay"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="fade-up">
            <span className="tracking-editorial text-muted-foreground">
              Where we start
            </span>
            <div className="gold-divider mt-3 mb-5" />
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground leading-snug">
              Northeast India,
              <br />
              <em>done right.</em>
            </h2>
          </div>
          <p className="fade-up font-sans text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right">
            We are starting with the destinations we know best, where our
            curation is deepest and our local access is trusted.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className={`fade-up card-hover rounded-xl overflow-hidden bg-card shadow-card border border-border flex flex-col ${
                dest.status === 'soon' ? 'opacity-70' : ''
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
                  <div className="absolute inset-0 bg-foreground/35 flex items-center justify-center">
                    <span className="font-sans text-xs tracking-widest uppercase text-primary-foreground/90 bg-foreground/60 px-3 py-1.5 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
                {dest.status === 'available' && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1.5 bg-primary-foreground/90 backdrop-blur-sm text-forest border border-forest/20 text-xs px-2.5 py-1 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                      Now open
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {dest.name}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <MapPin size={10} /> {dest.tag}
                  </p>
                </div>

                <p className="font-sans text-sm text-muted-foreground leading-relaxed flex-1">
                  {dest.desc}
                </p>

                {/* Concept tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {dest.concepts.map((c, j) => (
                    <span
                      key={j}
                      className="font-sans text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full flex items-center gap-1"
                    >
                      <Compass size={9} className="text-forest" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 fade-up">
          <Button
            variant="earthy"
            size="lg"
            onClick={() => window.open(GOOGLE_FORM_URL, '_blank')}
          >
            Reserve your spot
          </Button>
          <p className="font-sans text-xs text-muted-foreground">
            {CTA_MICROCOPY}
          </p>
        </div>
      </div>
    </section>
  );
};
