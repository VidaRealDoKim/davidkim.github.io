import { NavBar } from "@/components/NavBar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const projects = [
  {
    name: "Projeto 01 — Em breve",
    description:
      "Case de UX/UI em preparação para publicação no portfólio.",
    outcome: "Upload em breve.",
  },
  {
    name: "Projeto 02 — Em breve",
    description:
      "Projeto de produto digital com foco em experiência e interface.",
    outcome: "Upload em breve.",
  },
  {
    name: "Projeto 03 — Em breve",
    description:
      "Detalhamento visual e processo de design serão adicionados em breve.",
    outcome: "Upload em breve.",
  },
];

const skills = [
  "UX/UI Design",
  "Figma",
  "Flutter",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Web Design",
  "Design Digital",
  "Branding e Social Media",
];

const experience = [
  {
    role: "Designer Freelancer",
    period: "jun 2023 — atualmente",
    organization: "Autônomo",
    bullets: [
      "Branding de marca e gestão de redes sociais.",
      "Criação de logotipos e peças criativas para campanhas digitais.",
    ],
  },
  {
    role: "Tutor de Tecnologia",
    period: "nov 2022 — mai 2023",
    organization: "Escola VMF",
    bullets: [
      "Aulas e acompanhamento em Web Design e Design Digital.",
      "Manutenção de computadores e servidores e suporte aos alunos.",
    ],
  },
  {
    role: "Atleta",
    period: "nov 2016 — fev 2023",
    organization: "Confederação Brasileira de Atletismo / Federação Catarinense",
    bullets: [
      "Atuação esportiva de alta disciplina e performance.",
      "Desenvolvimento de foco, consistência e mentalidade de evolução contínua.",
    ],
  },
  {
    role: "Estágio — Tutor de Tecnologia",
    period: "jan 2019 — jul 2019",
    organization: "Laboratório de Computação Científica",
    bullets: [
      "Atendimento a estudantes e suporte em laboratório.",
      "Impressão de documentos/plantas e organização do ambiente técnico.",
    ],
  },
];

const education = [
  {
    course: "Nutrição",
    institution: "UNIAVAN",
    status: "Cursando — conclusão prevista em 2026",
  },
];

const courses = [
  "Flutter (480h) — SENAI +Devs2Blu, 2025",
  "Design UX/UI (480h) — Proway, Entra 21, 2024",
  "Designer Digital (120h) — Escola VMF, 2023",
  "Web Designer (70h) — Escola VMF, 2022",
];

const certificationCategories = [
  {
    category: "UX/UI & Design",
    items: [
      {
        title: "Design UX/UI (480h)",
        provider: "Proway — Entra 21",
        year: "2024",
        url: "https://www.linkedin.com/in/davidluiskim/",
      },
      {
        title: "Designer Digital (120h)",
        provider: "Escola VMF",
        year: "2023",
        url: "https://www.linkedin.com/in/davidluiskim/",
      },
      {
        title: "Web Designer (70h)",
        provider: "Escola VMF",
        year: "2022",
        url: "https://www.linkedin.com/in/davidluiskim/",
      },
    ],
  },
  {
    category: "Desenvolvimento",
    items: [
      {
        title: "Flutter (480h)",
        provider: "SENAI — +Devs2Blu",
        year: "2025",
        url: "https://www.linkedin.com/in/davidluiskim/",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pb-24">
        <Section id="home" className="min-h-screen pt-32 md:pt-40">
          <Reveal>
            <p className="mb-8 text-sm font-medium tracking-[0.2em] uppercase text-muted">
              Blumenau, SC — Brasil
            </p>
            <h1 className="mb-8 max-w-5xl font-title text-6xl leading-[0.95] tracking-tight text-text md:text-8xl">
              David Kim
            </h1>
            <h2 className="max-w-3xl text-2xl font-medium text-text/85 md:text-4xl">
              UX/UI Designer
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
                Disciplina, foco e evolução constante em design.
              </h3>
              <p className="md:col-span-8 text-lg leading-relaxed text-text/85">
                Ao longo da minha trajetória, desenvolvi disciplina e foco como
                atleta, e depois ampliei minha formação para tecnologia e
                design. Atualmente atuo como Designer Freelancer (desde 2023),
                com experiência em branding, criação de logotipos, criativos e
                gestão de redes sociais. Também atuei como Tutor de Tecnologia,
                ensinando Web Design e Design Digital, além de suporte em
                laboratório e manutenção de computadores e servidores. Hoje,
                busco desafios em UX/UI Design, conectando visão estética,
                clareza de interface e experiência prática multidisciplinar.
              </p>
            </div>
          </Reveal>
        </Section>

        <Section id="experience" title="Experiência">
          <div className="grid gap-6">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * 70}>
                <article className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-semibold text-text">{item.role}</h3>
                    <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
                      {item.period}
                    </p>
                  </div>
                  <p className="mt-2 text-base text-text/80">{item.organization}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-text/85">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="education" title="Formação & Cursos">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
                <h3 className="text-2xl font-semibold text-text">Formação Acadêmica</h3>
                <div className="mt-5 space-y-4">
                  {education.map((item) => (
                    <div key={item.course}>
                      <p className="font-medium text-text">{item.course}</p>
                      <p className="text-sm text-muted">{item.institution}</p>
                      <p className="text-sm text-text/80">{item.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
                <h3 className="text-2xl font-semibold text-text">Cursos Relevantes</h3>
                <ul className="mt-5 grid gap-3 text-sm text-text/85">
                  {courses.map((course) => (
                    <li key={course}>• {course}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
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

        <Section id="certifications" title="Certificados">
          <div className="grid gap-6 lg:grid-cols-2">
            {certificationCategories.map((group, groupIndex) => (
              <Reveal key={group.category} delay={groupIndex * 100}>
                <div className="rounded-3xl border border-border bg-surface p-7 shadow-soft">
                  <h3 className="text-2xl font-semibold text-text">{group.category}</h3>
                  <div className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-2xl border border-border/70 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <p className="font-medium text-text">{item.title}</p>
                        <p className="mt-1 text-sm text-muted">
                          {item.provider} • {item.year}
                        </p>
                        <p className="mt-2 text-xs font-semibold tracking-[0.12em] uppercase text-text/70">
                          Ver certificado no LinkedIn
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft md:p-12">
              <h3 className="font-title text-3xl text-text md:text-5xl">
                Vamos construir algo incrível.
              </h3>
              <p className="mt-5 max-w-2xl text-lg text-text/80">
                Disponível para oportunidades e colaborações em UX/UI, produto
                digital e design visual.
              </p>
              <div className="mt-8 space-y-2 text-base text-text/85">
                <p>Email: david8.escola@gmail.com</p>
                <p>Telefone: (47) 99629-5564</p>
                <p>Localização: Blumenau, SC</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="mailto:david8.escola@gmail.com">david8.escola@gmail.com</Button>
                <Button href="https://www.linkedin.com/in/davidluiskim/" variant="secondary">
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
