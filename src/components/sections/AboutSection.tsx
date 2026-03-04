import Image from "next/image";
import { aboutContent } from "@/content/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function AboutSection() {
  return (
    <Section id="about" title={aboutContent.title} className="rounded-3xl bg-surface/40 px-6 md:px-10">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <h3 className="text-2xl font-semibold text-text md:text-3xl">
              {aboutContent.heading}
            </h3>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border md:col-span-5">
            <Image
              src={aboutContent.imageSrc}
              alt={aboutContent.imageAlt}
              width={1400}
              height={900}
              className="h-72 w-full object-cover"
            />
          </div>

          <p className="text-lg leading-relaxed text-text/85 md:col-span-3">
            {aboutContent.description}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
