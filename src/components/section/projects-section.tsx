import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import SectionHeading from "@/components/section/section-heading";
import { PROJECTS } from "@/data/projects";

const DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28"
      aria-labelledby="projects-heading"
    >
      <BlurFade delay={DELAY}>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected academic and technical work"
          description="Three projects that reflect my work across full-stack development, algorithms and application design. Each card links to a detailed case study."
          id="projects-heading"
        />
      </BlurFade>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <BlurFade
            key={project.slug}
            delay={DELAY * (2 + index * 0.6)}
            className="h-full"
          >
            <ProjectCard project={project} index={index} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
