"use client";

import Link from "next/link";
import { useSidebarContext } from "./sidebar-context";
import { useScrollVisibility } from "@/lib/scroll";

export function MobileTopBar() {
  const { open, setOpen, mobileSlot } = useSidebarContext();
  const visible = useScrollVisibility();

  return (
    <header
      className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center gap-3 px-4 h-14 border-b transition-transform duration-200"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--border)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex-shrink-0 p-2 -ml-1 border"
        style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}
        aria-label="Toggle navigation"
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 5h14M3 10h14M3 15h14" />}
        </svg>
      </button>

      <div className="min-w-0 flex-1">
        {mobileSlot ?? (
          <Link
            href="/"
            className="font-semibold text-sm truncate block"
            style={{ fontFamily: "var(--font-serif)", color: "var(--text-primary)" }}
          >
            PMM Knowledge Base
          </Link>
        )}
      </div>
    </header>
  );
}
