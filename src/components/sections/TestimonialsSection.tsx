"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

export function TestimonialsSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="testimonials" title={dictionary.testimonials.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {dictionary.testimonials.list.map((testimonial, index) => (
          <Reveal key={`${testimonial.author}-${index}`} delay={index * 90}>
            <figure className="rounded-2xl border border-border bg-surface p-7 shadow-soft">
              <blockquote className="text-lg leading-relaxed text-text/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold uppercase tracking-[0.09em] text-muted">
                {testimonial.author}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
