"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

export function ProjectsSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="projects" title={dictionary.projects.title}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {dictionary.projects.list.map((project, index) => (
          <Reveal key={project.name} delay={index * 80}>
            <ProjectCard {...project} caseStudyLabel={dictionary.projects.caseStudyLabel} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
