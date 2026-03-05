"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

export function DesignProcessSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="process" title={dictionary.process.title}>
      <Reveal>
        <p className="mb-10 max-w-3xl text-lg text-text/80">{dictionary.process.description}</p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-5">
        {dictionary.process.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 80}>
            <article className="h-full rounded-2xl border border-border bg-surface p-5 shadow-soft">
              <p className="text-xs font-semibold tracking-[0.14em] uppercase text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text/80">{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
