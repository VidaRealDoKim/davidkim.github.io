"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

export function HeroSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="home" className="min-h-screen pt-32 md:pt-40">
      <Reveal>
        <p className="mb-8 text-sm font-medium tracking-[0.2em] uppercase text-muted">
          {dictionary.hero.location}
        </p>
        <h1 className="mb-8 max-w-5xl font-title text-6xl leading-[0.95] tracking-tight text-text md:text-8xl">
          {dictionary.hero.name}
        </h1>
        <h2 className="max-w-3xl text-2xl font-medium text-text/85 md:text-4xl">
          {dictionary.hero.title}
        </h2>
        <div className="mt-12 flex flex-wrap gap-4">
          <Button href="#projects">{dictionary.hero.buttons.projects}</Button>
          <Button href="#contact" variant="secondary">
            {dictionary.hero.buttons.contact}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
