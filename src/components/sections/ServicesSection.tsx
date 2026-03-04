"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "UX Research & Strategy",
    description:
      "I uncover user needs and business goals through rigorous research methods — interviews, usability testing, and data analysis — to set a solid strategic foundation.",
    tools: ["User Interviews", "Usability Testing", "Jobs to Be Done", "A/B Testing"],
  },
  {
    number: "02",
    title: "Interaction Design",
    description:
      "I design thoughtful, intuitive flows and interactions that guide users effortlessly toward their goals, balancing simplicity with power.",
    tools: ["Wireframing", "Prototyping", "Figma", "ProtoPie"],
  },
  {
    number: "03",
    title: "Visual & UI Design",
    description:
      "I create refined, pixel-perfect visual designs that communicate brand identity, build trust, and deliver genuine delight across every breakpoint.",
    tools: ["UI Design", "Design Systems", "Typography", "Motion Design"],
  },
  {
    number: "04",
    title: "Product Strategy",
    description:
      "I bridge the gap between design and business, helping teams prioritise the right problems, align on vision, and ship with confidence.",
    tools: ["Roadmapping", "OKRs", "Design Sprints", "Stakeholder Alignment"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-3">
            What I Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)]">
            Services &amp; Expertise
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)]">
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
              className="bg-[var(--background)] p-8 lg:p-10 hover:bg-[var(--surface)] transition-colors duration-200 group"
            >
              <div className="text-xs font-mono text-[var(--muted-foreground)] mb-4">
                {service.number}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--foreground)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-[var(--muted-foreground)] border border-[var(--border)] px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
