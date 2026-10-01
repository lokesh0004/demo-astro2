export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Only Us?", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Astrology", href: "#astrology" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "career" | "health" | "match" | "marriage" | "gemstone" | "love" | "vastu" | "numerology" | "profession";
};

export const services: Service[] = [
  { id: "career", title: "Career Advice", icon: "career", description: "Your career decides your success. Get clarity on the right direction to achieve your professional goals." },
  { id: "health", title: "Health Report", icon: "health", description: "Health is wealth. Understand planetary influences on your wellbeing and preventive remedies." },
  { id: "match", title: "Match Making", icon: "match", description: "Kundli matching is one of the most important parts of marriage — helping you at life's most crucial time." },
  { id: "marriage", title: "Marriage Guidance", icon: "marriage", description: "Marriage is a lifelong bond of truth and understanding. Get guidance for a harmonious married life." },
  { id: "gemstone", title: "Gemstone Consultation", icon: "gemstone", description: "Not every gemstone suits everyone. Find the right gemstone recommended for your specific chart." },
  { id: "love", title: "Love Report", icon: "love", description: "Not everyone easily meets their ideal partner. Get clarity on your love life and relationship timing." },
  { id: "vastu", title: "Vastu Shastra", icon: "vastu", description: "Vastu makes a big impact on your life, based on the energies that originate from your surroundings." },
  { id: "numerology", title: "Numerology", icon: "numerology", description: "Discover your strengths, weaknesses and inner needs through the science of numbers." },
  { id: "profession", title: "Profession Consultation", icon: "profession", description: "Every professional wants success in their field — get guidance suited to your specific profession." },
];

export const states = [
  "Delhi", "Uttar Pradesh", "Haryana", "Punjab", "Rajasthan", "Maharashtra",
  "Gujarat", "Karnataka", "Tamil Nadu", "West Bengal", "Madhya Pradesh", "Other",
];

export const enquiryTypes = [
  "Career Advice", "Health Report", "Match Making", "Marriage Guidance",
  "Gemstone Consultation", "Love Report", "Vastu Consultation",
];

export const testimonials = [
  {
    name: "Rashmi Nager",
    location: "Texas, USA",
    quote:
      "I was introduced to Astrologer vansh ji through my elder sister. Her guidance brought positive results in my legal matters. Truly grateful for her timely support.",
  },
  {
    name: "Prashant Kumar",
    location: "Delhi, India",
    quote:
      "My consultation covered wealth predictions and how to grow my savings. The financial predictions were remarkably accurate. Highly skilled in her art.",
  },
  {
    name: "Jasspreet Singh",
    location: "Chandigarh, India",
    quote:
      "Facing financial shortfalls had brought me to a difficult point. Her guidance helped me understand my finances clearly and plan ahead with confidence.",
  },
  {
    name: "Sheetal",
    location: "Roorkee, India",
    quote:
      "I found her through a Google search. Her career report was life changing. Blissful experience, and I recommend her to everyone I know.",
  },
];

export const faqs = [
  {
    q: "Who is Astrologer vansh Anand?",
    a: "Astrologer vansh Anand is a Vedic astrology practitioner with over 10 years of experience, helping thousands of clients across India and abroad with career, marriage, health and financial guidance.",
  },
  {
    q: "When did you start providing astrology services?",
    a: "Consultations have been offered since 2015, growing steadily through referrals and long-standing client relationships.",
  },
  {
    q: "Can astrology predict love and marriage compatibility?",
    a: "Yes — Vedic astrology offers detailed methods including kundli matching (Guna Milan) to assess compatibility for love and marriage.",
  },
  {
    q: "Do you offer online consultations?",
    a: "Yes, consultations are available by phone, video call, or in person at our Delhi NCR office.",
  },
  {
    q: "What details do I need to share for a reading?",
    a: "Your full name, date of birth, time of birth and place of birth are needed to prepare an accurate birth chart.",
  },
];

export const videoTopics = [
  "Career & Success Mantras",
  "Astrological Remedies Explained",
  "Marriage Muhurat Guide",
  "Diwali Puja Vidhi",
  "Vastu Tips For Home",
  "Gemstone Selection Guide",
];
