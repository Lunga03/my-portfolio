import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section/section-heading";
import {
  Timeline,
  TimelineConnectItem,
  TimelineItem,
} from "@/components/timeline";
import { DATA } from "@/data/resume";
import { Briefcase, Check } from "lucide-react";

const DELAY = 0.04;

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28"
      aria-labelledby="experience-heading"
    >
      <BlurFade delay={DELAY}>
        <SectionHeading
          eyebrow="Experience"
          title="Where I have applied what I am learning"
          description="Practical roles that have strengthened my technical judgement, communication and ability to work with others."
          id="experience-heading"
        />
      </BlurFade>

      <div className="mt-8">
        <Timeline className="overflow-hidden p-0">
          {DATA.work.map((work, index) => (
            <TimelineItem
              key={work.company + work.role}
              className="flex items-start gap-4 sm:gap-6"
            >
              <TimelineConnectItem className="flex items-start justify-center pt-6">
                <span className="relative z-20 flex size-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sky-600 shadow-sm dark:text-cyan-400">
                  <Briefcase className="size-4" aria-hidden />
                </span>
              </TimelineConnectItem>

              <BlurFade
                delay={DELAY * (2 + index * 0.5)}
                className="min-w-0 flex-1"
              >
                <article className="rounded-2xl border border-border bg-card/50 p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold tracking-tight">
                        {work.role}
                      </h3>
                      <p className="text-sm text-sky-700 dark:text-cyan-300">
                        {work.company}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {work.location}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] tabular-nums text-muted-foreground">
                      {work.start}
                      {work.end ? ` – ${work.end}` : ""}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {work.description}
                  </p>

                  <ul className="mt-4 flex flex-col gap-2.5">
                    {work.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-700 dark:text-cyan-400">
                          <Check className="size-2.5" aria-hidden />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {work.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border bg-background/60 px-2 py-1 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </BlurFade>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
