import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Download,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const DELAY = 0.04;

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-28 pt-6 sm:pt-10"
      aria-labelledby="hero-heading"
    >
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-6">
          <BlurFade delay={DELAY} className="min-w-0">
            <div className="inline-flex w-fit max-w-full items-start gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-left text-xs leading-snug text-muted-foreground backdrop-blur">
              <span className="relative mt-1.5 flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span className="min-w-0 break-words">
                BSc Computer Science &amp; Informatics · University of
                Johannesburg
              </span>
            </div>
          </BlurFade>

          <div className="flex flex-col gap-4">
            <BlurFade delay={DELAY * 1.5} yOffset={10}>
              <h1
                id="hero-heading"
                className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                {DATA.name}
              </h1>
            </BlurFade>
            <BlurFade delay={DELAY * 2}>
              <p className="max-w-2xl text-balance text-base font-medium leading-relaxed text-sky-700 dark:text-cyan-300 sm:text-lg">
                {DATA.headline}
              </p>
            </BlurFade>
            <BlurFade delay={DELAY * 2.5}>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {DATA.intro}
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={DELAY * 3}>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={DATA.contact.cv} download>
                  <Download className="size-4" aria-hidden />
                  Download CV
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <Button asChild size="icon" variant="outline">
                  <a
                    href={DATA.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile (placeholder link)"
                  >
                    <DATA.contact.social.GitHub.icon className="size-4" aria-hidden />
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline">
                  <a
                    href={DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile (placeholder link)"
                  >
                    <DATA.contact.social.LinkedIn.icon className="size-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={DELAY * 3.5} className="w-full min-w-0">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-px rounded-3xl bg-linear-to-br from-sky-500/30 via-transparent to-cyan-400/10 dark:from-cyan-400/25" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm dark:shadow-black/30">
              <div className="flex items-center justify-between">
                <Avatar className="size-16 rounded-2xl border border-border bg-muted ring-1 ring-border">
                  {DATA.avatarUrl ? (
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  ) : null}
                  <AvatarFallback className="rounded-2xl text-lg font-semibold">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                  Open to graduate roles
                </span>
              </div>

              <div className="mt-5 flex flex-col gap-1">
                <p className="font-semibold tracking-tight">{DATA.shortName}</p>
                <p className="text-xs text-muted-foreground">
                  Computer Science &amp; Informatics
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="size-4 text-sky-600 dark:text-cyan-400" aria-hidden />
                  <span>University of Johannesburg</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="size-4 text-sky-600 dark:text-cyan-400" aria-hidden />
                  <span>Top 1% at the institution, 2024</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-sky-600 dark:text-cyan-400" aria-hidden />
                  <span>Johannesburg, South Africa</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-border pt-5 text-[11px]">
                <div className="rounded-lg border border-border bg-background/50 px-3 py-2">
                  <p className="font-medium text-foreground">Software</p>
                  <p className="text-muted-foreground">Engineering</p>
                </div>
                <div className="rounded-lg border border-border bg-background/50 px-3 py-2">
                  <p className="font-medium text-foreground">Backend &amp;</p>
                  <p className="text-muted-foreground">Data</p>
                </div>
              </div>

              <Link
                href="#about"
                className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-sky-700 transition-colors hover:text-sky-800 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                More about me
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
