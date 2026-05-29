import React from 'react';
import { useParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const posts = {
  'hampi-weekend': {
    title: 'Unmapped // Hampi Weekend',
    image: '/img/hampi.jpg',
    content:
      'If ruins could speak, Hampi would probably whisper. The kind of place where mornings arrive softly and evenings stretch longer than expected...',
  },

  'meghalaya-monsoon-route': {
    title: 'Unmapped // Meghalaya Monsoon Route',
    image: '/img/meghalaya.jpg',
    content:
      'The roads disappear into clouds here. Waterfalls emerge unexpectedly. Villages move slower. Meghalaya feels less like a destination and more like weather you travel through...',
  },

  'sikkim-slow-route': {
    title: 'Unmapped // Sikkim Slow Route',
    image: '/img/sikkim.jpg',
    content:
      'Sikkim is best experienced unhurried. Tea stalls beside mountain roads, monastery chants drifting through fog, and journeys where the route matters more than arrival...',
  },

  'kannur-escape': {
    title: 'Unmapped // Kannur Escape',
    image: '/img/kannur.jpg',
    content:
      'Kannur moves differently. Empty beaches, local cafés, Theyyam stories, and coastal roads untouched by rush tourism...',
  },
};

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = posts[slug];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="bg-[#f8f8f5] min-h-screen">
      <Navbar />

      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[500px] object-cover rounded-[2rem]"
          />

          <h1 className="mt-12 font-serif italic text-5xl md:text-7xl leading-tight text-[#0a120a]">
            {post.title}
          </h1>

          <div className="mt-12 text-lg text-black/60 leading-relaxed space-y-8">
            <p>{post.content}</p>

            <p>
              Unmapped is building thoughtful journeys across India —
              slower, deeper, and designed around experience instead of checklists.
            </p>
          </div>

          <a
            href="https://wa.me/918147922283"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-16 px-8 py-4 rounded-full bg-[#0a120a] text-white text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Plan a similar journey →
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
