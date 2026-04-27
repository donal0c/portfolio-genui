import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <div className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
          404 — off the map
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-3 text-[var(--text-muted)]">
          Nothing here. Head back to the main page.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[var(--accent-hover)]"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
