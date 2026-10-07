"use client";

import ProjectsHero from "@/components/sections/project/ProjectsHero";
import ProjectsDisplay from "@/components/sections/project/ProjectsDisplay";
import CTASection from "@/components/generic/CTASection";
import { useProjects, useProjectsPageData } from "@/lib/PortfolioContext";

export default function ProjectsPage() {
          const projects = useProjects();
          const projectsPage = useProjectsPageData();

          return (
                    <main className="clay-page relative min-h-screen overflow-hidden">

                              {/* Hero Section */}
                              <ProjectsHero data={projectsPage.hero} />

                              {/* Grid with Filters and Pagination */}
                              <ProjectsDisplay
                                        projects={projects}
                                        categories={projectsPage.categories}
                              />
                              <CTASection />

                    </main>
          );
}
