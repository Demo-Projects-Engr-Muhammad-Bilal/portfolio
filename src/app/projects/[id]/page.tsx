"use client";

import CTASection from "@/components/generic/CTASection";
import ProjectFeatures from "@/components/sections/project-details/ProjectFeatures";
import ProjectVideoGallery from "@/components/sections/project-details/ProjectVideoGallery";
import ProjectApproach from "@/components/sections/project-details/ProjectApproach";
import ArchitectureSection from "@/components/sections/project-details/ArchitectureSection";
import ProjectNotFound from "@/components/sections/project-details/ProjectNotFound";
import ProjectHeaderSection from "@/components/sections/project-details/ProjectHeaderSection";
import ProjectOverviewSection from "@/components/sections/project-details/ProjectOverviewSection";
import ProjectChallengeSection from "@/components/sections/project-details/ProjectChallengeSection";
import ProjectResultsSection from "@/components/sections/project-details/ProjectResultsSection";
import ProjectUpcomingUpdateSection from "@/components/sections/project-details/ProjectUpcomingUpdateSection";
import { useProjectById, useProjects } from "@/lib/PortfolioContext";
import { use } from "react";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
          const resolvedParams = use(params);
          const projectId = resolvedParams.id;

          const allProjects = useProjects();
          const { project } = useProjectById(projectId);

          if (!project) {
                    return <ProjectNotFound projectId={projectId} allProjects={allProjects} />;
          }

          return (
                    <main className="clay-page min-h-screen mt-20 md:mt-15">

                              {/* ================= HEADER & BREADCRUMB (LIGHT) ================= */}
                              <ProjectHeaderSection project={project} />

                              {/* ================= VIDEO GALLERY (LIGHT) ================= */}
                              {project.videos && <ProjectVideoGallery videos={project.videos} />}

                              {/* ================= OVERVIEW & INFO GRID (DARK THEME) ================= */}
                              <ProjectOverviewSection project={project} />

                              {/* ================= THE CHALLENGE (LIGHT) ================= */}
                              {project.challenge && (
                                        <ProjectChallengeSection challenge={project.challenge} />
                              )}

                              {/* ================= NEW: SYSTEM ARCHITECTURE (LIGHT THEME) ================= */}
                              {project.architecture && project.architecture.length > 0 && (
                                        <ArchitectureSection diagrams={project.architecture} />
                              )}

                              {/* ================= MY APPROACH (DARK) ================= */}
                              {project.approach && <ProjectApproach approach={project.approach} />}

                              {/* ================= FEATURES COMPONENT (LIGHT) ================= */}
                              {project.features && <ProjectFeatures features={project.features} />}

                              {/* ================= RESULTS (DARK THEME) ================= */}
                              {project.results && (
                                        <ProjectResultsSection results={project.results} resultsDesc={project.resultsDesc} />
                              )}

                              {/* ================= UPCOMING UPDATE (DARK CARD) ================= */}
                              {project.upcomingUpdate && (
                                        <ProjectUpcomingUpdateSection upcomingUpdate={project.upcomingUpdate} />
                              )}
                              <CTASection />
                    </main>
          );
}
