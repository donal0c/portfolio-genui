"use client";

import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon } from "./icons";
import { social } from "@/lib/data";

const channels = [
  {
    label: "GitHub",
    href: social.github,
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: social.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "X",
    href: social.x,
    Icon: XIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border)] px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
              Contact
            </h2>
            <a
              href={`mailto:${social.email}`}
              className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <MailIcon className="h-4 w-4" />
              {social.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            {channels.map(({ label, href, Icon }) => (
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
      </div>
    </section>
  );
}
