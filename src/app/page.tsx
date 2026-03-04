import { NavBar } from "@/components/NavBar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const projects = [
  {
    name: "Aurora Banking",
    description:
      "Redesigned a digital banking experience with a cleaner information architecture and frictionless onboarding.",
    outcome: "Increased onboarding completion by 31%.",
  },
  {
    name: "Nexa Commerce",
    description:
      "Built a modular product discovery flow blending editorial storytelling with high-conversion UX patterns.",
    outcome: "Raised product page conversion by 24%.",
  },
  {
    name: "Pulse Health",
    description:
      "Created a patient-first mobile platform focused on clarity, trust, and accessible interaction design.",
    outcome: "Reduced task completion time by 37%.",
  },
];

const skills = [
  "Product Strategy",
  "UX Research",
  "Interaction Design",
  "Design Systems",
  "Prototyping",
  "Usability Testing",
  "Visual Design",
  "Cross-functional Leadership",
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pb-24">
        <Section id="home" className="min-h-screen pt-32 md:pt-40">
          <Reveal>
            <p className="mb-8 text-sm font-medium tracking-[0.2em] uppercase text-muted">
              David Kim — Portfolio
            </p>
            <h1 className="mb-8 max-w-5xl font-title text-6xl leading-[0.95] tracking-tight text-text md:text-8xl">
              David Kim
            </h1>
            <h2 className="max-w-3xl text-2xl font-medium text-text/85 md:text-4xl">
              Product Designer &amp; UX/UI
            </h2>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="#projects">View Projects</Button>
              <Button href="#contact" variant="secondary">
                Contact
              </Button>
            </div>
          </Reveal>
        </Section>

        <Section id="about" title="About">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-12">
              <h3 className="md:col-span-4 text-2xl font-semibold text-text md:text-3xl">
                Building elegant products with intention.
              </h3>
              <p className="md:col-span-8 text-lg leading-relaxed text-text/85">
                I design digital products that balance utility, emotion, and
                clarity. My work sits at the intersection of product thinking,
                interface craft, and user-centered systems. Over the past 8
                years, I have partnered with startups and enterprise teams to
                create experiences that feel effortless while solving complex
                business challenges.
              </p>
            </div>
          </Reveal>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 80}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm font-medium text-text shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Reveal>
        </Section>

        <Section id="contact" title="Contact">
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft md:p-12">
              <h3 className="font-title text-3xl text-text md:text-5xl">
                Let&apos;s create something exceptional.
              </h3>
              <p className="mt-5 max-w-2xl text-lg text-text/80">
                Open for select collaborations in product design, UX strategy,
                and design systems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="mailto:hello@davidkim.design">hello@davidkim.design</Button>
                <Button href="https://www.linkedin.com" variant="secondary">
                  LinkedIn
                </Button>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} David Kim. All rights reserved.</p>
          <p>Designed with focus, precision, and intent.</p>
        </div>
      </footer>
    </>
  );
}
