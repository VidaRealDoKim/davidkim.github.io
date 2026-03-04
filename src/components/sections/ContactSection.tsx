import { contactContent } from "@/content/portfolio";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id="contact" title={contactContent.title}>
      <Reveal>
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft md:p-12">
          <h3 className="font-title text-3xl text-text md:text-5xl">
            {contactContent.heading}
          </h3>
          <p className="mt-5 max-w-2xl text-lg text-text/80">
            {contactContent.description}
          </p>

          <div className="mt-8 space-y-2 text-base text-text/85">
            <p>Telefone: {contactContent.phone}</p>
            <p>Localização: {contactContent.location}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`mailto:${contactContent.email}`}>Send Email</Button>
            {contactContent.links.map((link) => (
              <Button key={link.label} href={link.href} variant="secondary">
                {link.label}
              </Button>
            ))}
            <Button href="#home" variant="secondary">
              Back to Top
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
