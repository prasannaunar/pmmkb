"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
const links = [
  ["/topics", "Explore topics"],
  ["/challenges", "Solve a challenge"],
  ["/learn", "Learning paths"],
  ["/search", "Search"],
];
export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const menu = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);
  useEffect(() => {
    function shortcut(e: KeyboardEvent) {
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key.toLowerCase() === "k" &&
        pathname !== "/" &&
        pathname !== "/search"
      ) {
        e.preventDefault();
        router.push("/search");
      }
    }
    document.addEventListener("keydown", shortcut);
    return () => document.removeEventListener("keydown", shortcut);
  }, [pathname, router]);
  const navigation = links.map(([href, label]) => (
    <Link
      key={href}
      href={href}
      aria-current={
        pathname.startsWith(href) ||
        (href === "/topics" && pathname.startsWith("/category/"))
          ? "page"
          : undefined
      }
    >
      {label}
    </Link>
  ));
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">
        PMM
        <span className="wordmark-rule" aria-hidden="true" />
        Knowledge Base
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation}
      </nav>
      <details
        className="mobile-nav"
        ref={menu}
        onKeyDown={(e) => {
          if (e.key === "Escape" && menu.current) {
            menu.current.open = false;
            menu.current.querySelector("summary")?.focus();
          }
        }}
      >
        <summary>
          Menu <span aria-hidden="true">+</span>
        </summary>
        <nav aria-label="Mobile navigation">{navigation}</nav>
      </details>
    </header>
  );
}
