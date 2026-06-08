import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollRevealInit from "./components/ScrollRevealInit";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sara Abdelmeguid",
  description: "Freelance English Tutor · IGCSE Specialist · CELTA, TEFL. Student-centred lessons in confidence, communication and exam readiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable} ${hanken.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollRevealInit />
      </body>
    </html>
  );
}
