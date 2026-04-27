"use client";

import { motion } from "framer-motion";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MailIcon,
  ArrowUpRightIcon,
} from "./icons";
import { social } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const channels = [
  {
    label: "Email",
    handle: social.email,
    href: `mailto:${social.email}`,
    Icon: MailIcon,
    preferred: true,
  },
  {
    label: "GitHub",
    handle: "@donalocallaghan",
    href: social.github,
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    handle: "donalocallaghan",
    href: social.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "X",
    handle: "@donalocallaghan",
    href: social.x,
    Icon: XIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border)] px-6 py-24 sm:py-32"
    >
      {/* Accent wash */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, var(--accent) 0%, transparent 50%)",
          opacity: 0.08,
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Interesting projects, agent-shaped problems, or just a chat about shipping — I'm up for it. Email is the fastest route."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {channels.map(({ label, handle, href, Icon, preferred }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className={`group relative flex items-center gap-4 overflow-hidden rounded-xl border bg-[var(--bg-card)] p-5 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] ${
                preferred
                  ? "sm:col-span-2 border-[var(--border-strong)]"
                  : "border-[var(--border)]"
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium text-[var(--text)]">
                    {label}
                  </div>
                  {preferred ? (
                    <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent)]">
                      Preferred
                    </span>
                  ) : null}
                </div>
                <div className="mt-0.5 truncate font-mono text-xs text-[var(--text-muted)]">
                  {handle}
                </div>
              </div>
              <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-[var(--text-dim)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
