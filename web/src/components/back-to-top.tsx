"use client";

import { useScrollVisibility, usePastViewport } from "@/lib/scroll";

export function BackToTop() {
  const visible = useScrollVisibility();
  const past = usePastViewport();

  function handleClick() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      aria-hidden={!past}
      tabIndex={past ? 0 : -1}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 border flex items-center justify-center transition-all duration-200"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
        color: "var(--accent)",
        opacity: past && visible ? 1 : 0,
        transform: past && visible ? "translateY(0)" : "translateY(8px)",
        pointerEvents: past && visible ? "auto" : "none",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 13V3M3 7l5-5 5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
