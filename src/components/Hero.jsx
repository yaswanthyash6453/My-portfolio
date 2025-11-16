import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 opacity-70"></div>

      {/* Floating Orbs */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse -top-10 -left-10"></div>
      <div className="absolute w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-ping top-20 right-0"></div>
      <div className="absolute w-52 h-52 bg-green-400/20 rounded-full blur-2xl animate-spin-slow bottom-10 left-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          data-aos="fade-down"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Yaswanth Karibugatha
          </span>
        </h1>

        <h2
          className="text-2xl md:text-3xl font-semibold text-blue-200"
          data-aos="fade-up"
        >
          <Typewriter
            options={{
              strings: [
                "AI/ML Engineer",
                "Full Stack Developer",
                "Flutter App Developer",
                "Python Developer",
                "NLP Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p
          className="mt-4 text-blue-100 max-w-2xl mx-auto text-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I build intelligent applications, AI models, and full-stack solutions
          using Python, Flutter, Flask, and modern web technologies.
        </p>

        {/* Buttons */}
        <div
          className="mt-8 flex gap-4 justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg font-semibold"
          >
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1C4JPkI2ANLnpX70Y9kzswYMW_gUu5PHJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow-lg"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
