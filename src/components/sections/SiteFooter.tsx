import { footerContent } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{footerContent.copyright}</p>
        <p>{footerContent.tagline}</p>
      </div>
    </footer>
  );
}
