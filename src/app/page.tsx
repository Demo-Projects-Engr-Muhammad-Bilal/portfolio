"use client";

import { useHero, useSkills, useExperience, useProjects } from "@/lib/PortfolioContext";
import HeroSection from "@/components/sections/home/HeroSection";
import SkillsSection from "@/components/sections/home/SkillsSection";
import ExperienceSection from "@/components/sections/home/ExperienceSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import CTASection from "@/components/generic/CTASection";
import MarqueeSection from "@/components/sections/home/MarqueeSection";

export default function Home() {
  const hero = useHero();
  const skills = useSkills();
  const experiences = useExperience();
  const projects = useProjects();

  return (
    <main>
      <HeroSection data={hero} />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <MarqueeSection />
      <CTASection />
    </main>
  );
}
