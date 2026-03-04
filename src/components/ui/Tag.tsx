import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
}

export function Tag({ children, className, variant = "default" }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-3 py-1 rounded-full",
        variant === "default"
          ? "bg-[var(--muted)] text-[var(--muted-foreground)]"
          : "border border-[var(--border)] text-[var(--muted-foreground)]",
        className
      )}
    >
      {children}
    </span>
  );
}
