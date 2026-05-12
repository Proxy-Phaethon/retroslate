"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const themeChangeEvent = "retroslate-theme-change";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }
  return window.localStorage.getItem("retroslate-theme") === "light"
    ? "light"
    : "dark";
}

function subscribe(callback: () => void) {
  window.addEventListener(themeChangeEvent, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(themeChangeEvent, callback);
    window.removeEventListener("storage", callback);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem("retroslate-theme", theme);
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getStoredTheme, () => "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-pressed={theme === "light"}
      onClick={() => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
      }}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
