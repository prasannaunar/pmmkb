"use client";

import { useEffect, type ReactNode } from "react";
import { useSidebarContext } from "./sidebar-context";
import { useScrollVisibility } from "@/lib/scroll";

interface Crumb {
  label: string;
}

interface StickyHeaderProps {
  crumbs: Crumb[];
  title: string;
  badge?: ReactNode;
}

/**
 * Condensed breadcrumb + title bar for entry/category pages. On desktop it
 * renders its own sticky bar; on mobile it hands its content to the shared
 * MobileTopBar via context so the hamburger and breadcrumb share one bar.
 */
export function StickyHeader({ crumbs, title, badge }: StickyHeaderProps) {
  const { setMobileSlot } = useSidebarContext();
  const visible = useScrollVisibility();
  const path = crumbs.map((c) => c.label).join(" / ");

  useEffect(() => {
    setMobileSlot(
      <div className="min-w-0">
        <p className="text-[0.65rem] truncate" style={{ color: "var(--text-tertiary)" }}>
          {path}
        </p>
        <p className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
          {title}
        </p>
      </div>
    );
    return () => setMobileSlot(null);
  }, [path, title, setMobileSlot]);

  return (
    <div
      className="hidden lg:flex sticky top-0 z-30 items-center gap-3 py-3 mb-6 border-b transition-transform duration-200"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      {badge}
      <p className="text-xs truncate" style={{ color: "var(--text-tertiary)" }}>
        {path}
      </p>
      <span className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
        {title}
      </span>
    </div>
  );
}
