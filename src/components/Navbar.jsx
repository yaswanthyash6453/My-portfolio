import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    "font-medium text-sm md:text-base " + (isActive ? "text-blue-400" : "text-white/90");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/20 to-transparent backdrop-blur px-6 md:px-12 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-white">Yaswanth Karibugatha</Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/internships" className={linkClass}>Internships</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>


          <ThemeToggle />
        </nav>

        {/* Mobile menu (simple) */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <details className="text-white">
            <summary className="cursor-pointer">Menu</summary>
            <div className="mt-2 flex flex-col bg-white/5 p-3 rounded shadow-lg">
                         <Link to="/">Home</Link>
                         <Link to="/about">About</Link>
                         <Link to="/education">Education</Link>
                         <Link to="/skills">Skills</Link>
                         <Link to="/projects">Projects</Link>
                         <Link to="/internships">Internships</Link>
                         <Link to="/contact">Contact</Link>
                         
                         <Link to="/blog" className="hover:text-blue-500">Blog</Link>

            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
