"use client";

import { useState } from "react";
import Link from "next/link";
import { pluralType } from "@/lib/plural";
import type { Entry, EntryType } from "@/lib/content";

// Duplicated from lib/content.ts (not imported directly) so this client
// component doesn't pull the fs-based content module into the browser bundle.
const TYPE_SLUGS: Record<EntryType, string> = {
  Framework: "frameworks",
  Methodology: "methodologies",
  Model: "models",
  Primer: "primers",
};

const TYPE_COLORS: Record<EntryType, string> = {
  Framework: "var(--color-type-framework)",
  Methodology: "var(--color-type-methodology)",
  Model: "var(--color-type-model)",
  Primer: "var(--color-type-primer)",
};

interface CategoryEntriesProps {
  entries: Entry[];
  typeCounts: Record<string, number>;
}

function snippetFor(entry: Entry): string {
  const whatItIs = entry.rawMarkdown.match(
    /\*\*What it is:\*\*\s*([\s\S]*?)(?=\n\n\*\*|\n##|$)/
  );
  if (!whatItIs) return "";
  const text = whatItIs[1].trim();
  return text.length > 180 ? text.slice(0, 180) + "..." : text;
}

export function CategoryEntries({ entries, typeCounts }: CategoryEntriesProps) {
  const [activeType, setActiveType] = useState<EntryType | null>(null);

  const filteredEntries = activeType
    ? entries.filter((e) => e.type === activeType)
    : entries;

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filter by type">
        <button
          type="button"
          onClick={() => setActiveType(null)}
          aria-pressed={activeType === null}
          className="text-sm px-3 py-1 border transition-colors cursor-pointer"
          style={
            activeType === null
              ? { borderColor: "var(--accent)", color: "var(--accent)", backgroundColor: "var(--accent-light)" }
              : { borderColor: "var(--border)", color: "var(--text-secondary)" }
          }
        >
          Show all ({entries.length})
        </button>
        {Object.entries(typeCounts).map(([type, count]) => {
          const isActive = activeType === type;
          return (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(isActive ? null : (type as EntryType))}
              aria-pressed={isActive}
              className="text-sm px-3 py-1 border transition-colors cursor-pointer"
              style={
                isActive
                  ? { borderColor: "var(--accent)", color: "var(--accent)", backgroundColor: "var(--accent-light)" }
                  : { borderColor: "var(--border)", color: "var(--text-secondary)" }
              }
            >
              {count} {pluralType(type, count)}
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {filteredEntries.map((entry) => {
          const snippet = snippetFor(entry);
          return (
            <div
              key={entry.slug}
              className="p-5 border transition-all hover:shadow-md"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
              }}
            >
              <div className="mb-1.5">
                <Link
                  href={`/type/${TYPE_SLUGS[entry.type]}`}
                  className="inline-flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-wider px-2 py-0.5 border transition-colors hover:underline"
                  style={{
                    fontFamily: "var(--font-sans)",
                    color: TYPE_COLORS[entry.type],
                    borderColor: "var(--border)",
                  }}
                >
                  {entry.type}
                </Link>
              </div>
              <Link href={`/framework/${entry.slug}`} className="block">
                <h2 className="font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                  {entry.title}
                </h2>
                {snippet && (
                  <p className="text-sm mt-1.5 leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                    {snippet}
                  </p>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
