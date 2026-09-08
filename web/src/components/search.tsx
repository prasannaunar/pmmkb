"use client";
import { useState, useEffect, useRef, useMemo, useId } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
export interface SearchItem {
  title: string;
  slug: string;
  type: string;
  categoryTitle: string;
  snippet: string;
  content?: string;
  href?: string;
}
export function Search({
  entries,
  expanded = false,
}: {
  entries: SearchItem[];
  expanded?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(-1);
  const input = useRef<HTMLInputElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const id = useId();
  const fuse = useMemo(
    () =>
      new Fuse(entries, {
        keys: [
          { name: "title", weight: 3 },
          { name: "snippet", weight: 2 },
          { name: "categoryTitle", weight: 1 },
          { name: "content", weight: 0.6 },
        ],
        ignoreLocation: true,
        threshold: 0.32,
      }),
    [entries],
  );
  const results = useMemo(
    () =>
      query.trim().length >= 2
        ? fuse
            .search(query.trim(), { limit: expanded ? 30 : 8 })
            .map((r) => r.item)
        : [],
    [query, fuse, expanded],
  );
  const show = open && query.trim().length >= 2;
  useEffect(() => {
    function shortcut(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        input.current?.focus();
      }
    }
    function outside(e: MouseEvent) {
      if (!container.current?.contains(e.target as Node) && !expanded)
        setOpen(false);
    }
    document.addEventListener("keydown", shortcut);
    document.addEventListener("mousedown", outside);
    return () => {
      document.removeEventListener("keydown", shortcut);
      document.removeEventListener("mousedown", outside);
    };
  }, [expanded]);
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setSelected((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((i) => Math.max(i - 1, 0));
    } else if (e.key === "Escape") {
      setOpen(false);
      setSelected(-1);
    } else if (e.key === "Enter" && show && results.length) {
      e.preventDefault();
      const item = results[Math.max(selected, 0)];
      setOpen(false);
      router.push(item.href || `/framework/${item.slug}`);
    }
  }
  return (
    <div
      className={`search-surface ${expanded ? "search-expanded" : ""}`}
      ref={container}
    >
      <label className="sr-only" htmlFor={id}>
        Search the knowledge base
      </label>
      <div className="search-input-wrap">
        <span className="search-symbol" aria-hidden="true">
          ⌕
        </span>
        <input
          id={id}
          ref={input}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setSelected(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search a framework, question or challenge…"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={show}
          aria-controls={show ? `${id}-results` : undefined}
          aria-activedescendant={
            show && selected >= 0 && results[selected]
              ? `${id}-option-${selected}`
              : undefined
          }
          autoComplete="off"
        />
        <kbd aria-hidden="true">Ctrl K</kbd>
      </div>
      <div className="sr-only" role="status">
        {show
          ? `${results.length} results${results.length ? ". Use arrow keys to choose and Enter to open." : ". Try a shorter phrase or browse topics."}`
          : ""}
      </div>
      {show && (
        <div
          className="search-results"
          id={`${id}-results`}
          role="listbox"
          aria-label="Search results"
        >
          {results.length ? (
            results.map((item, i) => (
              <div
                key={item.slug}
                id={`${id}-option-${i}`}
                role="option"
                aria-selected={selected === i}
              >
                <Link
                  tabIndex={-1}
                  href={item.href || `/framework/${item.slug}`}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setSelected(i)}
                >
                  <span className="metadata">
                    {item.categoryTitle.replace(/^Category \d+: /, "")} ·{" "}
                    {item.type}
                  </span>
                  <strong>{item.title}</strong>
                  <span className="search-snippet">{item.snippet}</span>
                </Link>
              </div>
            ))
          ) : (
            <div className="search-empty">
              <p>No matches for “{query}”.</p>
              <p>
                Try a shorter phrase, such as “positioning”, “launch” or
                “customer feedback”.
              </p>
            </div>
          )}
        </div>
      )}
      {expanded && !show && (
        <div className="search-suggestions">
          <p className="eyebrow">Try a starting point</p>
          <div className="filter-bar">
            {["positioning", "launch", "customer feedback", "pricing"].map(
              (term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    setOpen(true);
                    setSelected(-1);
                    input.current?.focus();
                  }}
                >
                  {term}
                </button>
              ),
            )}
          </div>
          <Link className="text-link" href="/topics">
            Or browse all topics →
          </Link>
        </div>
      )}
    </div>
  );
}
