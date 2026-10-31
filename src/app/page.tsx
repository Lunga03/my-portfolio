import AboutSection from "@/components/section/about-section";
import ContactSection from "@/components/section/contact-section";
import EducationSection from "@/components/section/education-section";
import ExperienceSection from "@/components/section/experience-section";
import HeroSection from "@/components/section/hero-section";
import ProjectsSection from "@/components/section/projects-section";
import SkillsSection from "@/components/section/skills-section";

export default function Page() {
  return (
    <main
      id="main-content"
      className="flex flex-col gap-20 pb-12 sm:gap-24"
    >
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
