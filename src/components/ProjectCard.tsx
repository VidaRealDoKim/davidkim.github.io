import Image from "next/image";

type ProjectCardProps = {
  name: string;
  categoryLabel: string;
  imageLabel: string;
  image: string;
  tags: string[];
  problem: string;
  solution: string;
  result: string;
  labels: {
    problem: string;
    solution: string;
    result: string;
  };
  caseStudyHref: string;
  caseStudyLabel: string;
};

export function ProjectCard({
  name,
  categoryLabel,
  imageLabel,
  image,
  tags,
  problem,
  solution,
  result,
  labels,
  caseStudyHref,
  caseStudyLabel,
}: ProjectCardProps) {
  const isExternalLink = caseStudyHref.startsWith("http://") || caseStudyHref.startsWith("https://");

  return (
    <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--accent-line)] hover:shadow-[0_20px_56px_rgba(31,31,31,0.14)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <span className="absolute top-0 right-0 z-10 h-10 w-10 bg-[linear-gradient(135deg,rgba(191,148,83,0.35),transparent_70%)]" />
      <div className="relative h-52 overflow-hidden md:h-56">
        <span className="absolute top-3 left-3 z-10 rounded-full border border-border/70 bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
          {imageLabel}
        </span>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-7">
        <p className="mb-2 text-xs font-semibold tracking-[0.12em] uppercase text-muted">{categoryLabel}</p>
        <h3 className="text-2xl font-semibold text-text">{name}</h3>

        <div className="mt-5 space-y-3 text-sm leading-relaxed text-text/80">
          <p>
            <strong className="text-text">{labels.problem}:</strong> {problem}
          </p>
          <p>
            <strong className="text-text">{labels.solution}:</strong> {solution}
          </p>
          <p>
            <strong className="text-text">{labels.result}:</strong> {result}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={caseStudyHref}
          target={isExternalLink ? "_blank" : undefined}
          rel={isExternalLink ? "noreferrer" : undefined}
          className="mt-7 inline-flex items-center text-sm font-semibold uppercase tracking-[0.08em] text-text transition-all duration-300 hover:translate-x-1"
        >
          {caseStudyLabel}
        </a>
      </div>
    </article>
  );
}