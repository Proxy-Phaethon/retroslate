"use client";

import { useEffect } from "react";

export function LandingScrollMode() {
  useEffect(() => {
    const el = document.documentElement;
    el.classList.remove("snap-doc", "snap-doc--mandatory");
    return () => {
      el.classList.add("snap-doc");
      el.classList.remove("snap-doc--mandatory");
    };
  }, []);

  return null;
}
