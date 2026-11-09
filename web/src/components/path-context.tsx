"use client";
import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
export interface PathContextItem {
  slug: string;
  title: string;
  position: number;
  total: number;
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

// Learning-path context travels in the URL fragment (#path=<guide>) rather
// than a query string, so every entry has one crawlable URL. A fragment is
// replaced as soon as the reader follows an in-page anchor (#example, a
// heading), so the path is also kept in sessionStorage against the entry it
// was opened on. Old ?path= links still work.
const STORAGE_KEY = "pmmkb-path";
const HASH_PATTERN = /^#path=([a-z0-9-]+)$/;

/** The path named in the current URL, if any. */
function pathFromUrl(): string {
  const hash = window.location.hash.match(HASH_PATTERN);
  if (hash) return hash[1];
  return new URLSearchParams(window.location.search).get("path") ?? "";
}

function readStored(entrySlug: string): string {
  try {
    const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "null");
    return stored?.entry === entrySlug && typeof stored.path === "string"
      ? stored.path
      : "";
  } catch {
    return "";
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
  };
}

export function PathContext({
  entrySlug,
  paths,
}: {
  entrySlug: string;
  paths: PathContextItem[];
}) {
  const fromUrl = useSyncExternalStore(subscribe, pathFromUrl, () => "");
  const active = useSyncExternalStore(
    subscribe,
    () => pathFromUrl() || readStored(entrySlug),
    () => "",
  );
  useEffect(() => {
    if (!fromUrl) return;
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ path: fromUrl, entry: entrySlug }),
      );
    } catch {
      // Storage can be unavailable (private mode); the fragment still works.
    }
  }, [fromUrl, entrySlug]);
  const path = paths.find((p) => p.slug === active);
  if (!path)
    return paths.length ? (
      <aside className="path-context">
        <p className="eyebrow">Read this as part of a learning path</p>
        <div className="inline-links">
          {paths.map((p) => (
            <Link key={p.slug} href={`/learn/${p.slug}`}>
              {p.title} →
            </Link>
          ))}
        </div>
      </aside>
    ) : null;
  return (
    <aside className="path-context">
      <p className="eyebrow">
        Entry {path.position} of {path.total}
      </p>
      <Link href={`/learn/${path.slug}`} className="path-context-title">
        {path.title}
      </Link>
      <div className="path-context-links">
        {path.previous && (
          <Link href={`/framework/${path.previous.slug}#path=${path.slug}`}>
            ← {path.previous.title}
          </Link>
        )}
        {path.next ? (
          <Link href={`/framework/${path.next.slug}#path=${path.slug}`}>
            Next: {path.next.title} →
          </Link>
        ) : (
          <Link href={`/learn/${path.slug}#path-quiz`}>
            Finish with the path quiz →
          </Link>
        )}
      </div>
    </aside>
  );
}
