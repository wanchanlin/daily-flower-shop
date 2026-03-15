 "use client";

import { useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

const storageKey = "dfs-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  const applyTheme = useCallback((next: Theme) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, next);
  }, []);

  // Hydrate from localStorage / system preference on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem(storageKey) as Theme | null;
    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
      setTheme(stored);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initial: Theme = prefersDark ? "dark" : "light";
    applyTheme(initial);
    setTheme(initial);
  }, [applyTheme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  // Avoid mismatched icon before hydration
  if (theme === null) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-100 bg-white/70 text-xs text-zinc-500 shadow-sm backdrop-blur-sm"
      >
        …
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-100 bg-white/80 text-sm text-zinc-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200 dark:hover:border-emerald-400 dark:hover:text-emerald-200"
    >
      <span aria-hidden>{isDark ? "🌞" : "🌙"}</span>
    </button>
  );
}

