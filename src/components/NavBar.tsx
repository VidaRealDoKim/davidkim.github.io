"use client";

import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";

export function NavBar() {
  const { dictionary } = useI18n();
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sectionItems = dictionary.nav.items.filter((item) => item.href.startsWith("#"));

    const sections = sectionItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const resolveActiveSection = () => {
      const scrollAnchor = window.scrollY + 180;
      let nextActive = `#${sections[0].id}`;

      for (const section of sections) {
        if (scrollAnchor >= section.offsetTop) {
          nextActive = `#${section.id}`;
        }
      }

      setActiveHref((current) => (current === nextActive ? current : nextActive));
    };

    resolveActiveSection();
    window.addEventListener("scroll", resolveActiveSection, { passive: true });
    window.addEventListener("resize", resolveActiveSection);
    window.addEventListener("hashchange", resolveActiveSection);

    return () => {
      window.removeEventListener("scroll", resolveActiveSection);
      window.removeEventListener("resize", resolveActiveSection);
      window.removeEventListener("hashchange", resolveActiveSection);
    };
  }, [dictionary.nav.items]);

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
              className={`relative text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                activeHref === item.href ? "text-text" : "text-muted hover:text-[color:var(--accent-strong)]"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-2 left-0 h-px transition-all duration-300 ${
                  activeHref === item.href ? "w-full accent-divider" : "w-0"
                }`}
              />
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