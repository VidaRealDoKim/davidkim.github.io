type SkillCardProps = {
  label: string;
};

export function SkillCard({ label }: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm font-medium text-text shadow-soft transition-transform duration-300 hover:-translate-y-1">
      {label}
    </div>
  );
}