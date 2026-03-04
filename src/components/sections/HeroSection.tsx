"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Available badge */}
        {personalInfo.available && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] text-xs text-[var(--muted-foreground)] mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            Available for new projects
          </motion.div>
        )}

        {/* Main heading */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight text-[var(--foreground)] mb-6"
          >
            David
            <br />
            <span className="relative">
              Kim
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
                className="absolute -bottom-2 left-0 h-2 w-full bg-[var(--highlight)] origin-left"
                aria-hidden="true"
              />
            </span>
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mt-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-[var(--muted-foreground)] max-w-xl leading-relaxed"
          >
            UX/UI &amp; Product Designer based in{" "}
            <span className="text-[var(--foreground)]">San Francisco</span>.
            <br />
            I craft digital experiences that make people&apos;s lives easier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/projects">View Work</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-[var(--border)] to-transparent"
          />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-[var(--highlight)]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-indigo-500/5 blur-[100px] rounded-full" />
      </div>
    </section>
  );
}
