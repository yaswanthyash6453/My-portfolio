import React, { useState } from "react";
import blogPosts from "../data/blogs";
import BlogCard from "../components/BlogCard";

// ⭐ CATEGORY FORMATTER (Fix AI&ML, DataSci, FullStack → Clean Text)
function formatCategory(cat) {
  return cat
    .replace(/&/g, " & ")
    .replace(/[_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase()
    .replace("datasince", "data science")
    .replace("datascient", "data science")
    .replace("datasinsti", "data science")
    .replace("data sinstit", "data science")
    .replace("ml dl", "machine learning")
    .replace("ai ds", "ai & data science")
    .replace("fullstack", "full stack")
    .replace("fs", "full stack")
    .replace("dev", "development")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogPosts.flatMap((post) => post.categories)),
  ];

  // ⭐ COUNT CATEGORY USE
  const categoryCount = {};
  blogPosts.forEach((post) => {
    post.categories.forEach((cat) => {
      const clean = formatCategory(cat);
      categoryCount[clean] = (categoryCount[clean] || 0) + 1;
    });
  });

  // ⭐ TRENDING (Clean + Sorted)
  const trending = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map((item) => item[0]);

  // ⭐ FILTER POSTS
  const filteredPosts = blogPosts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "All"
        ? true
        : post.categories
            .map((c) => formatCategory(c))
            .includes(formatCategory(category));

    return matchSearch && matchCategory;
  });

  return (
    <section className="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

      {/* TITLE */}
      <h2
        className="text-4xl font-extrabold text-center dark:text-white mb-10"
        data-aos="fade-down"
      >
        Blog
      </h2>

      {/* SEARCH BAR */}
      <div className="max-w-2xl mx-auto mb-6" data-aos="fade-up">
        <input
          type="text"
          placeholder="Search tutorials, blogs, roadmaps..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-slate-800 dark:text-white outline-none shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CATEGORY FILTER WITH ANIMATION */}
      <div
        className="flex flex-wrap gap-3 justify-center mb-10"
        data-aos="fade-up"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300
              ${
                category === cat
                  ? "bg-blue-600 text-white scale-110 shadow-lg"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
              }
            `}
          >
            {formatCategory(cat)}
          </button>
        ))}
      </div>

      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-10">

        {/* BLOG LIST */}
        <div data-aos="fade-up">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* ⭐ TRENDING SIDEBAR — CLICKABLE */}
        <div
          className="hidden md:block sticky top-24"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <h3 className="text-xl font-bold mb-4 dark:text-white flex items-center gap-2">
            🔥 <span className="bg-blue-600 text-white px-3 py-1 rounded-md">
              Trending
            </span>
          </h3>

          <div className="space-y-4">
            {trending.map((topic, index) => (
              <button
                key={index}
                onClick={() => setCategory(topic)}
                className={`
                  w-full text-left p-4 rounded-xl transition-all duration-300
                  border border-gray-300 dark:border-gray-700 
                  hover:bg-blue-50/30 hover:border-blue-500 
                  dark:hover:bg-slate-800/50 shadow-sm
                  ${
                    category === topic
                      ? "bg-blue-600 text-white scale-[1.03] shadow-lg"
                      : "dark:text-gray-300 text-gray-700"
                  }
                `}
              >
                <h4 className="font-semibold text-sm mb-1">{topic}</h4>
                <p className="text-xs opacity-80">Popular Topic • Highly Viewed</p>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
