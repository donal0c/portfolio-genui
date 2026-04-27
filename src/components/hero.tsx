"use client";

import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon } from "./icons";
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
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-animated opacity-20 mask-radial"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--text-dim)]"
        >
          <span
            className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px] shadow-emerald-400/70"
            aria-hidden="true"
          />
          Available
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-[var(--text)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Donal O Callaghan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-xl text-[var(--text-muted)] sm:text-2xl"
        >
          AI Engineer. Builder. Ireland.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4"
        >
          <a
            href={`mailto:${social.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm text-[var(--text)] transition-colors hover:text-[var(--accent)]"
          >
            <MailIcon className="h-4 w-4" />
            {social.email}
          </a>

          <div
            className="hidden h-5 w-px bg-[var(--border-strong)] sm:block"
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
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--accent)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 max-w-md border-l border-[var(--border-strong)] pl-5 font-mono text-xs leading-6 text-[var(--text-dim)]"
        >
          Tools, systems, and useful software. Quietly shipped, clearly made.
        </motion.div>
      </div>
    </section>
  );
}
