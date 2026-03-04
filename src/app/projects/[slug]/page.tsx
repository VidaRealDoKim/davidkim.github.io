import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, User, Calendar } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.map((cat) => (
                <Tag key={cat} variant="outline">
                  {cat}
                </Tag>
              ))}
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--foreground)] leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mb-12">
              {project.subtitle}
            </p>

            {/* Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-[var(--border)]">
              {[
                { icon: User, label: "Role", value: project.role },
                { icon: Calendar, label: "Year", value: project.year },
                { icon: Clock, label: "Duration", value: project.duration },
                { icon: User, label: "Client", value: project.client },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
                    <Icon size={12} />
                    {label}
                  </div>
                  <div className="text-sm font-medium text-[var(--foreground)]">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Large image */}
      <FadeIn>
        <div
          className="w-full aspect-video max-h-[600px] flex items-center justify-center"
          style={{ backgroundColor: project.accentColor }}
          aria-label={`${project.title} project preview`}
        >
          <div className="text-white/40 text-sm font-mono">
            {project.title} — {project.year}
          </div>
        </div>
      </FadeIn>

      {/* Case Study Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 space-y-24">
        {/* Overview */}
        <FadeIn>
          <section>
            <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-6">
              Overview
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {project.overview}
            </p>
          </section>
        </FadeIn>

        {/* Challenge */}
        <FadeIn>
          <section className="p-8 lg:p-12 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
            <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {project.challenge}
            </p>
          </section>
        </FadeIn>

        {/* Process */}
        <FadeIn>
          <section>
            <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-8">
              Process
            </h2>
            <ol className="space-y-6">
              {project.process.map((step, i) => (
                <li key={i} className="flex items-start gap-6">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#0a0a0a]"
                    style={{ backgroundColor: project.accentColor + "33" }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="text-[var(--muted-foreground)] leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        {/* Solution */}
        <FadeIn>
          <section>
            <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-6">
              Solution
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {project.solution}
            </p>
          </section>
        </FadeIn>

        {/* Results */}
        <FadeIn>
          <section>
            <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-8">
              Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((result, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] flex items-start gap-3"
                >
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                    style={{ backgroundColor: project.accentColor }}
                    aria-hidden="true"
                  />
                  <p className="text-sm text-[var(--foreground)] leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Tags */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 pt-8 border-t border-[var(--border)]">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="outline">
                {tag}
              </Tag>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Next/Prev Navigation */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-4 p-8 hover:bg-[var(--surface)] transition-colors"
              >
                <ArrowLeft
                  size={20}
                  className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors"
                />
                <div>
                  <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
                    Previous
                  </div>
                  <div className="font-serif text-lg font-bold text-[var(--foreground)]">
                    {prevProject.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-end gap-4 p-8 hover:bg-[var(--surface)] transition-colors text-right"
              >
                <div>
                  <div className="text-xs text-[var(--muted-foreground)] uppercase tracking-wide mb-1">
                    Next
                  </div>
                  <div className="font-serif text-lg font-bold text-[var(--foreground)]">
                    {nextProject.title}
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
