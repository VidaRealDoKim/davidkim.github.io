import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function AboutTeaser() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-3">
              About Me
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Designing with
              <br />
              purpose &amp; precision
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-8 max-w-md">
              With 8+ years of experience across startups and enterprise, I
              bring a systems-thinking approach to every problem — always
              starting with the user and working toward measurable outcomes.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/about" className="inline-flex items-center gap-2">
                More About Me
                <ArrowRight size={16} />
              </Link>
            </Button>
          </FadeIn>

          <FadeIn delay={0.15} direction="left">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "8+", label: "Years of Experience" },
                { number: "40+", label: "Projects Shipped" },
                { number: "12", label: "Teams Collaborated With" },
                { number: "3", label: "Design Awards" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--background)]"
                >
                  <div className="font-serif text-4xl font-bold text-[var(--foreground)] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
