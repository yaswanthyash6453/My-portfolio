import React, { useEffect, useState } from "react";

export default function Preloader({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900); // adjust
    return () => clearTimeout(t);
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p className="text-lg font-semibold">YASWANTH</p>
        </div>
      </div>
    );
  }
  return children;
}
