"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle size={22} fill="white" strokeWidth={0} />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call now"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-700 text-cream shadow-lg transition-transform hover:scale-110"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
