import type { Metadata } from "next";
import { Rozha_One, Poppins } from "next/font/google";
import "./globals.css";

const rozha = Rozha_One({
  variable: "--font-rozha",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://astrologer-devika.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Astrologer Devika Anand | Best Astrologer in Delhi NCR",
  description:
    "Pandit Devika Anand ji, one of the most trusted astrologers in Delhi NCR. Vedic astrology, kundli matching, career, marriage, gemstone & vastu consultation.",
  keywords: [
    "best astrologer in delhi",
    "vedic astrologer delhi ncr",
    "kundli matching",
    "vastu consultant delhi",
    "gemstone consultation",
    "love marriage astrologer",
  ],
  openGraph: {
    title: "Astrologer Devika Anand | Best Astrologer in Delhi NCR",
    description:
      "Trusted Vedic astrology, kundli matching, career, marriage, gemstone & vastu consultation in Delhi NCR.",
    url: siteUrl,
    siteName: "Astrologer Devika Anand",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${rozha.variable} ${poppins.variable} font-body bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
