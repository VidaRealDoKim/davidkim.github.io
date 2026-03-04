"use client";

import { useI18n } from "@/i18n/I18nProvider";

export function SiteFooter() {
  const { dictionary } = useI18n();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} David Kim. {dictionary.footer.rights}</p>
        <p>{dictionary.footer.tagline}</p>
      </div>
    </footer>
  );
}
