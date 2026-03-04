"use client";

import { useI18n } from "@/i18n/I18nProvider";

export function LanguageToggle() {
  const { dictionary, toggleLocale } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="inline-flex h-10 items-center rounded-full border border-border bg-surface px-4 text-xs font-semibold tracking-[0.15em] uppercase text-text transition-all duration-300 hover:-translate-y-0.5"
      aria-label={dictionary.language.aria}
    >
      {dictionary.language.switchTo}
    </button>
  );
}
