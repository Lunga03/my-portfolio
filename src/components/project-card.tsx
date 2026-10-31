/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
  className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20",
        className
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-muted"
        aria-label={`View the ${project.title} case study`}
      >
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-2.5 py-1 font-mono text-[10px] font-medium tracking-widest text-white/80 backdrop-blur">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-700 dark:text-cyan-400">
            {project.category}
          </span>
          <h3 className="text-lg font-semibold leading-snug tracking-tight">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:hover:text-cyan-300"
            >
              {project.title}
            </Link>
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.cardDescription}
        </p>

        {project.technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((technology) => (
              <li key={technology}>
                <Badge
                  variant="outline"
                  className="h-6 border-border bg-background/50 px-2 text-[11px] font-normal text-muted-foreground"
                >
                  {technology}
                </Badge>
              </li>
            ))}
            {project.technologies.length > 4 ? (
              <li>
                <Badge
                  variant="outline"
                  className="h-6 border-border bg-background/50 px-2 text-[11px] font-normal text-muted-foreground"
                >
                  +{project.technologies.length - 4}
                </Badge>
              </li>
            ) : null}
          </ul>
        ) : (
          <p className="text-[11px] italic text-muted-foreground">
            Technologies to be added
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-sky-700 dark:hover:text-cyan-300"
          >
            View case study
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-3.5" aria-hidden />
              GitHub
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70"
              title="Repository link placeholder — add it in src/data/projects.ts"
            >
              <Github className="size-3.5" aria-hidden />
              Repository placeholder
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
