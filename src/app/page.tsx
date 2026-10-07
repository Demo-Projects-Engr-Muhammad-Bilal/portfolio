"use client";

import { useHero, useSkills, useExperience, useProjects } from "@/lib/PortfolioContext";
import HeroSection from "@/components/sections/home/HeroSection";
import SkillsSection from "@/components/sections/home/SkillsSection";
import ExperienceSection from "@/components/sections/home/ExperienceSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import CTASection from "@/components/generic/CTASection";
import MarqueeSection from "@/components/sections/home/MarqueeSection";
import Reveal from "@/components/shared/Reveal";

export default function Home() {
  const hero = useHero();
  const skills = useSkills();
  const experiences = useExperience();
  const projects = useProjects();

  return (
    <main>
      <HeroSection data={hero} />
      <Reveal><AboutSection /></Reveal>
      <Reveal><SkillsSection skills={skills} /></Reveal>
      <Reveal><ProjectsSection projects={projects} /></Reveal>
      <Reveal><MarqueeSection /></Reveal>
      <Reveal><ExperienceSection experiences={experiences} /></Reveal>
      <Reveal><CTASection /></Reveal>
    </main>
  );
}
