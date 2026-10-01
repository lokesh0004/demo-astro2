import { MapPin, Mail, Phone, Clock, Sun } from "lucide-react";
import { services, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 pt-16 pb-6 text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron-600">
                <Sun size={18} />
              </span>
              <span className="font-heading text-lg">vansh Anand</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Helping people achieve their ambitions through honest, practical
              Vedic astrology guidance for over 15 years.
            </p>
          </div>

          <div>
            <p className="font-heading text-sm text-gold-400">Our Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-cream/70 hover:text-gold-400">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm text-gold-400">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream/70 hover:text-gold-400">
                    {l.label}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold-400">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-gold-400">Terms &amp; Conditions</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading text-sm text-gold-400">Contact Us</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                Orbit Plaza, Crossing Republik, Ghaziabad, UP 201009
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} /> contact@astrologervansh.com
              </li>
              <li className="flex items-center gap-2">
                <Clock size={15} /> All days: 08:00 AM – 09:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Astrologer vansh Anand. All rights reserved.</p>
          <p>Design &amp; Development</p>
        </div>
      </div>
    </footer>
  );
}
