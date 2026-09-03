import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
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
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex" style={{ fontFamily: "var(--font-body)" }}>
        <ThemeProvider>
          <Sidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
