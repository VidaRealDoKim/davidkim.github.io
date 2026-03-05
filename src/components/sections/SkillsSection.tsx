"use client";

import { SkillCard } from "@/components/SkillCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

export function SkillsSection() {
  const { dictionary } = useI18n();
  const allSkills = dictionary.technologies.groups.flatMap((group) => group.items);

  return (
    <Section id="skills" title={dictionary.technologies.title}>
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {allSkills.map((skill) => (
            <SkillCard key={skill} label={skill} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
