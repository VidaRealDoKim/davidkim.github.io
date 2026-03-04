import Image from "next/image";

type ProjectCardProps = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  caseStudyHref: string;
};

export function ProjectCard({
  name,
  description,
  image,
  tags,
  caseStudyHref,
}: ProjectCardProps) {
  const isExternalLink = caseStudyHref.startsWith("http://") || caseStudyHref.startsWith("https://");

  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_56px_rgba(31,31,31,0.14)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
      <div className="relative h-52 overflow-hidden md:h-56">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-semibold text-text">{name}</h3>
        <p className="mt-4 text-base leading-relaxed text-text/80">{description}</p>

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
          View Case Study
        </a>
      </div>
    </article>
  );
}