import { heroContent } from "@/content/portfolio";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function HeroSection() {
  return (
    <Section id="home" className="min-h-screen pt-32 md:pt-40">
      <Reveal>
        <p className="mb-8 text-sm font-medium tracking-[0.2em] uppercase text-muted">
          {heroContent.location}
        </p>
        <h1 className="mb-8 max-w-5xl font-title text-6xl leading-[0.95] tracking-tight text-text md:text-8xl">
          {heroContent.name}
        </h1>
        <h2 className="max-w-3xl text-2xl font-medium text-text/85 md:text-4xl">
          {heroContent.title}
        </h2>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
