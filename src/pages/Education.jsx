import React from "react";

export default function Education() {
  const data = [
    {
      degree: "B.Tech – Artificial Intelligence & Data Science",
      school: "Miracle Educational Society Group of Institutions",
      duration: "2022 – 2025",
      place: "Bhogapuram, India",
      desc: "Focused on AI, ML, NLP, and full-stack development with real-world projects.",
    },
    {
      degree: "Diploma – Metallurgical Engineering",
      school: "MRAGR Govt Polytechnic College",
      duration: "2018 – 2022",
      place: "Vizianagaram, India",
      desc: "Learned material science, engineering fundamentals, and industrial applications.",
    },
    {
      degree: "SSC (10th Standard)",
      school: "NMC High School",
      duration: "2017 – 2018",
      place: "Visakhapatnam, India",
      desc: "Completed high school with strong focus on academics & discipline.",
    },
  ];

  return (
    <section className="pt-28 pb-20 px-6 md:px-16 max-w-6xl mx-auto">

      <h2
        className="text-4xl font-extrabold text-center dark:text-white mb-12"
        data-aos="zoom-in"
      >
        Education
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
              
              <h3 className="text-xl font-bold dark:text-white">{item.degree}</h3>

              <p className="text-blue-600 dark:text-blue-400 font-semibold">
                {item.school}
              </p>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.duration} | {item.place}
              </p>

              <p className="mt-3 text-gray-700 dark:text-gray-300">
                {item.desc}
              </p>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
