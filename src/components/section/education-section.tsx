import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section/section-heading";
import { DATA } from "@/data/resume";
import { Award, Check, GraduationCap, Medal } from "lucide-react";

const DELAY = 0.04;

export default function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-28"
      aria-labelledby="education-heading"
    >
      <BlurFade delay={DELAY}>
        <SectionHeading
          eyebrow="Education & Achievements"
          title="Academic foundation and recognition"
          description="A computer science degree grounded in software engineering, algorithms, databases and intelligent systems."
          id="education-heading"
        />
      </BlurFade>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
        {DATA.education.map((education, index) => (
          <BlurFade
            key={education.school}
            delay={DELAY * (2 + index * 0.5)}
            className="h-full"
          >
            <article className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-card/50 p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/70 text-sky-600 dark:text-cyan-400">
                  <GraduationCap className="size-5" aria-hidden />
                </span>
                <div className="flex min-w-0 flex-col gap-1">
                  <h3 className="text-base font-semibold leading-snug tracking-tight">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {education.school}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {education.start} – {education.end} · {education.location}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {education.description}
              </p>

              <ul className="flex flex-col gap-2.5 border-t border-border pt-4">
                {education.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-700 dark:text-cyan-400">
                      <Check className="size-2.5" aria-hidden />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              {education.href ? (
                <a
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-md border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  University of Johannesburg
                </a>
              ) : null}
            </article>
          </BlurFade>
        ))}

        <BlurFade delay={DELAY * 3} className="h-full">
          <div className="flex h-full flex-col gap-4">
            {DATA.achievements.map((achievement, index) => {
              const Icon = index === 0 ? Medal : Award;
              return (
                <article
                  key={achievement.title}
                  className="flex flex-1 flex-col gap-3 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-sky-500/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-background/70 text-sky-600 dark:text-cyan-400">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-sm font-semibold tracking-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
