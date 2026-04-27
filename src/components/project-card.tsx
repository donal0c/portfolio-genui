"use client";

import { motion } from "framer-motion";
import type { Project, ProjectStatus } from "@/lib/data";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Prototype: "bg-sky-500/10 text-sky-400 border-sky-500/30",
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasExternalLink = Boolean(project.link);
  const hasGithub = Boolean(project.github);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_-12px_var(--accent)]"
    >
      {/* Cover with gradient + noise */}
      <div className="relative h-36 w-full overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
          style={{ background: project.gradient }}
        />
        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle, #000 1px, transparent 1.5px)",
            backgroundSize: "10px 10px",
          }}
        />
        {/* Top gradient fade for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-card)]" />

        {/* Accent label top-left */}
        {project.accent ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-sm">
            {project.accent}
          </div>
        ) : null}

        {/* Status badge top-right */}
        <div
          className={`absolute right-4 top-4 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm ${statusStyles[project.status]}`}
        >
          {project.status}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>

        {/* Tech */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        {(hasExternalLink || hasGithub) && (
          <div className="mt-5 flex items-center gap-2 border-t border-[var(--border)] pt-4">
            {hasExternalLink ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-opacity hover:opacity-80"
              >
                Visit
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            ) : null}
            {hasGithub ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
                aria-label={`${project.title} source on GitHub`}
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        )}
      </div>
    </motion.article>
  );
}
