import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Internships from "./pages/Internships";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AIWriter from "./pages/AIWriter";

import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/ai-writer" element={<AIWriter />} />

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
