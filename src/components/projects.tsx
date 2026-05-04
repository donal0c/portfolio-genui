"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/data";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-[var(--border)] px-6 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Work" title="Selected Work" />

        {projects.length === 0 ? (
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
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                {/* Cover */}
                <div className="relative h-32 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{ background: project.gradient }}
                  />
                  {project.accent && (
                    <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-sm">
                      {project.accent}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {(project.link || project.github) && (
                    <div className="mt-4 flex items-center gap-3 border-t border-[var(--border)] pt-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:opacity-80"
                        >
                          Visit <ArrowUpRightIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-[var(--text-muted)] hover:text-[var(--text)]"
                          aria-label="GitHub"
                        >
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
