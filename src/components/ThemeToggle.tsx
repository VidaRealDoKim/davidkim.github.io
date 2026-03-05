"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const { dictionary } = useI18n();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-xs font-semibold tracking-[0.15em] uppercase text-text transition-all duration-300 hover:-translate-y-0.5"
      aria-label={dictionary.theme.aria}
    >
      {theme === "dark" ? dictionary.theme.light : dictionary.theme.dark}
    </button>
  );
}