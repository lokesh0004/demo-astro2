import { PlayCircle } from "lucide-react";
import { videoTopics } from "@/lib/data";

export default function VideoSection() {
  return (
    <section id="astrology" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="divider-om text-xs font-semibold tracking-[0.3em] text-saffron-600">
            WATCH & LEARN
          </p>
          <h2 className="mt-4 font-heading text-3xl text-maroon-900 sm:text-4xl">
            Astrology Insights, Explained Simply
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoTopics.map((topic) => (
            <div
              key={topic}
              className="group card-shadow overflow-hidden rounded-xl border border-gold-600/15 bg-cream"
            >
              <div className="relative flex aspect-video items-center justify-center bg-[linear-gradient(135deg,#7a1f2b_0%,#4a0f18_100%)]">
                <PlayCircle
                  size={44}
                  className="text-cream/90 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-base text-maroon-900">{topic}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
