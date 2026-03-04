import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { personalInfo, skills, experiences } from "@/lib/data";
import { MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about David Kim — UX/UI & Product Designer with 8+ years of experience in San Francisco.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-4">
              About
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Designing at the
              <br />
              <span className="relative inline-block">
                intersection
                <span
                  className="absolute -bottom-1 left-0 h-1.5 w-full bg-[var(--highlight)]"
                  aria-hidden="true"
                />
              </span>{" "}
              of
              <br />
              beauty &amp; function.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 lg:py-32 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              {/* Photo placeholder */}
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-pink-500/20 border border-[var(--border)] flex items-end p-8">
                <div>
                  <div className="font-serif text-2xl font-bold text-[var(--foreground)]">
                    David Kim
                  </div>
                  <div className="text-[var(--muted-foreground)] text-sm mt-1 flex items-center gap-1.5">
                    <MapPin size={12} />
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-4">
                    Hi, I&apos;m David.
                  </h2>
                  {personalInfo.bio.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[var(--muted-foreground)] leading-relaxed mb-4"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    <Mail size={16} />
                    {personalInfo.email}
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 lg:py-32 border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-3">
              Capabilities
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)]">
              Skills &amp; Tools
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, i) => (
              <FadeIn key={skillGroup.category} delay={i * 0.08}>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wide mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Tag key={skill} variant="outline">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 lg:py-32 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-3">
              Career
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)]">
              Experience
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.07}>
                <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 py-10 border-b border-[var(--border)] last:border-0">
                  <div>
                    <div className="text-sm font-medium text-[var(--muted-foreground)]">
                      {exp.period}
                    </div>
                    <div className="text-xs text-[var(--muted-foreground)] mt-1 flex items-center gap-1">
                      <MapPin size={10} />
                      {exp.location}
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-3">
                      <h3 className="font-serif text-2xl font-bold text-[var(--foreground)]">
                        {exp.role}
                      </h3>
                      <span className="text-[var(--muted-foreground)]">
                        @ {exp.company}
                      </span>
                    </div>
                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]"
                        >
                          <span
                            className="w-1 h-1 rounded-full bg-[var(--highlight)] mt-2 flex-shrink-0"
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-3">
              Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)]">
              How I work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Start with why",
                body: "Every design decision has to earn its place. I always begin by understanding the problem deeply before reaching for a solution.",
              },
              {
                title: "Make it measurable",
                body: "Good design moves numbers. I collaborate closely with product and data teams to set clear success metrics and measure against them.",
              },
              {
                title: "Ship, then improve",
                body: "Perfection is the enemy of progress. I favour launching thoughtfully and iterating based on real user behaviour over endless pre-launch polish.",
              },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] h-full">
                  <div
                    className="w-10 h-10 rounded-full bg-[var(--highlight)] mb-6"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
