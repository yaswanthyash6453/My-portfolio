import React from "react";
import Tilt from "react-parallax-tilt";
import profilePic from "../assets/profile.jpg";

export default function AboutSection() {
  return (
    <section className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto">

      <h2
        className="text-4xl font-extrabold text-center dark:text-white mb-12"
        data-aos="zoom-in"
      >
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* PROFILE + GLOW + PARTICLES */}
        <div className="flex justify-center relative" data-aos="fade-right">

          {/* 🔵 Glow Behind Profile (Neon Pulse) */}
          <div
            className="absolute inset-0 w-[360px] h-[360px] 
            bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
            blur-3xl rounded-3xl opacity-50 animate-glowPulse"
          ></div>

          {/* Floating particles */}
          <div className="absolute -top-10 -left-10 w-16 h-16 bg-blue-500/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-20 -right-10 w-12 h-12 bg-purple-500/30 rounded-full blur-xl animate-float-slow"></div>
          <div className="absolute bottom-10 left-16 w-10 h-10 bg-green-400/30 rounded-full blur-lg animate-float-fast"></div>

          {/* 3D Tilt Container */}
          <Tilt
            glareEnable={true}
            glareColor="#ffffff"
            glareMaxOpacity={0.3}
            glarePosition="all"
            scale={1.07}
            transitionSpeed={2000}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            className="rounded-3xl"
          >
            <div
              className="rounded-3xl shadow-2xl overflow-hidden border 
              border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800"
              style={{ width: "360px" }}
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-auto object-contain"
              />
            </div>
          </Tilt>
        </div>

        {/* TEXT SIDE */}
        <div data-aos="fade-left">
          <h3 className="text-3xl font-bold dark:text-white mb-4">
            I'm Yaswanth Karibugatha — AI/ML Engineer & Full Stack Developer
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I specialize in building modern AI-powered applications, mobile apps,
            and full-stack solutions. I love working on machine learning models,
            NLP systems, and real-time applications using Python, Flutter, Flask,
            and React.
          </p>

          {/* SKILL CHIPS */}
         {/* SKILL CHIPS WITH GLOW & MOTION */}
<div className="flex flex-wrap gap-3 mb-8">
  {[
    "AI & Machine Learning",
    "NLP",
    "Python",
    "React & Next.js",
    "Flutter Apps",
    "Full Stack Development",
    "MongoDB / SQL",
    "API Development",
  ].map((skill, index) => (
    <span
      key={index}
      className="
        px-4 py-2 text-sm rounded-full backdrop-blur-xl 
        bg-blue-500/20 dark:bg-blue-600/20 
        text-blue-700 dark:text-blue-300

        hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]
        hover:bg-blue-500/30 hover:dark:bg-blue-600/30

        transition-all duration-300 
        cursor-pointer inline-block

        skill-hover
      "
    >
      {skill}
    </span>
  ))}
</div>

        </div>

      </div>
    </section>
  );
}
