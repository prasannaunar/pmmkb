import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { BackToTop } from "@/components/back-to-top";
import { AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";
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

// Search Console and Bing Webmaster Tools ownership tokens. Set the matching
// environment variable in Vercel; nothing is rendered while one is unset.
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "A structured, practically-oriented knowledge base of product marketing frameworks and methodologies.",
  verification: {
    google: googleVerification,
    other: bingVerification ? { "msvalidate.01": bingVerification } : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-GB"
      className={`${merriweather.variable} ${poppins.variable} h-full`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <div>
            <Link className="footer-title" href="/">
              PMM Knowledge Base
            </Link>
            <p>A field guide for product marketing practice.</p>
          </div>
          <div>
            <p>
              Built on the work of the named originators.
              <br />
              Every entry links to its sources.
            </p>
            <p>
              CC BY 4.0 ·{" "}
              <Link href="/topics">Explore the complete library</Link>
            </p>
            <p>
              Made by{" "}
              <a href={AUTHOR.url} rel="author">
                {AUTHOR.name}
              </a>
            </p>
          </div>
        </footer>
        <BackToTop />
      </body>
    </html>
  );
}
