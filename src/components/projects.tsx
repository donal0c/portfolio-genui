"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-[var(--border)] px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Work" title="Selected Work" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex min-h-44 items-center justify-between gap-8 border-y border-[var(--border)] py-10"
        >
          <p className="max-w-xl text-lg text-[var(--text-muted)]">
            Coming soon — currently curating.
          </p>
          <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-dim)] sm:block">
            Curating
          </span>
        </motion.div>
      </div>
    </section>
  );
}
