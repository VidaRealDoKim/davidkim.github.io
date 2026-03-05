import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-accent-gradient text-text shadow-[0_8px_22px_rgba(191,148,83,0.22)] hover:shadow-[0_12px_26px_rgba(191,148,83,0.34)]"
      : "border border-border bg-surface text-text hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent-strong)]";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent-line)] ${classes}`}
    >
      {children}
    </a>
  );
}