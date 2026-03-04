import { projectsContent } from "@/content/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectsContent.map((project, index) => (
          <Reveal key={project.name} delay={index * 80}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
