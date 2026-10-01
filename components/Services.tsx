import {
  Briefcase, HeartPulse, Users, Gem, Heart, Compass,
  Hash, UserCheck, Phone,
} from "lucide-react";
import { services, type Service } from "@/lib/data";

const iconMap: Record<Service["icon"], React.ElementType> = {
  career: Briefcase,
  health: HeartPulse,
  match: Users,
  marriage: Heart,
  gemstone: Gem,
  love: Heart,
  vastu: Compass,
  numerology: Hash,
  profession: UserCheck,
};

export default function Services() {
  return (
    <section id="services" className="bg-saffron-100/40 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="divider-om text-xs font-semibold tracking-[0.3em] text-saffron-600">
            OUR SERVICES
          </p>
          <h2 className="mt-4 font-heading text-3xl text-maroon-900 sm:text-4xl">
            Get Solutions For All Your Problems
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.id}
                className="card-shadow rounded-xl border border-gold-600/15 bg-paper p-7 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-700 text-cream">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-lg text-maroon-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                <div className="mt-6 flex items-center gap-4 text-sm">
                  <a href="tel:+919876543210" className="flex items-center gap-1.5 font-semibold text-saffron-600 hover:text-saffron-500">
                    <Phone size={14} /> Call Us
                  </a>
                  <a href="#contact" className="font-semibold text-maroon-700 underline-offset-2 hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
