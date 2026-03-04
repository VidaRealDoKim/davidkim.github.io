"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 lg:py-32 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-3">
              Selected Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--foreground)]">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              View all projects
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </FadeIn>
        </div>

        {/* Project grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                  {/* Color placeholder */}
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105 flex items-end p-6"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    <div className="text-white/80 text-sm font-medium">
                      {project.year}
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      View Case Study
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.category.slice(0, 2).map((cat) => (
                      <Tag key={cat}>{cat}</Tag>
                    ))}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[var(--foreground)] group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
