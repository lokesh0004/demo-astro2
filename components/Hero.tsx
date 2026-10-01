"use client";

import { useEffect, useState } from "react";
import { Phone, Star } from "lucide-react";

const slides = [
  {
    eyebrow: "Trusted Vedic Astrologer",
    title: "Guidance Rooted In Tradition, Trusted By Thousands",
    text: "Get clear, honest astrological guidance for career, marriage, health and family — from a trusted name in Delhi NCR.",
  },
  {
    eyebrow: "15+ Years Of Experience",
    title: "Find Answers To Life's Biggest Questions",
    text: "From kundli matching to career direction, receive practical remedies rooted in authentic Vedic astrology.",
  },
  {
    eyebrow: "5,000+ Happy Clients",
    title: "Your Journey Towards Clarity Starts Here",
    text: "Book a consultation today and take the first step towards a well-guided future.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const s = slides[index];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#fdf8ef_0%,#fde9d7_55%,#fdf8ef_100%)] py-14 sm:py-20"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-saffron-100" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-saffron-100/70" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div key={index} className="max-w-2xl" style={{ animation: "fadeslide 0.6s ease" }}>
          <p className="inline-block rounded-full bg-maroon-700 px-4 py-1.5 text-xs font-semibold tracking-wide text-cream">
            {s.eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-4xl leading-tight text-maroon-900 sm:text-5xl">
            {s.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">{s.text}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-gradient-to-r from-saffron-600 to-saffron-500 px-7 py-3.5 text-sm font-semibold text-paper shadow-lg transition-transform hover:scale-[1.03]"
            >
              Book Your Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 rounded-md border-2 border-maroon-700 px-7 py-3.5 text-sm font-semibold text-maroon-700 transition-colors hover:bg-maroon-700 hover:text-cream"
            >
              <Phone size={16} /> Call Now
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-gold-600">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-1 text-sm text-muted">4.9/5 from 2,000+ clients</span>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-7 bg-saffron-600" : "w-1.5 bg-maroon-700/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
