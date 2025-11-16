import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { timeAgo } from "../utils/dateHelper";

export default function BlogCard({ post }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block border border-gray-300 dark:border-gray-700 
        rounded-xl p-5 md:p-6 mb-4 blog-item
        hover:border-blue-500 dark:hover:border-blue-400
        hover:bg-blue-50/40 dark:hover:bg-slate-800/40
        transition-all
      "
    >
      <div className="flex flex-wrap gap-2 mb-3">
  {post.categories.map((cat, i) => (
    <span
      key={i}
      className="text-xs px-3 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-600/10 
                 text-blue-700 dark:text-blue-300 border border-blue-300/30"
    >
      {cat}
    </span>
  ))}
</div>


      {/* Title */}
      <h3 className="text-xl font-semibold dark:text-white mb-1 hover:underline">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
        {post.excerpt}
      </p>

      {/* Updated Days Ago */}
      <p className="text-xs mb-2 text-gray-500 dark:text-gray-400">
        {timeAgo(post.date)}
      </p>

      {/* Read More */}
      <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm">
        Read <FiArrowUpRight size={16} />
      </div>
    </a>
  );
}
