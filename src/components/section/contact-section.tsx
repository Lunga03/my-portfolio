import BlurFade from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import SectionHeading from "@/components/section/section-heading";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowUpRight, Download, Mail } from "lucide-react";

const DELAY = 0.04;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-28"
      aria-labelledby="contact-heading"
    >
      <BlurFade delay={DELAY}>
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="I am open to graduate opportunities in software engineering, IT consulting, enterprise technology, AI and cloud computing."
          id="contact-heading"
        />
      </BlurFade>

      <BlurFade delay={DELAY * 2}>
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card/50 p-6 sm:p-10">
          <div className="pointer-events-none absolute inset-0 h-1/2 overflow-hidden opacity-70">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={4}
              color="#22d3ee"
              maxOpacity={0.12}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>

          <div className="relative flex flex-col gap-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="flex flex-col gap-3">
                <p className="text-lg font-semibold tracking-tight sm:text-xl">
                  Available for graduate programme opportunities
                </p>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  The best way to reach me is by email. I am happy to discuss
                  software engineering, backend development, data and enterprise
                  technology roles.
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <a
                    href={DATA.contact.emailHref}
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 underline-offset-4 hover:underline dark:text-cyan-300"
                  >
                    <Mail className="size-4" aria-hidden />
                    {DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
                <Button asChild size="lg" className="gap-2">
                  <a href={DATA.contact.emailHref}>
                    <Mail className="size-4" aria-hidden />
                    Email me
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href={DATA.contact.cv} download>
                    <Download className="size-4" aria-hidden />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                <a
                  href={DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <DATA.contact.social.LinkedIn.icon
                    className="size-3.5"
                    aria-hidden
                  />
                  LinkedIn
                  <ArrowUpRight className="size-3" aria-hidden />
                </a>
                <a
                  href={DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <DATA.contact.social.GitHub.icon
                    className="size-3.5"
                    aria-hidden
                  />
                  GitHub
                  <ArrowUpRight className="size-3" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
