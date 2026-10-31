/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { getAdjacentProjects, getProject, PROJECTS } from "@/data/projects";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Github,
  Info,
  Layers,
  PencilLine,
  UserRound,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return undefined;
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${DATA.name}`,
      description: project.summary,
      url: `${DATA.url}/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${DATA.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article className="flex flex-col gap-10">
      <div>
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft
            className="size-3.5 transition-transform group-hover:-translate-x-0.5"
            aria-hidden
          />
          Back to projects
        </Link>
      </div>

      <header className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-cyan-400">
            {project.category}
          </span>
          <span className="text-muted-foreground/40">/</span>
          <span className="text-[11px] text-muted-foreground">
            {project.status}
          </span>
        </div>

        <h1 className="max-w-4xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>

        <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.summary}
        </p>

        {project.technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <li key={technology}>
                <Badge
                  variant="outline"
                  className="border-border bg-card/50 px-2.5 py-1 text-[11px] font-normal text-muted-foreground"
                >
                  {technology}
                </Badge>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs italic text-muted-foreground">
            Technologies to be added.
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {project.githubUrl ? (
            <Button asChild className="gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" aria-hidden />
                View repository
              </a>
            </Button>
          ) : (
            <Button variant="outline" disabled className="gap-2">
              <Github className="size-4" aria-hidden />
              Repository placeholder
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href="/#contact">
              Get in touch
              <ArrowUpRight className="ml-1.5 size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </header>

      <BlurFade delay={0.05}>
        <div className="overflow-hidden rounded-2xl border border-border bg-muted">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[16/9] h-full w-full object-cover"
          />
        </div>
      </BlurFade>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            label: "Role",
            value: project.role,
            icon: UserRound,
          },
          {
            label: "Category",
            value: project.category,
            icon: Layers,
          },
          {
            label: "Context",
            value: project.timeline,
            icon: Calendar,
          },
          {
            label: "Status",
            value: project.status,
            icon: CheckCircle2,
          },
        ].map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col gap-2 rounded-xl border border-border bg-card/50 p-4"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <fact.icon className="size-3.5" aria-hidden />
              <span className="text-[10px] font-medium uppercase tracking-[0.16em]">
                {fact.label}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-foreground/90">
              {fact.value}
            </p>
          </div>
        ))}
      </div>

      {project.placeholderNote ? (
        <div className="flex items-start gap-3 rounded-xl border border-dashed border-amber-500/30 bg-amber-500/[0.04] p-4">
          <PencilLine
            className="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-400"
            aria-hidden
          />
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold text-amber-700 dark:text-amber-300">
              Editable case study
            </p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {project.placeholderNote}
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex flex-col gap-10">
        {project.sections.map((section, index) => (
          <section
            key={section.title}
            className={
              section.placeholder
                ? "flex flex-col gap-3 rounded-2xl border border-dashed border-border bg-muted/20 p-6"
                : "flex flex-col gap-4"
            }
            aria-label={section.title}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] tabular-nums text-sky-700 dark:text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {section.title}
              </h2>
              {section.placeholder ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-amber-500/40 bg-amber-500/5 px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:text-amber-300">
                  <PencilLine className="size-2.5" aria-hidden />
                  Editable placeholder
                </span>
              ) : null}
            </div>

            {section.paragraphs ? (
              <div
                className={
                  section.placeholder
                    ? "mt-3 flex flex-col gap-3"
                    : "flex flex-col gap-3"
                }
              >
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={
                      section.placeholder
                        ? "text-sm italic leading-relaxed text-muted-foreground"
                        : "text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : null}

            {section.bullets ? (
              <ul className="flex flex-col gap-2.5">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={
                      section.placeholder
                        ? "flex items-start gap-2.5 text-sm italic leading-relaxed text-muted-foreground"
                        : "flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    }
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-sky-500/70 dark:bg-cyan-400/70" />
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.note ? (
              <div className="flex items-start gap-2.5 rounded-xl border border-sky-500/20 bg-sky-500/[0.04] p-3.5">
                <Info
                  className="mt-0.5 size-3.5 shrink-0 text-sky-700 dark:text-cyan-300"
                  aria-hidden
                />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground/90">
                    {section.noteLabel ?? "Note"}:
                  </span>{" "}
                  {section.note}
                </p>
              </div>
            ) : null}
          </section>
        ))}
      </div>

      {project.highlights.length > 0 ? (
        <section
          className="rounded-2xl border border-border bg-card/50 p-6"
          aria-label="Project highlights"
        >
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Project highlights
          </h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2
                  className="mt-0.5 size-3.5 shrink-0 text-sky-600 dark:text-cyan-400"
                  aria-hidden
                />
                {highlight}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-stretch sm:justify-between">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex flex-1 flex-col gap-1 rounded-xl border border-border bg-card/50 p-4 transition-colors hover:border-sky-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <ArrowLeft className="size-3" aria-hidden />
              Previous project
            </span>
            <span className="text-sm font-medium transition-colors group-hover:text-sky-700 dark:group-hover:text-cyan-300">
              {previous.title}
            </span>
          </Link>
        ) : (
          <div className="hidden flex-1 sm:block" />
        )}

        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-1 flex-col gap-1 rounded-xl border border-border bg-card/50 p-4 text-right transition-colors hover:border-sky-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex items-center justify-end gap-1 text-[11px] text-muted-foreground">
              Next project
              <ArrowRight className="size-3" aria-hidden />
            </span>
            <span className="text-sm font-medium transition-colors group-hover:text-sky-700 dark:group-hover:text-cyan-300">
              {next.title}
            </span>
          </Link>
        ) : (
          <div className="hidden flex-1 sm:block" />
        )}
      </nav>
    </article>
  );
}
