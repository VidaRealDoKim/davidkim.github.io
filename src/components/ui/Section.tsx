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
        <h2 className="mb-10 font-title text-4xl tracking-tight text-text md:text-6xl">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}