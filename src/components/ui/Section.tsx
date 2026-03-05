import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-[min(1120px,92vw)] py-20 md:py-28 ${className ?? ""}`}>
      {title ? (
        <div className="mb-10">
          <h2 className="font-title text-4xl tracking-tight text-text md:text-6xl">{title}</h2>
          <div className="mt-4 h-px w-24 accent-divider" />
        </div>
      ) : null}
      {children}
    </section>
  );
}