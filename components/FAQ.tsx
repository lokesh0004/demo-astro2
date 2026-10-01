"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-saffron-100/40 py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="divider-om text-xs font-semibold tracking-[0.3em] text-saffron-600">
            FAQ
          </p>
          <h2 className="mt-4 font-heading text-3xl text-maroon-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-gold-600/20 border-y border-gold-600/20">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-heading text-base text-maroon-900">{f.q}</span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-saffron-600 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 pr-10 text-sm leading-relaxed text-muted">{f.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
