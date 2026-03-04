import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-accent-gradient text-text"
      : "border border-border bg-surface text-text";

  return (
    <a
      href={href}
      className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft ${classes}`}
    >
      {children}
    </a>
  );
}