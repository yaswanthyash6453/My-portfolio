import React from "react";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
    >
      {/* simple icon that changes */}
      <span className="sr-only">Toggle theme</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
