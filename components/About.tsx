"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { states, enquiryTypes } from "@/lib/data";

export default function About() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", state: "", enquiry: "" });

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[0-9+\-\s]{7,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.state) next.state = "Please select your state.";
    if (!form.enquiry) next.enquiry = "Please select an enquiry type.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
  };

  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-10">
        {/* About */}
        <div>
          <p className="divider-om text-xs font-semibold tracking-[0.3em] text-saffron-600">
            WHY ONLY US
          </p>
          <h2 className="mt-4 text-center font-heading text-3xl text-maroon-900 sm:text-4xl lg:text-left">
            15 Years Of Guiding People Towards Clarity
          </h2>
          <p className="mt-6 text-center leading-relaxed text-muted lg:text-left">
            Astrologer Devika Anand needs no introduction in the field of
            Vedic Astrology, Numerology and Vastu Shastra. She is not only an
            astrologer but also a well-known Vastu advisor, guiding thousands
            of families and professionals towards better decisions.
          </p>
          <p className="mt-4 text-center leading-relaxed text-muted lg:text-left">
            Born with a deep interest in astrology since childhood, she began
            her formal studies during her school years, later training under
            respected Vedic scholars. Her mission — helping people achieve
            their ambitions through honest, practical guidance.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "15+ Years of Experience",
              "5,000+ Consultations",
              "Vedic Astrology Specialist",
              "Personalized Remedies",
            ].map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-sm text-ink/90">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                  <Check size={12} strokeWidth={3} />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Callback form */}
        <div id="contact" className="card-shadow rounded-2xl border border-gold-600/20 bg-cream p-7">
          {status === "success" ? (
            <div className="flex flex-col items-center py-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
                <Check size={22} />
              </span>
              <h3 className="mt-4 font-heading text-xl text-maroon-900">Request Received</h3>
              <p className="mt-2 text-sm text-muted">
                We&apos;ll call you back shortly to confirm your consultation.
              </p>
              <button
                onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", state: "", enquiry: "" }); }}
                className="mt-6 rounded-md border border-maroon-700 px-5 py-2 text-sm text-maroon-700"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-heading text-xl text-maroon-900">Request Call Back</h3>
              <p className="mt-1 text-sm text-muted">We&apos;ll get in touch within 24 hours.</p>

              <form onSubmit={submit} noValidate className="mt-6 space-y-4">
                <div>
                  <input
                    className="w-full rounded-md border border-gold-600/30 bg-paper px-4 py-2.5 text-sm outline-none focus:border-saffron-600"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <input
                    className="w-full rounded-md border border-gold-600/30 bg-paper px-4 py-2.5 text-sm outline-none focus:border-saffron-600"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    className="w-full rounded-md border border-gold-600/30 bg-paper px-4 py-2.5 text-sm outline-none focus:border-saffron-600"
                    value={form.state}
                    onChange={(e) => update("state", e.target.value)}
                  >
                    <option value="">Select State</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state}</p>}
                </div>
                <div>
                  <select
                    className="w-full rounded-md border border-gold-600/30 bg-paper px-4 py-2.5 text-sm outline-none focus:border-saffron-600"
                    value={form.enquiry}
                    onChange={(e) => update("enquiry", e.target.value)}
                  >
                    <option value="">Enquiry For</option>
                    {enquiryTypes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.enquiry && <p className="mt-1 text-xs text-red-600">{errors.enquiry}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-saffron-600 to-saffron-500 py-3 text-sm font-semibold text-paper transition-transform hover:scale-[1.01] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
