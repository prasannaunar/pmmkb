"use client";
import { useEffect, useState } from "react";
export interface ContentsItem {
  id: string;
  label: string;
}
export function ArticleContents({ items }: { items: ContentsItem[] }) {
  const [active, setActive] = useState(items[0]?.id || "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -60% 0px" },
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);
  const links = items.map((item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      aria-current={active === item.id ? "location" : undefined}
      onClick={() => setActive(item.id)}
    >
      {item.label}
    </a>
  ));
  return (
    <aside className="article-contents">
      <nav className="contents-desktop" aria-label="On this page">
        <p className="eyebrow">On this page</p>
        {links}
      </nav>
      <details className="contents-mobile">
        <summary>On this page ↓</summary>
        <nav
          aria-label="Article sections"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a"))
              (e.currentTarget.parentElement as HTMLDetailsElement).open =
                false;
          }}
        >
          {links}
        </nav>
      </details>
    </aside>
  );
}
