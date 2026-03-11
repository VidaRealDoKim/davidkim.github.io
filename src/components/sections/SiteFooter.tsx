"use client";

import { useI18n } from "@/i18n/I18nProvider";

export function SiteFooter() {
  const { dictionary } = useI18n();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-1 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {dictionary.footer.brand} - {dictionary.footer.rights}
        </p>
      </div>
    </footer>
  );
}
