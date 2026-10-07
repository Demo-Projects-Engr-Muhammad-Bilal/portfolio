"use client";

import AboutHero from "@/components/sections/about/AboutHero";
import ValuesSection from "@/components/sections/about/ValuesSection";
import StatsSection from "@/components/sections/about/StatsSection";
import TechStackSection from "@/components/sections/about/TechStackSection";
import CTASection from "@/components/generic/CTASection";
import { useAboutData, useExperience } from "@/lib/PortfolioContext";
import AboutExperience from "@/components/sections/about/AboutExperiece";
import Reveal from "@/components/shared/Reveal";

export default function AboutPage() {
          const about = useAboutData();
          const experiences = useExperience();

          return (
                    <main className="clay-page min-h-screen">
                              <AboutHero data={about.hero} />
                              <Reveal><TechStackSection techStack={about.techStack} /></Reveal>
                              <Reveal><AboutExperience experiences={experiences} /></Reveal>
                              <Reveal><ValuesSection values={about.values} /></Reveal>
                              <Reveal><StatsSection stats={about.stats} /></Reveal>
                              <Reveal><CTASection /></Reveal>
                    </main>
          );
}
