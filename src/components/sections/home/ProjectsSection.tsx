import ProjectCard from "@/components/generic/ProjectCard";
import SectionHeader from "@/components/generic/SectionHeader";
import type { Project } from "@/lib/types";
import Link from "next/link";
import { Stagger } from "@/components/shared/Reveal";
import Magnetic from "@/components/shared/Magnetic";
import { buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-background py-16 md:py-[var(--spacing-section-gap)]" id="projects">
      <div className="mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <SectionHeader
            label="My top work"
            title={
              <>
                Featured <br className="hidden md:block" />
                projects
              </>
            }
            align="left"
            showDivider={false}
          />

          <Magnetic className="flex sm:inline-flex">
            <Link href="/projects" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-fit" })}>
              See all projects
              <ArrowUpRight strokeWidth={2.2} className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
            </Link>
          </Magnetic>
        </div>

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
