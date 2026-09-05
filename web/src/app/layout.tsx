import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { getSiteStats } from "@/lib/content";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PMM Knowledge Base",
    template: "%s | PMM Knowledge Base",
  },
  description:
    "A structured, practically-oriented knowledge base of product marketing frameworks and methodologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { totalEntries, categoryCount } = getSiteStats();
  return (
    <html lang="en" className={`${merriweather.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex" style={{ fontFamily: "var(--font-sans)" }}>
        <Sidebar totalEntries={totalEntries} categoryCount={categoryCount} />
        <main className="flex-1 min-w-0">{children}</main>
      </body>
    </html>
  );
}
