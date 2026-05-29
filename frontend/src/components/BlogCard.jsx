import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ post }) => {
  return (
    <Link
      to={`/journal/${post.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-[2rem] bg-white border border-black/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="relative overflow-hidden h-[420px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-0 p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3">
              {post.location}
            </p>

            <h3 className="font-serif italic text-3xl text-white leading-tight">
              {post.title}
            </h3>
          </div>
        </div>

        <div className="p-8">
          <p className="text-sm text-black/50 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 text-sm text-[#c5a383] tracking-wide">
            Read Journal →
          </div>
        </div>
      </article>
    </Link>
  );
};
