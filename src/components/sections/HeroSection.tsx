"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

const HERO_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80";

export function HeroSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="home" className="min-h-screen pt-32 md:pt-40">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <p className="mb-8 text-sm font-medium tracking-[0.2em] uppercase text-muted">
              {dictionary.hero.location}
            </p>
            <h1 className="mb-8 max-w-5xl font-title text-5xl leading-[0.96] tracking-tight text-text md:text-7xl">
              {dictionary.hero.name}
            </h1>
            <h2 className="max-w-3xl text-xl font-medium text-text/85 md:text-3xl">
              {dictionary.hero.title}
            </h2>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button href="#projects">{dictionary.hero.buttons.projects}</Button>
              <Button href="#contact" variant="secondary">
                {dictionary.hero.buttons.contact}
              </Button>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
              <Image
                src={dictionary.hero.imageSrc}
                alt={dictionary.hero.imageAlt}
                width={900}
                height={1000}
                unoptimized
                className="h-[420px] w-full object-cover md:h-[520px]"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = HERO_FALLBACK_IMAGE;
                }}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
