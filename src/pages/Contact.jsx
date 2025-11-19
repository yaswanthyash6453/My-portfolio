import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i27gu7c",
        "template_mm5eq5p",
        formRef.current,
        "wFQWUmuhogQut3H_1"
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();

          setTimeout(() => setSent(false), 4000);
        },
        () => {
          alert("❌ Failed to send message");
          setLoading(false);
        }
      );
  };

  return (
    <section className="pt-28 pb-20 px-6 md:px-20 max-w-7xl mx-auto relative">

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919553727352"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition z-50 animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Title */}
      <h2
        data-aos="zoom-in"
        className="text-4xl font-extrabold text-center dark:text-white mb-12"
      >
        Contact Me
      </h2>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-8" data-aos="fade-right">

          {/* CONTACT INFO CARD */}
          <div className="glass-card p-8 rounded-2xl shadow-xl border dark:border-gray-700 hover:scale-[1.02] transition">
            <h3 className="text-2xl font-bold dark:text-white mb-6">
              Let's Connect
            </h3>

            <div className="space-y-5 dark:text-white text-gray-700">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <p className="font-medium text-lg">
                  ykaribugatha@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-600 text-xl" />
                <p className="font-medium text-lg">+91 9553727352</p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <p className="font-medium text-lg">Andhra Pradesh, India</p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/yaswanthyash6453"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaGithub className="text-2xl dark:text-white text-gray-700" />
              </a>

              <a
                href="https://www.linkedin.com/in/yaswanthkaribugatha/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
              </a>

              <a
                href="https://www.instagram.com/_yaswanthyashu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaInstagram className="text-2xl text-pink-500" />
              </a>
            </div>
          </div>

          {/* MAP CARD */}
          <div
            className="glass-card p-6 rounded-2xl shadow-xl border dark:border-gray-700 hover:scale-[1.01] transition"
            data-aos="fade-up"
          >
           <iframe
  title="location-map"
  className="rounded-xl w-full h-64"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0204515930157!2d83.31200157494022!3d17.738273583991625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a394338ca5c8cf5%3A0x17630e261894d9de!2sAyyappa%20Swamy%20Temple%20Back%20Side!5e0!3m2!1sen!2sin!4v1739638679311!5m2!1sen!2sin"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


          </div>

        </div> {/* LEFT SIDE CLOSED */}

        {/* RIGHT SIDE — FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          data-aos="fade-left"
          className="glass-card p-8 rounded-2xl shadow-xl border dark:border-gray-700 space-y-6 hover:scale-[1.01] transition"
        >
          <h3 className="text-2xl font-bold dark:text-white mb-4">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 dark:text-white outline-none border dark:border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 dark:text-white outline-none border dark:border-gray-700"
          />

          <textarea
            name="message"
            placeholder="Message..."
            rows="5"
            required
            className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-900 dark:text-white outline-none border dark:border-gray-700"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {sent && (
            <p className="text-green-500 text-center mt-3 font-medium animate-pulse">
              Message sent successfully! ✔
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
