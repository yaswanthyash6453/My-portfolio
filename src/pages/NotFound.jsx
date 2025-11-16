import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold dark:text-white">404</h1>
        <p className="mt-4 text-lg">Page not found</p>
        <Link to="/" className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded">Go Home</Link>
      </div>
    </section>
  );
}
