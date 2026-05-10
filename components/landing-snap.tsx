"use client";

import { useEffect } from "react";

/**
 * Landing uses scroll-snap mandatory; other routes keep proximity snap from layout.
 */
export function LandingSnap() {
  useEffect(() => {
    const el = document.documentElement;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      return;
    }
    el.classList.add("snap-doc--mandatory");
    return () => {
      el.classList.remove("snap-doc--mandatory");
    };
  }, []);
  return null;
}
