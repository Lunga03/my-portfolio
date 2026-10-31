import BlurFade from "@/components/magicui/blur-fade";
import SectionHeading from "@/components/section/section-heading";
import { DATA } from "@/data/resume";
import { Cloud, Cpu, Landmark, Sparkles } from "lucide-react";

const DELAY = 0.04;

const exploring = [
  { label: "Cloud computing", icon: Cloud },
  { label: "Applied AI", icon: Sparkles },
  { label: "Enterprise technology", icon: Landmark },
  { label: "Intelligent systems", icon: Cpu },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28"
      aria-labelledby="about-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-6">
          <BlurFade delay={DELAY}>
            <SectionHeading
              eyebrow="About"
              title="A grounded foundation in software engineering"
              id="about-heading"
            />
          </BlurFade>
          <div className="flex flex-col gap-4">
            {DATA.about.map((paragraph, index) => (
              <BlurFade key={paragraph} delay={DELAY * (2 + index)}>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {paragraph}
                </p>
              </BlurFade>
            ))}
          </div>
        </div>

        <BlurFade delay={DELAY * 3} className="h-full">
          <div className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card/60 p-6">
            <div>
              <h3 className="text-sm font-semibold">At a glance</h3>
              <dl className="mt-4 flex flex-col divide-y divide-border">
                {DATA.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start justify-between gap-4 py-2.5 text-sm"
                  >
                    <dt className="text-muted-foreground">{fact.label}</dt>
                    <dd className="max-w-[62%] text-right font-medium text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-border pt-5">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Currently exploring
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exploring.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1.5 text-xs text-muted-foreground"
                  >
                    <item.icon
                      className="size-3.5 text-sky-600 dark:text-cyan-400"
                      aria-hidden
                    />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
