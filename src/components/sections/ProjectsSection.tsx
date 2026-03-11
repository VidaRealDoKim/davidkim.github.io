"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";
import type { ManagedProjectRecord } from "@/lib/project-catalog";

type ProjectsSectionProps = {
  managedProjects: ManagedProjectRecord[];
};

export function ProjectsSection({ managedProjects }: ProjectsSectionProps) {
  const { dictionary, locale } = useI18n();
  const groupedProjects = dictionary.projects.categories.map((category) => ({
    ...category,
    projects: managedProjects.filter((project) => project.category === category.id),
  }));

  return (
    <Section id="projects" title={dictionary.projects.title}>
      <Reveal>
        <p className="mb-10 max-w-3xl text-lg text-text/80">{dictionary.projects.subtitle}</p>
      </Reveal>

      <div className="mb-8 flex flex-wrap gap-2">
        {dictionary.projects.categories.map((category) => (
          <span
            key={category.id}
            className="rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted"
          >
            {category.label}
          </span>
        ))}
      </div>

      <div className="space-y-12">
        {groupedProjects.map((category, categoryIndex) => (
          <div key={category.id}>
            <Reveal delay={categoryIndex * 60}>
              <h3 className="mb-5 text-2xl font-semibold text-text">{category.label}</h3>
            </Reveal>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {category.projects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 70}>
                  {(() => {
                    const content = locale === "pt" ? project.pt : project.en;

                    return (
                  <ProjectCard
                    slug={project.slug}
                    name={content.name}
                    image={project.media.coverImage}
                    summary={content.summary}
                    caseStudyLabel={dictionary.projects.caseStudyLabel}
                  />
                    );
                  })()}
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
