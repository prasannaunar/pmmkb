import { CookieSettingsButton } from "@/components/analytics";
import { pageMetadata } from "@/lib/seo";
import { AUTHOR, GTM_ID } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy and cookies",
  description:
    "What the PMM Knowledge Base collects, which cookies it uses with your consent, and how to change your cookie choice.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="page-shell reading-page">
      <header className="page-intro">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy and cookies</h1>
        <p className="lede">
          This site collects as little as it can. Here is exactly what it uses,
          and why.
        </p>
      </header>
      <div className="prose">
        <p>Last updated 28 October 2026.</p>

        <h2>Who is responsible</h2>
        <p>
          The PMM Knowledge Base is made by{" "}
          <a href={AUTHOR.url} rel="author">
            {AUTHOR.name}
          </a>
          , who is responsible for the data it collects. To ask about it, use
          the <a href={`${AUTHOR.url}contact/`}>contact page</a> on that site.
        </p>

        <h2>Google Analytics (only with your consent)</h2>
        <p>
          If you choose Accept on the cookie banner, the site loads Google Tag
          Manager, which runs Google Analytics. It shows which entries are
          read, roughly where visitors come from, and which device types they
          use. Nothing from Google loads until you accept, and nothing loads at
          all if you reject.
        </p>
        <p>
          Google Analytics sets cookies whose names begin with{" "}
          <code>_ga</code> to recognise a returning browser. Advertising
          features are switched off. Google processes this data on the
          site&apos;s behalf; its{" "}
          <a href="https://policies.google.com/privacy">privacy policy</a>{" "}
          explains how. The lawful basis is your consent, which you can
          withdraw at any time.
        </p>
        {GTM_ID && (
          <p>
            <CookieSettingsButton className="footer-link-button" />
          </p>
        )}

        <h2>Everything else</h2>
        <ul>
          <li>
            <strong>Hosting:</strong> the site is served by Vercel, which
            processes your IP address to deliver pages.
          </li>
          <li>
            <strong>Fonts:</strong> served from this site, not from a font
            provider.
          </li>
          <li>
            <strong>Your browser&apos;s storage:</strong> the site remembers
            your light or dark theme and your cookie choice in your own
            browser. Neither is sent anywhere.
          </li>
        </ul>

        <h2>Your rights</h2>
        <p>
          Under UK data protection law you can ask to see, correct or delete
          personal data held about you, and you can withdraw consent at any
          time. If you are unhappy with how your data is handled, you can
          complain to the{" "}
          <a href="https://ico.org.uk/make-a-complaint/">
            Information Commissioner&apos;s Office
          </a>
          .
        </p>
      </div>
    </div>
  );
}
