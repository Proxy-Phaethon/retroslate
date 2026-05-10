"use client";

import { useEffect } from "react";

/**
 * Full-page section routes: mandatory vertical snap while mounted.
 * Other routes keep proximity snap from the root layout.
 */
export function MandatorySectionSnap() {
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
