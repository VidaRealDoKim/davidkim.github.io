"use client";

import Image from "next/image";
import Link from "next/link";

import { LanguageToggle } from "@/components/LanguageToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { Reveal } from "@/components/ui/Reveal";
import { useI18n } from "@/i18n/I18nProvider";

type ProjectDetailPageProps = {
  slug: string;
};

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const { dictionary } = useI18n();
  const project = dictionary.projects.list.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  const category = dictionary.projects.categories.find((item) => item.id === project.category);
  const gallery: string[] = [project.image];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/88 backdrop-blur-md">
        <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-4 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-text transition-colors hover:text-[color:var(--accent-strong)]"
          >
            <span aria-hidden="true">←</span>
            {dictionary.projects.backToProjectsLabel}
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pb-24 pt-10 md:pt-14">
        <section className="mx-auto grid w-[min(1120px,92vw)] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <Reveal>
            <div>
              {category ? (
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                  {category.label}
                </p>
              ) : null}

              <h1 className="font-title text-4xl leading-[0.95] tracking-tight text-text md:text-6xl">
                {project.name}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text/78 md:text-xl">
                {project.solution}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text/68 md:text-base">
                {project.result}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#projects"
                  className="inline-flex items-center rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent-line)]"
                >
                  {dictionary.projects.backToProjectsLabel}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="overflow-hidden rounded-[32px] border border-border bg-surface shadow-soft">
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 w-[min(1120px,92vw)] md:mt-20">
          <div className="grid gap-5 md:grid-cols-3">
            <Reveal>
              <article className="rounded-[28px] border border-border bg-surface p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--accent-strong)]">
                  {dictionary.projects.labels.problem}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text/80 md:text-base">{project.problem}</p>
              </article>
            </Reveal>

            <Reveal delay={70}>
              <article className="rounded-[28px] border border-border bg-surface p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--accent-strong)]">
                  {dictionary.projects.labels.solution}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text/80 md:text-base">{project.solution}</p>
              </article>
            </Reveal>

            <Reveal delay={140}>
              <article className="rounded-[28px] border border-border bg-surface p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--accent-strong)]">
                  {dictionary.projects.labels.result}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-text/80 md:text-base">{project.result}</p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto mt-16 w-[min(1120px,92vw)] md:mt-20">
          <Reveal>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
                {dictionary.projects.showroomLabel}
              </p>
              <h2 className="mt-3 font-title text-3xl tracking-tight text-text md:text-5xl">{project.name}</h2>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="overflow-hidden rounded-[36px] border border-border bg-surface shadow-soft">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-2">
              {gallery.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="min-w-[82%] snap-start overflow-hidden rounded-[28px] border border-border bg-surface shadow-soft md:min-w-[46%] lg:min-w-[32%]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={item} alt={`${project.name} ${index + 1}`} fill sizes="33vw" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}