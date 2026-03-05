"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import en from "../../locales/en.json";
import pt from "../../locales/pt.json";

type Locale = "en" | "pt";
type Dictionary = typeof en;

type I18nContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  toggleLocale: () => void;
};

const dictionaries: Record<Locale, Dictionary> = {
  en,
  pt,
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const storedLocale = window.localStorage.getItem("locale") as Locale | null;
    return storedLocale === "en" || storedLocale === "pt" ? storedLocale : "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  const toggleLocale = () => {
    setLocale((current) => {
      const nextLocale = current === "en" ? "pt" : "en";
      window.localStorage.setItem("locale", nextLocale);
      return nextLocale;
    });
  };

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      toggleLocale,
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
