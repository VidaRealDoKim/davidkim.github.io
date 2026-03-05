"use client";

import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useI18n } from "@/i18n/I18nProvider";

export function NavBar() {
  const { dictionary } = useI18n();
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const sections = dictionary.nav.items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
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