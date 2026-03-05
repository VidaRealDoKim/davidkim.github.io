"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

const techBadge: Record<string, string> = {
  Figma: "FI",
  "Adobe Photoshop": "PS",
  "Adobe Illustrator": "AI",
  "After Effects": "AE",
  "Design Systems": "DS",
  HTML: "HT",
  CSS: "CS",
  JavaScript: "JS",
  Flutter: "FL",
  Dart: "DT",
  Supabase: "SB",
  "Integracao com APIs": "AP",
  "API Integration": "AP",
  "Banco de dados": "DB",
  Databases: "DB",
  "UX Research": "UX",
  Wireframes: "WF",
  Prototipacao: "PR",
  Prototyping: "PR",
  "User Flows": "UF",
};

export function TechnologiesSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="tools" title={dictionary.technologies.title}>
      <div className="space-y-12">
        {dictionary.technologies.groups.map((group, groupIndex) => (
          <Reveal key={group.title} delay={groupIndex * 80}>
            <article>
              <h3 className="mb-5 text-2xl font-semibold tracking-tight text-text md:text-3xl">
                {group.title}
              </h3>
              <div className="mb-5 h-px w-16 accent-divider" />

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="group/card flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border/70 bg-surface px-3 py-3 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent-line)] hover:bg-background/35"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-[10px] font-semibold tracking-[0.08em] text-muted transition-all duration-300 group-hover/card:scale-105 group-hover/card:border-[color:var(--accent-line)] group-hover/card:text-[color:var(--accent-strong)]">
                      {techBadge[item] ?? item.slice(0, 2).toUpperCase()}
                    </span>
                    <p className="text-xs font-medium leading-tight text-text/90 md:text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
