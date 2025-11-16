import React from "react";

export default function Internships() {
  const data = [
    {
      role: "Artificial Intelligence Intern",
      company: "AIMERS Society",
      duration: "2024",
      desc: "Worked on Transformer models and AI-powered automations.",
    },
    {
      role: "Python Programming",
      company: "EdX",
      duration: "2023",
      desc: "Learned Python basics, DS, OOPs, debugging & problem-solving.",
    },
    {
      role: "Web Development",
      company: "Udemy",
      duration: "2023",
      desc: "Mastered HTML, CSS, JS fundamentals and modern UI.",
    },
    {
      role: "Machine Learning Bootcamp",
      company: "iNeuron.ai",
      duration: "2023",
      desc: "Trained ML models, data preprocessing, accuracy improvements.",
    },
    {
      role: "Data Science",
      company: "SkillDzir",
      duration: "2022",
      desc: "Worked on statistics, data visualization & DS concepts.",
    },
    {
      role: "Skill Development",
      company: "Skill Development Institute",
      duration: "2021",
      desc: "Excel tools, analytics, and professional communication.",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 md:px-16 max-w-6xl mx-auto">
      <h2
        className="text-4xl font-extrabold text-center dark:text-white mb-12"
        data-aos="zoom-in"
      >
        Internships
      </h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="intern-card p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 inline-block max-w-md">
              <h3 className="text-xl font-bold dark:text-white">{item.role}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold">{item.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{item.duration}</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
