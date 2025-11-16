import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function AIWriter() {
  const [topic, setTopic] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI("AIzaSyCTeRz7mzmmICsfEHaMF7vFgi7QJZh838M"); // ← YOUR GEMINI KEY

  async function generateBlog() {
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `Write a detailed blog post about: ${topic}.
      Include:
      - Introduction
      - Key Concepts
      - Step-by-step explanation
      - Real examples
      - Conclusion
      - Use clear headings
      - Developer friendly writing`;

      const result = await model.generateContent(prompt);
      const text = await result.response.text();

      setGenerated(text);
    } catch (err) {
      setGenerated("❌ Error generating blog. Check API key.");
    }

    setLoading(false);
  }

  return (
    <section className="pt-28 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">
        ✨ AI Blog Writer
      </h2>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border dark:border-gray-700">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-xl border dark:border-gray-700 
                     bg-gray-100 dark:bg-slate-900 dark:text-white mb-4"
          placeholder="Enter your blog topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          onClick={generateBlog}
          className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          {loading ? "⏳ Generating..." : "🚀 Generate Blog"}
        </button>
      </div>

      {generated && (
        <div className="mt-10 p-6 bg-white dark:bg-slate-800 shadow-xl rounded-2xl dark:text-white">
          <h3 className="text-2xl font-semibold mb-4">Generated Blog:</h3>
          <pre className="whitespace-pre-wrap leading-loose">
            {generated}
          </pre>
        </div>
      )}
    </section>
  );
}
