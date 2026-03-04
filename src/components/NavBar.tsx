"use client";

import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";

export function NavBar() {
  const { dictionary } = useI18n();

  return (
    <header className="fixed top-0 z-40 w-full">
      <div className="mx-auto mt-4 flex w-[min(1120px,92vw)] items-center justify-between rounded-full border border-border bg-background/85 px-4 py-3 backdrop-blur-md md:px-6">
        <a href="#home" className="text-sm font-semibold tracking-wide text-text">
          {dictionary.nav.brand}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {dictionary.nav.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-all duration-300 hover:text-text hover:-translate-y-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}