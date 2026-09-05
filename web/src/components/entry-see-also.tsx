import Link from "next/link";
import type { SeeAlsoItem } from "@/lib/entry-sections";

export function EntrySeeAlso({ items }: { items: SeeAlsoItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="prose">
      <h2 id="see-also">See also</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {item.slug ? (
              <Link href={`/framework/${item.slug}`}>{item.name}</Link>
            ) : (
              <strong>{item.name}</strong>
            )}
            {item.guidance ? ` — ${item.guidance}` : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
