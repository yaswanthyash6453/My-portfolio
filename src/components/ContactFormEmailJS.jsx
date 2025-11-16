import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactFormEmailJS() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i27gu7c",
        "template_mm5eq5p",
        form.current,
        "wFQWUmuhogQut3H_1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
      
      <input
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white"
      />

      <input
        name="user_email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="6"
        required
        className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-black dark:text-white"
      />

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>

      {sent && (
        <p className="text-green-500 text-center font-semibold">
          Message sent — thank you!
        </p>
      )}
    </form>
  );
}
