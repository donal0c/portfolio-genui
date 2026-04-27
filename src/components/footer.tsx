import { GitHubIcon, LinkedInIcon, XIcon, MailIcon } from "./icons";
import { social } from "@/lib/data";

const iconLinks = [
  { href: `mailto:${social.email}`, label: "Email", Icon: MailIcon },
  { href: social.github, label: "GitHub", Icon: GitHubIcon },
  { href: social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: social.x, label: "X", Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-dim)]">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            aria-hidden="true"
          />
          © {new Date().getFullYear()} Donal O&rsquo;Callaghan · Built in
          Ireland
        </div>

        <div className="flex items-center gap-1">
          {iconLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              aria-label={label}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--text-dim)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--accent)]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
