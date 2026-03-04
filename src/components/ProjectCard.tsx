type ProjectCardProps = {
  name: string;
  description: string;
  outcome: string;
};

export function ProjectCard({ name, description, outcome }: ProjectCardProps) {
  return (
    <article className="group h-full rounded-3xl border border-border bg-surface p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5">
      <h3 className="text-2xl font-semibold text-text">{name}</h3>
      <p className="mt-4 text-base leading-relaxed text-text/80">{description}</p>
      <p className="mt-8 text-sm font-medium text-muted">{outcome}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-text/20 to-transparent transition-opacity duration-400 group-hover:opacity-100" />
    </article>
  );
}