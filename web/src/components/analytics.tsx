"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GTM_ID } from "@/lib/site";
import { CONSENT_KEY, readConsent, type ConsentChoice } from "@/lib/analytics";

// Google Tag Manager, loaded only after the visitor accepts analytics cookies.
// GA4 itself is a Google tag inside the GTM container, never a second snippet.

/** Fired by a "Cookie settings" button to reopen the banner. */
const OPEN_EVENT = "pmmkb:cookie-settings";

let loaded = false;
function loadTagManager(id: string) {
  if (loaded) return;
  loaded = true;
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  // gtag() must push the arguments object itself, not an array.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  }
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
  document.head.append(script);
}

// Google Analytics sets its cookies on the registrable domain (no www).
function clearAnalyticsCookies() {
  const domain = location.hostname.replace(/^www\./, "");
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const scope of ["", `; domain=.${domain}`])
      document.cookie = `${name}=; max-age=0; path=/${scope}`;
  }
}

export function ConsentBanner() {
  const [open, setOpen] = useState(false);
  const firstButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!GTM_ID) return;
    const choice = readConsent();
    if (choice === "granted") loadTagManager(GTM_ID);
    // Deferred so the banner appears after hydration, not during it.
    else if (choice === null) queueMicrotask(() => setOpen(true));
    const reopen = () => {
      setOpen(true);
      requestAnimationFrame(() => firstButton.current?.focus());
    };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!GTM_ID || !open) return null;

  function choose(value: ConsentChoice) {
    const previous = readConsent();
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      // Storage is unavailable: the banner asks again on the next visit.
    }
    setOpen(false);
    if (value === "granted") loadTagManager(GTM_ID!);
    if (value === "denied" && previous === "granted") {
      // Tag Manager cannot be unloaded from a running page, so clear its
      // cookies and reload.
      clearAnalyticsCookies();
      location.reload();
    }
  }

  return (
    <div className="consent" role="region" aria-label="Cookie choices">
      <div className="consent-inner">
        <p>
          May we use Google Analytics cookies to see which entries people read?
          Nothing loads unless you agree.{" "}
          <Link href="/privacy">Privacy and cookies</Link>
        </p>
        <div className="consent-actions">
          <button ref={firstButton} type="button" onClick={() => choose("denied")}>
            Reject
          </button>
          <button type="button" onClick={() => choose("granted")}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

/** Reopens the consent banner. Renders nothing while analytics is off. */
export function CookieSettingsButton({ className }: { className?: string }) {
  if (!GTM_ID) return null;
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
    >
      Cookie settings
    </button>
  );
}
