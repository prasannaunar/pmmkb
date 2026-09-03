"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Fuse from "fuse.js";
import type { SearchEntry } from "@/lib/content";

interface SearchProps {
  entries: SearchEntry[];
}

export function Search({ entries }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fuse = useRef(
    new Fuse(entries, {
      keys: [
        { name: "title", weight: 2 },
        { name: "snippet", weight: 1 },
        { name: "categoryTitle", weight: 0.5 },
      ],
      threshold: 0.3,
      includeScore: true,
    })
  );

  useEffect(() => {
    fuse.current = new Fuse(entries, {
      keys: [
        { name: "title", weight: 2 },
        { name: "snippet", weight: 1 },
        { name: "categoryTitle", weight: 0.5 },
      ],
      threshold: 0.3,
      includeScore: true,
    });
  }, [entries]);

  useEffect(() => {
    if (query.length >= 2) {
      const found = fuse.current.search(query, { limit: 8 });
      setResults(found.map((r) => r.item));
      setIsOpen(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(-1);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      close();
    } else if (e.key === "Escape") {
      close();
    }
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
          style={{ color: "var(--text-tertiary)" }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          placeholder="Search frameworks..."
          className="w-full pl-10 pr-16 py-2.5 rounded-lg border text-sm outline-none transition-colors"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
          }}
        />
        <kbd
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-1.5 py-0.5 rounded border"
          style={{
            color: "var(--text-tertiary)",
            borderColor: "var(--border)",
            backgroundColor: "var(--bg)",
          }}
        >
          Ctrl+K
        </kbd>
      </div>

      {isOpen && results.length > 0 && (
        <div
          className="absolute top-full mt-2 w-full rounded-lg border shadow-lg overflow-hidden z-50"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border)",
          }}
        >
          {results.map((entry, i) => (
            <Link
              key={entry.slug}
              href={`/framework/${entry.slug}`}
              onClick={close}
              className="block px-4 py-3 transition-colors"
              style={{
                backgroundColor: i === selectedIndex ? "var(--accent-light)" : "transparent",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
                  {entry.title}
                </span>
                <span
                  className="text-xs px-1.5 py-0.5 rounded"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {entry.type}
                </span>
              </div>
              <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "var(--text-secondary)" }}>
                {entry.categoryTitle}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
