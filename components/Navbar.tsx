"use client";

import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-600/20 bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron-600 text-paper">
            <Sun size={18} strokeWidth={2} />
          </span>
          <span className="font-heading text-xl leading-none text-maroon-700">
            Devika Anand
            <span className="block text-[10px] font-body tracking-[0.2em] text-muted">
              ASTROLOGER
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-saffron-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md bg-gradient-to-r from-saffron-600 to-saffron-500 px-5 py-2.5 text-sm font-semibold text-paper shadow-md transition-transform hover:scale-[1.03] lg:inline-block"
        >
          Book Appointment
        </a>

        <button aria-label="Toggle menu" onClick={() => setOpen((o) => !o)} className="text-maroon-700 lg:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold-600/20 bg-paper px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1 text-sm text-ink/80">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-saffron-600 px-5 py-2.5 text-center text-sm font-semibold text-paper"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
