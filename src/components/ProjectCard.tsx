import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  slug: string;
  name: string;
  image: string;
  summary: string;
  caseStudyLabel: string;
};

export function ProjectCard({
  slug,
  name,
  image,
  summary,
  caseStudyLabel,
}: ProjectCardProps) {
  return (
    <article className="group h-full cursor-pointer overflow-hidden rounded-[28px] border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--accent-line)] hover:shadow-[0_22px_60px_rgba(31,31,31,0.12)] dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.42)]">
      <Link href={`/projects/${slug}`} className="flex h-full flex-col">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="text-xl font-semibold leading-tight text-text md:text-2xl">{name}</h3>
          <p className="mt-4 max-w-[40ch] text-sm leading-relaxed text-text/72 md:text-base">
            {summary}
          </p>

          <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-text transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[color:var(--accent-strong)]">
            {caseStudyLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}