import { Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden bg-maroon-900 py-2 text-xs text-cream/90 sm:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-gold-400">
            <Phone size={12} /> +91 98765 43210
          </a>
          <a href="mailto:contact@astrologerdevika.com" className="flex items-center gap-1.5 hover:text-gold-400">
            <Mail size={12} /> contact@astrologerdevika.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-cream/70">All days: 08:00 AM – 09:00 PM</span>
          <span className="h-3 w-px bg-cream/20" />
          <a href="#" aria-label="Facebook" className="hover:text-gold-400"><Facebook size={13} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-gold-400"><Instagram size={13} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gold-400"><Linkedin size={13} /></a>
        </div>
      </div>
    </div>
  );
}
