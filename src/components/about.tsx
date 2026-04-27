"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const stats = [
  { label: "Years engineering", value: "10+" },
  { label: "Side projects shipped", value: "20+" },
  { label: "Base of operations", value: "Ireland" },
  { label: "Primary stack", value: "TS + Python" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[var(--border)] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="The short version." />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-[var(--text-muted)]"
          >
            <p className="text-lg leading-relaxed">
              I&rsquo;m Donal — an AI engineer in Ireland. I build with Claude
              Code, Codex, and agent frameworks, and I ship things.
            </p>

            <p className="text-lg leading-relaxed">
              Origin story: I was a bored software engineer. Good at the job,
              but going through the motions. Then AI showed up and actually
              delivered on the hype. Everything changed. The leverage is wild —
              ideas that used to sit in a Notes app for years now ship in a
              weekend.
            </p>

            <p className="text-lg leading-relaxed">
              Now I ship fast and think big. I work on things that make
              everyday life a bit better — farm data, historic maps, energy
              bills, mountain rescue, a tap game for my kids. If it&rsquo;s
              useful and nobody else is building it, that&rsquo;s usually where
              I start.
            </p>

            <p className="text-lg leading-relaxed">
              I like clean code, blunt conversations, and building in public.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 gap-3 self-start"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]"
              >
                <div className="font-mono text-2xl font-semibold tracking-tight text-[var(--text)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[var(--text-dim)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
