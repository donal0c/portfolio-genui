interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--accent)] ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="inline-block h-px w-6 bg-[var(--accent)]" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
