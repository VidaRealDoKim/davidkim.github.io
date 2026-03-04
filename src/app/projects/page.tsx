"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const allCategories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.category)))];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 lg:py-32 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-4">
              Work
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Selected Projects
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-xl">
              A collection of case studies spanning UX research, product design,
              and design systems.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-[var(--border)] sticky top-16 md:top-20 bg-[var(--background)]/90 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter projects by category">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
                className={cn(
                  "text-sm px-4 py-1.5 rounded-full border transition-all duration-200",
                  activeFilter === cat
                    ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
                    : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-2xl aspect-video mb-5">
                      <div
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105 flex items-end p-6"
                        style={{ backgroundColor: project.accentColor }}
                      >
                        <div className="text-white/70 text-sm font-mono">
                          {project.year} — {project.client}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          View Case Study
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.category.map((cat) => (
                          <Tag key={cat}>{cat}</Tag>
                        ))}
                      </div>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="font-serif text-2xl font-bold text-[var(--foreground)] group-hover:opacity-70 transition-opacity">
                            {project.title}
                          </h2>
                          <p className="text-[var(--muted-foreground)] text-sm mt-1">
                            {project.subtitle}
                          </p>
                        </div>
                        <ArrowUpRight
                          size={20}
                          className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
