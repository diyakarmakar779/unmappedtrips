import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCard } from './BlogCard';

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

export const JournalPreview = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] text-black/30">
              Journal
            </span>

            <h2 className="mt-4 font-serif italic text-4xl md:text-6xl text-[#0a120a] leading-tight">
              Field notes from
              <br />
              the road.
            </h2>
          </div>

          <Link
            to="/journal"
            className="text-sm text-[#c5a383] hover:text-[#b28f70] transition-colors"
          >
            View all stories →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
