import { skillsContent } from "@/content/portfolio";
import { SkillCard } from "@/components/SkillCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills">
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillsContent.map((skill) => (
            <SkillCard key={skill} label={skill} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
