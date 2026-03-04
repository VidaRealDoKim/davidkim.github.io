"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { useI18n } from "@/i18n/I18nProvider";

export function ContactSection() {
  const { dictionary } = useI18n();

  return (
    <Section id="contact" title={dictionary.contact.title}>
      <Reveal>
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft md:p-12">
          <h3 className="font-title text-3xl text-text md:text-5xl">
            {dictionary.contact.heading}
          </h3>
          <p className="mt-5 max-w-2xl text-lg text-text/80">
            {dictionary.contact.description}
          </p>

          <div className="mt-8 space-y-2 text-base text-text/85">
            <p>
              {dictionary.contact.phoneLabel}: {dictionary.contact.phone}
            </p>
            <p>
              {dictionary.contact.locationLabel}: {dictionary.contact.location}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`mailto:${dictionary.contact.email}`}>{dictionary.contact.buttons.email}</Button>
            {dictionary.contact.links.map((link) => (
              <Button key={link.label} href={link.href} variant="secondary">
                {link.label}
              </Button>
            ))}
            <Button href="#home" variant="secondary">
              {dictionary.contact.buttons.backToTop}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
