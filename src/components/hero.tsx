"use client";

import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, XIcon, ArrowUpRightIcon } from "./icons";
import { social } from "@/lib/data";

const socialLinks = [
  { href: social.github, label: "GitHub", Icon: GitHubIcon },
  { href: social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: social.x, label: "X", Icon: XIcon },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-animated opacity-40 mask-radial"
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-2 font-mono text-xs tracking-wide text-[var(--text-dim)]"
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px] shadow-emerald-500/70"
            aria-hidden="true"
          />
          Available for interesting work — based in Ireland
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-5xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Donal{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-br from-[var(--accent-hover)] via-[var(--accent)] to-[var(--accent-dim)] bg-clip-text text-transparent animate-gradient">
              O&rsquo;Callaghan
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-lg text-[var(--text-muted)] sm:text-xl md:text-2xl"
        >
          AI Engineer. Builder. Shipping things that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-[var(--accent-hover)] hover:shadow-[0_0_24px_-4px_var(--accent)]"
          >
            See the work
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Get in touch
          </a>

          <div
            className="ml-2 h-6 w-px bg-[var(--border-strong)]"
            aria-hidden="true"
          />

          <div className="flex items-center gap-1">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--accent)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Subtle animated orbit indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-center gap-6 font-mono text-xs text-[var(--text-dim)]"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span>Currently shipping with Claude Code &amp; Codex</span>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          aria-hidden="true"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--border-strong)] p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-[var(--accent)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
