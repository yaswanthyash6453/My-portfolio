import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl shadow p-4 flex flex-col">
        <article data-aos="fade-up" className="..."> ... </article>

      <img src={project.image} alt={project.title} className="rounded-md mb-4 object-cover h-40 w-full" />
      <h3 className="text-xl font-semibold dark:text-white">{project.title}</h3>
      <p className="text-sm text-gray-600 dark:text-slate-300 mt-2">{project.description}</p>
      <ul className="list-disc ml-5 mt-3 text-sm text-gray-700 dark:text-slate-300">
        {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div className="mt-auto flex gap-3 items-center pt-4">
        <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-500">Code</a>
        <a href={project.demo} target="_blank" rel="noreferrer" className="text-green-500">Live</a>
      </div>
    </article>
  );
}
