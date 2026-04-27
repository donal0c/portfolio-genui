"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[var(--border)] px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="About" title="Short version." />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-lg leading-8 text-[var(--text-muted)] sm:text-xl sm:leading-9"
        >
          I build tools with AI that solve real problems, from civic data
          platforms to personal knowledge systems. I ship fast, think big, and
          work in public. Based in Ireland, available for interesting work.
        </motion.p>
      </div>
    </section>
  );
}
