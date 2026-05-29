import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ post }) => {
  return (
    <Link
      to={`/journal/${post.slug}`}
      className="group block"
    >
      <article className="border-b border-black/10 py-10 transition-all duration-300 hover:translate-x-2">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.35em] text-black/30 mb-4">
              {post.location}
            </p>

            <h3 className="font-serif italic text-3xl md:text-5xl text-[#0a120a] leading-tight group-hover:opacity-70 transition-opacity">
              {post.title}
            </h3>

            <p className="mt-6 text-black/50 leading-relaxed text-sm md:text-base max-w-xl">
              {post.excerpt}
            </p>
          </div>

          <div className="text-sm text-[#c5a383] whitespace-nowrap pt-2">
            Read →
          </div>
        </div>
      </article>
    </Link>
  );
};
