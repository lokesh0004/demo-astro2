import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-maroon-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold-400">
            WHAT CLIENTS SAY
          </p>
          <h2 className="mt-4 font-heading text-3xl text-cream sm:text-4xl">
            Stories From Our Clients
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-gold-400/20 bg-maroon-900/60 p-7"
            >
              <Quote className="text-gold-400/60" size={22} />
              <p className="mt-4 text-sm leading-relaxed text-cream/90">{t.quote}</p>
              <p className="mt-5 font-heading text-cream">{t.name}</p>
              <p className="text-xs text-cream/60">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
