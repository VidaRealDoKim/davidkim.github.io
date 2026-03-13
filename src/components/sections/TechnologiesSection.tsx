"use client";

import type { IconType } from "react-icons";
import { SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiHtml5, SiCss3, SiJavascript, SiFlutter, SiDart, SiSupabase } from "react-icons/si";
import { HiViewGrid, HiCode, HiDatabase, HiSearch, HiDocumentText, HiCursorClick, HiShare } from "react-icons/hi";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

type TechEntry = { icon: IconType; color?: string };

const techIcons: Record<string, TechEntry> = {
  Figma:                  { icon: SiFigma,              color: "#F24E1E" },
  "Adobe Photoshop":      { icon: SiAdobephotoshop,     color: "#31A8FF" },
  "Adobe Illustrator":    { icon: SiAdobeillustrator,   color: "#FF9A00" },
  "After Effects":        { icon: SiAdobeaftereffects,  color: "#9999FF" },
  "Design Systems":       { icon: HiViewGrid },
  HTML:                   { icon: SiHtml5,              color: "#E34F26" },
  CSS:                    { icon: SiCss3,               color: "#1572B6" },
  JavaScript:             { icon: SiJavascript,         color: "#F7DF1E" },
  Flutter:                { icon: SiFlutter,            color: "#54C5F8" },
  Dart:                   { icon: SiDart,               color: "#0175C2" },
  Supabase:               { icon: SiSupabase,           color: "#3ECF8E" },
  "Integracao com APIs":  { icon: HiCode },
  "API Integration":      { icon: HiCode },
  "Banco de dados":       { icon: HiDatabase },
  Databases:              { icon: HiDatabase },
  "UX Research":          { icon: HiSearch },
  Wireframes:             { icon: HiDocumentText },
  Prototipacao:           { icon: HiCursorClick },
  Prototyping:            { icon: HiCursorClick },
  "User Flows":           { icon: HiShare },
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
                {group.items.map((item) => {
                  const entry = techIcons[item];
                  const Icon = entry?.icon;
                  return (
                    <div
                      key={item}
                      className="group/card flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-border/70 bg-surface px-3 py-3 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent-line)] hover:bg-background/35"
                    >
                      <span
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-muted"
                        style={entry?.color ? { color: entry.color } : undefined}
                      >
                        {Icon ? (
                          <Icon size={22} />
                        ) : (
                          <span className="text-[10px] font-semibold tracking-[0.08em]">
                            {item.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </span>
                      <p className="text-xs font-medium leading-tight text-text/90 md:text-sm">{item}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
