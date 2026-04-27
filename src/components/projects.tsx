import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-[var(--border)] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Things I've built — some useful, some just fun."
          description="A rolling collection of side projects, tools, and experiments. A few are live, a few are deliberately rough — the point is to ship and learn."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
