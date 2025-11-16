import React from "react";
import projects from "../data/projects";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section className="pt-28 pb-20 px-6 md:px-14 max-w-7xl mx-auto">
      <h2
        className="text-4xl font-extrabold text-center dark:text-white mb-12"
        data-aos="zoom-in"
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card p-6 rounded-xl border border-gray-200 dark:border-gray-700"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            <h3 className="text-xl font-bold dark:text-white mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mt-3 hover:underline"
            >
              <FiGithub size={20} /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
