"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faLocation, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkpwrjw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <main>
      <h1 className="flex justify-center text-5xl md:text-6xl pt-10 pb-16 font-bold">
        İletişim
      </h1>

      <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16 px-4">
        {/* E-posta */}
        <a
          href="mailto:borakaanaras@gmail.com"
          className="flex items-center gap-4 group"
        >
          <div className="w-14 h-14 bg-black rounded-md flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
          </div>
          <span className="text-white text-lg group-hover:text-sky-400 transition-all">
            borakaanaras@gmail.com
          </span>
        </a>

        {/* github */}
        <a
          href="https://github.com/borakaanaras"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          <div className="w-14 h-14 bg-black rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all">
            <FontAwesomeIcon icon={faGithub} className="text-white text-xl" />
          </div>
          <span className="text-white text-lg group-hover:text-blue-400 transition-all">
          github.com/borakaanaras
          </span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/borakaanaras"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          <div className="w-14 h-14 bg-black rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
          </div>
          <span className="text-white text-lg group-hover:text-blue-400 transition-all">
            linkedin.com/in/borakaanaras
          </span>
        </a>

        {/* location */}
        
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          <div className="w-14 h-14 bg-black rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all">
            <FontAwesomeIcon icon={faLocationDot} className="text-white text-xl" />
          </div>
          <span className="text-white text-lg group-hover:text-green-800 transition-all">
          Izmir, Turkiye
          </span>
        </a>

      </div>

      {/* Formspree Form */}
      <div className="max-w-3xl mx-auto px-4 pb-10">
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-800 text-white rounded-lg text-center">
            <p className="font-semibold">✓ Mesajınız başarıyla gönderildi!</p>
            <p className="text-sm mt-1">En kısa sürede size dönüş yapacağım.</p>
          </div>
        )}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-800 text-white rounded-lg text-center">
            <p className="font-semibold">✗ Bir hata oluştu. Lütfen tekrar deneyin.</p>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 pb-10"
        >
          {/* Ad ve E-posta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-white mb-2">Adınız</span>
              <input
                type="text"
                placeholder="Burhan Altıntop"
                name="Ad"
                required
                className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 border-0"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white mb-2">E-posta Adresiniz</span>
              <input
                type="email"
                name="_replyto"
                placeholder="yakisikli_serdar@ornek.com"
                required
                className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 border-0"
              />
            </label>
          </div>

          {/* Konu */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Konu</span>
            <input
              type="text"
              placeholder="örn. evlilik teklifi"
              name="Konu"
              required
              className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 border-0"
            />
          </label>

          {/* Mesaj */}
          <label className="flex flex-col">
            <span className="text-white mb-2">Mesajınız</span>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Mesajınızı buraya yazın..."
              className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 border-0 resize-none"
            ></textarea>
          </label>

          {/* Gönder Butonu */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors shadow-lg"
            >
              {status === "submitting" ? "Gönderiliyor..." : "Mesaj Gönder"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
