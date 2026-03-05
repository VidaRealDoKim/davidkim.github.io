"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

const ABOUT_FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80";

export function AboutSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="about" title={dictionary.about.title} className="rounded-3xl bg-surface/40 px-6 md:px-10">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <h3 className="text-2xl font-semibold text-text md:text-3xl">
              {dictionary.about.heading}
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-text/85">
              {dictionary.about.description}
            </p>

            <h4 className="mt-8 text-sm font-semibold tracking-[0.1em] uppercase text-muted">
              {dictionary.about.skillsTitle}
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {dictionary.about.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border md:col-span-7">
            <Image
              src={dictionary.about.imageSrc}
              alt={dictionary.about.imageAlt}
              width={1400}
              height={900}
              unoptimized
              className="h-80 w-full object-cover md:h-[420px]"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = ABOUT_FALLBACK_IMAGE;
              }}
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
