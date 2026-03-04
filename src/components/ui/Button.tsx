"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "highlight";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full";

    const variants = {
      primary:
        "bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 focus-visible:ring-[var(--foreground)]",
      secondary:
        "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]",
      ghost:
        "bg-transparent text-[var(--foreground)] hover:bg-[var(--muted)] focus-visible:ring-[var(--foreground)]",
      highlight:
        "bg-[var(--highlight)] text-[#0a0a0a] hover:opacity-90 focus-visible:ring-[var(--highlight)]",
    };

    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-sm px-6 py-3",
      lg: "text-base px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
