"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "./sidebar-context";

interface NavCategory {
  slug: string;
  shortTitle: string;
  number: number;
}

const CATEGORIES: NavCategory[] = [
  { slug: "01-market-customer-understanding", shortTitle: "Market & Customer", number: 1 },
  { slug: "02-positioning-messaging", shortTitle: "Positioning & Messaging", number: 2 },
  { slug: "03-competitive-strategy", shortTitle: "Competitive Strategy", number: 3 },
  { slug: "04-go-to-market-launch", shortTitle: "Go-to-Market & Launch", number: 4 },
  { slug: "05-lifecycle-workflow", shortTitle: "Lifecycle & Workflow", number: 5 },
  { slug: "06-product-experience-adoption", shortTitle: "Product Experience", number: 6 },
  { slug: "07-strategy-planning", shortTitle: "Strategy & Planning", number: 7 },
  { slug: "08-pricing-packaging", shortTitle: "Pricing & Packaging", number: 8 },
  { slug: "09-sales-enablement", shortTitle: "Sales Enablement", number: 9 },
  { slug: "concepts-primers", shortTitle: "Concepts", number: 10 },
];

interface SidebarProps {
  totalEntries: number;
  categoryCount: number;
}

export function Sidebar({ totalEntries, categoryCount }: SidebarProps) {
  const pathname = usePathname();
  const { open, setOpen } = useSidebarContext();

  return (
    <>
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:sticky top-14 lg:top-0 left-0 z-40 h-[calc(100vh-3.5rem)] lg:h-screen w-72 overflow-y-auto
          border-r transition-transform duration-200
          lg:translate-x-0 flex-shrink-0
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{
          backgroundColor: "var(--bg-sidebar)",
          borderColor: "var(--border)",
        }}
      >
        <div className="p-6">
          <Link
            href="/"
            className="block mb-8"
            onClick={() => setOpen(false)}
          >
            <h1
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
            >
              PMM Knowledge Base
            </h1>
            <p className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
              {totalEntries} entries across {categoryCount} categories
            </p>
          </Link>

          <nav>
            <ul className="space-y-1">
              {CATEGORIES.map((cat) => {
                const href = `/category/${cat.slug}`;
                const isActive = pathname === href || pathname.startsWith(href + "/");
                return (
                  <li key={cat.slug}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`
                        block px-3 py-2 text-sm transition-colors
                        ${isActive ? "font-semibold" : ""}
                      `}
                      style={{
                        backgroundColor: isActive ? "var(--accent-light)" : "transparent",
                        color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      }}
                    >
                      <span
                        className="inline-block w-5 text-xs text-right mr-2"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        {cat.number < 10 ? cat.number : ""}
                      </span>
                      {cat.shortTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
