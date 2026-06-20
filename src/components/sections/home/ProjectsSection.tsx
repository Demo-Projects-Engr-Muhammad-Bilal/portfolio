import ProjectCard from "@/components/generic/ProjectCard";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "lucide-react";
import SectionHeader from "@/components/generic/SectionHeader";
import type { Project } from "@/lib/types";
import Link from "next/link";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
          return (
                    // Mobile py-16, Desktop py-section-gap
                    <section className="py-16 md:py-[var(--spacing-section-gap)] bg-background" id="projects">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                        {/* Header & View All Button Container */}
                                        <div className="flex flex-col md:flex-row md:items-start justify-between mb-10 md:mb-16 gap-6">
                                                  <SectionHeader
                                                            title={<>Let's Have a Look at <br className="hidden md:block" />My Projects</>}
                                                            align="left"
                                                  />

                                                  <Link href="/projects" className="w-full sm:w-fit block">
                                                            <Button className="w-full sm:w-auto bg-primary-container text-on-primary-container rounded-full px-8 h-[56px] text-[14px] md:text-[16px] font-bold uppercase tracking-widest hover:scale-105 hover:bg-primary-container/90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md">
                                                                      See All Projects
                                                                      <LayoutGrid size={20} strokeWidth={2} />
                                                            </Button>
                                                  </Link>
                                        </div>

                                        {/* Projects Grid - Mobile gap 6, Desktop 8 */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                                  {projects.map((proj) => (
                                                            <ProjectCard key={proj.id} {...proj} />
                                                  ))}
                                        </div>

                              </div>
                    </section>
          );
}
