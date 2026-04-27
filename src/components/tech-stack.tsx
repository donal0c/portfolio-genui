"use client";

import { motion } from "framer-motion";
import { techStack, type TechItem } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const categoryAccent: Record<TechItem["category"], string> = {
  Language: "text-amber-400",
  Framework: "text-sky-400",
  AI: "text-violet-400",
  Infra: "text-emerald-400",
  Tooling: "text-rose-400",
};

const categoryOrder: TechItem["category"][] = [
  "Language",
  "Framework",
  "AI",
  "Infra",
  "Tooling",
];

export function TechStack() {
  const grouped = categoryOrder
    .map((category) => ({
      category,
      items: techStack.filter((t) => t.category === category),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section
      id="stack"
      className="relative border-t border-[var(--border)] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Stack"
          title="What I reach for."
          description="A rolling toolkit, not a religion. I swap pieces out when something better lands."
        />

        <div className="space-y-10">
          {grouped.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="flex flex-col gap-4 border-l border-[var(--border)] pl-6 sm:flex-row sm:items-center sm:gap-10"
            >
              <div
                className={`w-32 shrink-0 font-mono text-xs uppercase tracking-wider ${categoryAccent[group.category]}`}
              >
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.05 + i * 0.03 }}
                    className="group relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span className="font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
