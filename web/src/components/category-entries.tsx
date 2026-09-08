"use client";
import { useState } from "react";
import Link from "next/link";
import type { EntryType } from "@/lib/content";
export interface CatalogueEntry {
  slug: string;
  title: string;
  type: EntryType;
  useWhen: string;
}
export function CategoryEntries({ entries }: { entries: CatalogueEntry[] }) {
  const [activeType, setActiveType] = useState<EntryType | null>(null);
  const types = Array.from(new Set(entries.map((e) => e.type)));
  const shown = activeType
    ? entries.filter((e) => e.type === activeType)
    : entries;
  return (
    <>
      <div
        className="filter-bar"
        role="group"
        aria-label="Filter entries by type"
      >
        <button
          type="button"
          aria-pressed={activeType === null}
          onClick={() => setActiveType(null)}
        >
          All entries ({entries.length})
        </button>
        {types.length > 1 &&
          types.map((type) => (
            <button
              type="button"
              key={type}
              aria-pressed={activeType === type}
              onClick={() => setActiveType(type)}
            >
              {type} ({entries.filter((e) => e.type === type).length})
            </button>
          ))}
      </div>
      <p className="metadata" role="status">
        Showing {shown.length} of {entries.length} entries
      </p>
      <div className="entry-list">
        {shown.map((entry) => (
          <Link
            key={entry.slug}
            href={`/framework/${entry.slug}`}
            className="entry-row"
          >
            <div>
              <h3>
                {entry.title}
                <span aria-hidden="true"> ↗</span>
              </h3>
              <p>
                <span className="use-label">Use this when</span>{" "}
                {entry.useWhen.charAt(0).toLowerCase() + entry.useWhen.slice(1)}
              </p>
            </div>
            <span className="metadata">{entry.type}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
