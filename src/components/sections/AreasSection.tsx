"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

export function AreasSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="areas" title={dictionary.areas.title}>
      <Reveal>
        <p className="mb-10 max-w-3xl text-lg text-text/80">{dictionary.areas.subtitle}</p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {dictionary.areas.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 65}>
            <article className="h-full rounded-2xl border border-border bg-surface p-5 shadow-soft">
              <h3 className="text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text/80">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
