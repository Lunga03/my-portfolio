import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section/section-heading";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers,
  Server,
  Wrench,
} from "lucide-react";

const DELAY = 0.04;

const groupIcons = [Code2, Server, Database, Wrench, Layers, BrainCircuit];

function statusStyles(status: string) {
  if (status.startsWith("Foundational")) {
    return "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300";
  }
  if (status.startsWith("Academic")) {
    return "border-sky-500/25 bg-sky-500/10 text-sky-700 dark:text-sky-300";
  }
  return "border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300";
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28"
      aria-labelledby="skills-heading"
    >
      <BlurFade delay={DELAY}>
        <SectionHeading
          eyebrow="Technical Skills"
          title="Tools, concepts and engineering foundations"
          description="Each category is labelled to distinguish practical use, academic study and areas I am currently exploring. Skills are not shown as percentages or progress bars."
          id="skills-heading"
        />
      </BlurFade>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {DATA.skillGroups.map((group, index) => {
          const Icon = groupIcons[index] ?? Code2;
          return (
            <BlurFade
              key={group.title}
              delay={DELAY * (2 + index * 0.5)}
              className={cn("h-full", group.wide && "md:col-span-2")}
            >
              <article className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-sky-500/30">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-xl border border-border bg-background/70 text-sky-600 dark:text-cyan-400">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <h3 className="text-sm font-semibold tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                      statusStyles(group.status)
                    )}
                  >
                    {group.status}
                  </span>
                </div>

                {group.subgroups ? (
                  <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
                    {group.subgroups.map((subgroup) => (
                      <div key={subgroup.title} className="flex flex-col gap-2">
                        <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {subgroup.title}
                        </h4>
                        <ul className="flex flex-col gap-1.5">
                          {subgroup.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"
                            >
                              <span
                                className="mt-1.5 size-1 shrink-0 rounded-full bg-sky-500/70 dark:bg-cyan-400/70"
                                aria-hidden
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="flex flex-wrap gap-2">
                    {group.items?.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-xs text-foreground/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-auto border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  {group.note}
                </p>
              </article>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
