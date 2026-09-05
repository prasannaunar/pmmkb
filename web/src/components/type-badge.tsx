import Link from "next/link";
import { TYPE_SLUGS, type EntryType } from "@/lib/content";

const TYPE_COLORS: Record<EntryType, string> = {
  Framework: "var(--color-type-framework)",
  Methodology: "var(--color-type-methodology)",
  Model: "var(--color-type-model)",
  Primer: "var(--color-type-primer)",
};

export function TypeBadge({ type }: { type: EntryType }) {
  return (
    <Link
      href={`/type/${TYPE_SLUGS[type]}`}
      className="inline-flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-wider px-2 py-0.5 border transition-colors hover:underline"
      style={{
        fontFamily: "var(--font-sans)",
        color: TYPE_COLORS[type],
        borderColor: "var(--border)",
      }}
    >
      {type}
    </Link>
  );
}
