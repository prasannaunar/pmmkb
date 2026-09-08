"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export interface PathContextItem {
  slug: string;
  title: string;
  position: number;
  total: number;
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
}
export function PathContext({ paths }: { paths: PathContextItem[] }) {
  const params = useSearchParams();
  const path = paths.find((p) => p.slug === params.get("path"));
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
          <Link href={`/framework/${path.previous.slug}?path=${path.slug}`}>
            ← {path.previous.title}
          </Link>
        )}
        {path.next ? (
          <Link href={`/framework/${path.next.slug}?path=${path.slug}`}>
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
