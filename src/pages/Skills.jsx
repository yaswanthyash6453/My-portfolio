import React, { useState } from "react";
import skillTabs from "../data/skills";

export default function Skills() {
  const categories = Object.keys(skillTabs);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section className="pt-28 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
      <h2
        className="text-4xl font-extrabold mb-12 text-center dark:text-white"
        data-aos="zoom-in"
      >
        Skills
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.map((cat, index) => (
          <div key={index} className="tab-wrapper">
            <button
              onClick={() => setActiveTab(cat)}
              className={`
                pb-1 transition-all font-semibold text-lg
                ${activeTab === cat
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-300"}
              `}
            >
              {cat}
            </button>

            {/* Animated Underline */}
            <div
              className="tab-underline"
              style={{
                width: activeTab === cat ? "100%" : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        className="grid md:grid-cols-2 gap-6"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {skillTabs[activeTab].map((skill, i) => (
          <div
            key={i}
            className="skill-card skill-box p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-4"
          >
            <span className="text-2xl">{skill.icon}</span>

            <p className="font-semibold text-lg dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
