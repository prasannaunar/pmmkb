"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hides on scroll down, reveals on any scroll up. Stays visible near the
 * top so the header doesn't flicker away on a small first scroll.
 */
export function useScrollVisibility(hideThreshold = 24): boolean {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const diff = y - lastY.current;
        if (y <= hideThreshold) {
          setVisible(true);
        } else if (diff > 4) {
          setVisible(false);
        } else if (diff < -4) {
          setVisible(true);
        }
        lastY.current = y;
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideThreshold]);

  return visible;
}

/** True once the reader has scrolled past roughly one viewport. */
export function usePastViewport(): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    function onScroll() {
      setPast(window.scrollY > window.innerHeight * 0.9);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return past;
}
