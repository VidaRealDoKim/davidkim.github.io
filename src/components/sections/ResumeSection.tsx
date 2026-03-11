"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

type ResumeExperienceItem = {
  role: string;
  period: string;
  organization?: string;
  bullets: string[];
};

type ResumeListSection = {
  title: string;
  items: string[];
};

type ResumeCertificationItem = {
  title: string;
  provider: string;
  year?: string;
  description: string;
  certificateUrl?: string;
};

export function ResumeSection() {
  const { dictionary } = useI18n();
  const resume = dictionary.resume;
  const educationAndCertifications = resume.educationAndCertifications;

  return (
    <Section id="resume" title={resume.title}>
      <div className="space-y-14">
        <Reveal>
          <article className="rounded-2xl border border-border bg-surface p-6 shadow-soft md:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{resume.summary.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-text/85 md:text-lg">{resume.summary.text}</p>
          </article>
        </Reveal>

        <Reveal delay={40}>
          <article>
            <h3 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{resume.professionalExperience.title}</h3>
            <div className="mt-4 h-px w-16 accent-divider" />

            <div className="mt-8 space-y-5">
              {resume.professionalExperience.items.map((item: ResumeExperienceItem) => (
                <div key={`${item.role}-${item.organization ?? ""}`} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-semibold text-text md:text-xl">{item.role}</h4>
                    <span className="text-xs font-medium uppercase tracking-[0.08em] text-muted">{item.period}</span>
                  </div>
                  {item.organization ? <p className="mt-1 text-sm text-muted">{item.organization}</p> : null}
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text/85 md:text-base">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          {[resume.designExperience, resume.developmentExperience].map((section: ResumeListSection, index) => (
            <Reveal key={section.title} delay={80 + index * 40}>
              <article>
                <h3 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{section.title}</h3>
                <div className="mt-4 h-px w-16 accent-divider" />
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text/85 md:text-base">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <article>
          <Reveal delay={80}>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{educationAndCertifications.title}</h3>
              <div className="mt-4 h-px w-16 accent-divider" />
            </div>
          </Reveal>
          <div className="relative mt-10">
            <div
              className="absolute left-[5px] top-1 bottom-1 w-0.5 rounded-full bg-border"
              aria-hidden="true"
            />
            {educationAndCertifications.items.map((item: ResumeCertificationItem, index: number) => (
              <Reveal key={`${item.title}-${item.provider}`} delay={index < 6 ? index * 60 : 0}>
                <div className="relative pl-9 pb-7">
                  <span
                    className="absolute left-0 top-[6px] block h-3 w-3 rounded-full border-2 bg-background"
                    style={{ borderColor: "var(--accent-line)" }}
                    aria-hidden="true"
                  />
                  {item.year ? (
                    <span
                      className="text-[10px] font-bold tracking-[0.12em] uppercase"
                      style={{ color: "var(--accent-strong)" }}
                    >
                      {item.year}
                    </span>
                  ) : null}
                  <h4 className="mt-0.5 text-sm font-semibold leading-snug text-text md:text-base">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-xs font-medium text-muted">{item.provider}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-text/70 md:text-sm">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </article>

        <Reveal delay={200}>
          <article>
            <h3 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{resume.technicalSkills.title}</h3>
            <div className="mt-4 h-px w-16 accent-divider" />
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {resume.technicalSkills.groups.map((group: ResumeListSection) => (
                <div key={group.title} className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">{group.title}</h4>
                  <ul className="mt-4 space-y-2 text-sm text-text/85">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={240}>
          <article className="rounded-2xl border border-border bg-surface p-6 shadow-soft md:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-text md:text-3xl">{resume.additionalExperience.title}</h3>
            <h4 className="mt-5 text-lg font-semibold text-text md:text-xl">{resume.additionalExperience.role}</h4>
            <p className="mt-1 text-sm text-muted">{resume.additionalExperience.organization}</p>
            <p className="mt-4 text-sm leading-relaxed text-text/85 md:text-base">{resume.additionalExperience.description}</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text/85 md:text-base">
              {resume.additionalExperience.events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-text/85 md:text-base">{resume.additionalExperience.achievement}</p>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
