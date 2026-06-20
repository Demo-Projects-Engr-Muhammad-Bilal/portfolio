"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {paginatedProjects.map((project) => (
          <div key={project.id} className="group bg-white rounded-[16px] md:rounded-[24px] overflow-hidden shadow-sm hover:shadow-[0px_15px_35px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col relative border border-surface-variant/40">

            {/* Image Box */}
            <Link href={project.liveUrl} className="aspect-[16/9] md:aspect-[16/10] bg-inverse-surface relative overflow-hidden flex items-center justify-center cursor-pointer block">
              {/* Sirf halka sa dark overlay rakha hai hover par */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10"></div>

              <div className="w-full h-full relative">
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Yahan se Play wala button mukammal delete kar diya gaya hai */}
            </Link>

            {/* Content Box */}
            <div className="p-5 md:p-8 flex-grow flex flex-col">
              <div className="flex gap-4  mb-2 md:mb-3 flex-wrap">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-primary-fixed/20 text-primary px-0 py-0.5 md:py-1 rounded-full text-[10px] md:text-[11px] font-bold tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-[18px] md:text-[22px] font-bold mb-2 text-on-surface leading-tight uppercase text-shadow-md tracking-wider">{project.title}</h3>
              <p className="text-secondary text-[13px] md:text-[14px] leading-[1.5] mb-5 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                <Button className="bg-primary-container text-on-primary-container hover:bg-primary-container/90 rounded-full px-4 md:px-5 h-9 md:h-11 font-bold text-[11px] md:text-[13px] flex-1 cursor-pointer">
                  <Link href={`/projects/${project.id}`} className="flex flex-row items-center justify-center gap-1.5 w-full h-full">
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>

                <Button variant="outline" className="border-2 border-outline-variant text-on-surface hover:bg-surface-variant rounded-full px-4 md:px-5 h-9 md:h-11 font-bold text-[11px] md:text-[13px] bg-transparent flex-1 cursor-pointer">
                  <Link href={project.githubUrl} className="flex flex-row items-center justify-center gap-1.5 w-full h-full">
                    <Code className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </Link>
                </Button>
              </div>
            </div>


          </div>
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
