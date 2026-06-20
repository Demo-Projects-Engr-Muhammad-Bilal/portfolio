import Link from "next/link";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectHeaderSectionProps {
  project: Project;
}

/**
 * Extracted verbatim from the "HEADER & BREADCRUMB" block of
 * app/projects/[id]/page.tsx — breadcrumb nav, back link, title, description,
 * tech stack pills, and live demo / source action buttons.
 */
export default function ProjectHeaderSection({ project }: ProjectHeaderSectionProps) {
  return (
    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pt-4 md:pt-16 pb-8 md:pb-16">

      {/* Row: Breadcrumbs & Back Button */}
      {/* Yahan mb-6 kiya hai mobile ke liye taake gap kam ho jaye */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-10 gap-6 md:gap-0">

        <nav className="flex flex-wrap items-center text-secondary text-[12px] md:text-[14px] font-semibold order-2 md:order-1">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-1.5 md:mx-2">/</span>
          <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <span className="mx-1.5 md:mx-2">/</span>
          <span className="text-on-surface font-bold truncate max-w-[180px] md:max-w-none">{project.title}</span>
        </nav>

        <Link
          href="/projects"
          className="flex items-center text-primary-container font-bold group text-[13px] md:text-[14px] order-1 md:order-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 md:mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-4xl">
        {/* Title */}
        <h1 className="text-[35px] md:text-[72px] text-shadow-md font-extrabold leading-[1.1] mb-3 md:mb-6 tracking-[-0.02em]">
          {project.title.split(' ')[0]} <span className="text-primary-container">{project.title.split(' ').slice(1).join(' ')}</span>
        </h1>

        {/* Description */}
        <p className="text-[14px] md:text-[18px] text-secondary mb-4 md:mb-8 max-w-2xl leading-[1.6]">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-5 mb-6 md:mb-10">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-surface-container-high py-1.5 rounded-full text-[12px] font-bold text-primary">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {/* flex-row ko default rakha hai aur gap-3 ya 4 se dono buttons ko equal width milegi */}
        <div className="flex flex-row gap-3 md:gap-4 w-full">

          <Button
            className="bg-primary-container text-on-primary-container px-4 md:px-8 h-12 md:h-14 rounded-full font-bold shadow-xl hover:scale-105 hover:bg-primary-container/90 transition-all duration-500 text-[11px] md:text-[15px] flex-1"

          >
            <Link href={project.liveUrl} className="flex items-center justify-center gap-2">
              <span className="truncate">View Live Demo</span>
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="border-2 border-surface-variant text-on-surface px-4 md:px-8 h-12 md:h-14 rounded-full font-bold hover:bg-on-surface hover:text-white transition-all duration-500 text-[11px] md:text-[15px] bg-transparent flex-1"

          >
            <Link href={project.githubUrl} className="flex items-center justify-center gap-2">
              <span className="truncate">Source</span>
              <Code className="w-4 h-4 flex-shrink-0" />
            </Link>
          </Button>

        </div>
      </div>
    </section>
  );
}
