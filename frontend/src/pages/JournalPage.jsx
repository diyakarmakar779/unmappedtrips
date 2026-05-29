import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const posts = [
  {
    slug: 'meghalaya-monsoon-route',
    title: 'Unmapped // Meghalaya Monsoon Route',
    location: 'Northeast India',
    excerpt:
      'Clouds drifting through winding roads, hidden waterfalls, and slower journeys across the Khasi hills.',
    image: '/img/meghalaya.jpg',
  },

  {
    slug: 'sikkim-slow-route',
    title: 'Unmapped // Sikkim Slow Route',
    location: 'Eastern Himalayas',
    excerpt:
      'Mountain roads, monastery towns, and journeys designed around depth instead of speed.',
    image: '/img/sikkim.jpg',
  },

  {
    slug: 'hampi-weekend',
    title: 'Unmapped // Hampi Weekend',
    location: 'Karnataka',
    excerpt:
      'Ancient ruins, soft mornings, and landscapes that still carry echoes of another time.',
    image: '/img/hampi.jpg',
  },

  {
    slug: 'kannur-escape',
    title: 'Unmapped // Kannur Escape',
    location: 'Kerala Coast',
    excerpt:
      'Quiet beaches, coastal roads, and a slower version of Kerala away from tourist crowds.',
    image: '/img/kannur.jpg',
  },
];

export default function JournalPage() {
  return (
    <main className="bg-[#f2f2f0] min-h-screen">
      <Navbar />

      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="max-w-3xl mb-20">
            <span className="text-[11px] uppercase tracking-[0.4em] text-black/30">
              Journal
            </span>

            <h1 className="mt-4 font-serif italic text-5xl md:text-7xl text-[#0a120a] leading-none">
              Stories, routes,
              <br />
              and thoughtful journeys.
            </h1>

            <p className="mt-8 text-black/50 text-lg leading-relaxed max-w-xl">
              Field notes from places we believe should be experienced slower.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
