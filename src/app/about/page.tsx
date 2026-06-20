"use client";

import AboutHero from "@/components/sections/about/AboutHero";
import ValuesSection from "@/components/sections/about/ValuesSection";
import StatsSection from "@/components/sections/about/StatsSection";
import TechStackSection from "@/components/sections/about/TechStackSection";
import CTASection from "@/components/generic/CTASection";
import { useAboutData, useExperience } from "@/lib/PortfolioContext";
import AboutExperience from "@/components/sections/about/AboutExperiece";

export default function AboutPage() {
          const about = useAboutData();
          const experiences = useExperience();

          return (
                    <main className="bg-background min-h-screen">
                              <AboutHero data={about.hero} />
                              <TechStackSection techStack={about.techStack} />
                              <AboutExperience experiences={experiences} />
                              <ValuesSection values={about.values} />
                              <StatsSection stats={about.stats} />
                              <CTASection />
                    </main>
          );
}
