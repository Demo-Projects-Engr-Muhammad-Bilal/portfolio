"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Tilt from "@/components/shared/Tilt";
import { ArrowUpRight, Code } from "lucide-react";
import { usePagination } from "@/lib/usePagination";
import CategoryFilterBar from "@/components/generic/CategoryFilterBar";
import PaginationControls from "@/components/generic/PaginationControls";
import type { Project } from "@/lib/types";

interface ProjectsDisplayProps {
  projects: Project[];
  categories: string[];
}

export default function ProjectsDisplay({ projects, categories }: ProjectsDisplayProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const itemsPerPage = 2;

  // Filter Logic
  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const { currentPage, totalPages, currentItems: paginatedProjects, setCurrentPage, goToPrevPage, goToNextPage } =
    usePagination({
      items: filteredProjects,
      itemsPerPage,
      resetKey: activeCategory,
    });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
  };

  return (
    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

      {/* Filters - Horizontal Scrollable Row */}
      <CategoryFilterBar
        categories={categories}
        activeCategory={activeCategory}
        onSelect={handleCategoryChange}
        variant="outline-glow"
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {paginatedProjects.map((project) => (
          <Tilt key={project.id} className="h-full rounded-[36px]">
            <div className="clay group relative flex h-full flex-col rounded-[36px] p-3">
              {/* Image Box */}
              <Link
                href={project.liveUrl}
                className="clay-frame relative block aspect-[16/9] cursor-pointer overflow-hidden rounded-[28px] md:aspect-[16/10]"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Content Box */}
              <div className="flex flex-grow flex-col p-5 md:p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="clay-sm clay-pill px-3 py-1 text-[11px] font-semibold text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 font-display text-[22px] font-semibold leading-tight text-on-surface md:text-[28px]">
                  {project.title}
                </h3>
                <p className="mb-6 line-clamp-2 text-[14px] leading-[1.6] text-secondary">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-3">
                  <Link
                    href={`/projects/${project.id}`}
                    className={buttonVariants({ className: "h-11 flex-1 gap-1.5 px-5 text-[13px]" })}
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className={buttonVariants({ variant: "outline", className: "h-11 flex-1 gap-1.5 px-5 text-[13px]" })}
                  >
                    <Code className="size-4" />
                    <span>Source</span>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Pagination Controls */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={goToPrevPage}
        onNext={goToNextPage}
        onPageSelect={setCurrentPage}
        variant="text-buttons"
      />
    </section>
  );
}
