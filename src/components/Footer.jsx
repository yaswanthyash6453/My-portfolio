import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 bg-white/5 dark:bg-slate-800 text-center text-sm text-gray-400">
      <div className="max-w-4xl mx-auto">
        <p>© {new Date().getFullYear()} Yashu.dev — Built with React & Tailwind</p>
        <p className="mt-2">Made by Yashu — open to opportunities • contact: <a href="mailto:ykaribugatha@gmail.com" className="underline">ykaribugatha@gmail.com</a></p>
      </div>
    </footer>
  );
}
