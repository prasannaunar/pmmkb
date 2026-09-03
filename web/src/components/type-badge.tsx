import type { EntryType } from "@/lib/content";

const TYPE_STYLES: Record<EntryType, string> = {
  Framework:
    "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  Methodology:
    "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  Model:
    "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300 border-teal-200 dark:border-teal-800",
  Primer:
    "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300 border-orange-200 dark:border-orange-800",
};

export function TypeBadge({ type }: { type: EntryType }) {
  return (
    <span
      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded border ${TYPE_STYLES[type]}`}
    >
      {type}
    </span>
  );
}
