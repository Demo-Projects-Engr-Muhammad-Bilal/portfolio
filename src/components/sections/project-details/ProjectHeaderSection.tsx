import Link from "next/link";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectHeaderSectionProps {
  project: Project;
}

/** Breadcrumb, back link, title, description, tech stack chips and live demo / source buttons. */
export default function ProjectHeaderSection({ project }: ProjectHeaderSectionProps) {
  return (
    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pt-4 md:pt-16 pb-8 md:pb-16">
      {/* Row: Breadcrumbs & Back Button */}
      <div className="mb-8 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-center md:gap-0">
        <nav className="clay-sm clay-pill order-2 flex flex-wrap items-center px-5 py-2.5 text-[12px] font-semibold text-secondary md:order-1 md:text-[14px]">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <span className="mx-1.5 md:mx-2">/</span>
          <Link href="/projects" className="transition-colors hover:text-primary">Projects</Link>
          <span className="mx-1.5 md:mx-2">/</span>
          <span className="max-w-[180px] truncate font-bold text-on-surface md:max-w-none">{project.title}</span>
        </nav>

        <Link
          href="/projects"
          className="clay-sm clay-pill clay-hover group order-1 flex items-center px-5 py-2.5 text-[13px] font-bold text-primary md:order-2 md:text-[14px]"
        >
          <ArrowLeft className="mr-1.5 size-4 transition-transform group-hover:-translate-x-1 md:mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="max-w-4xl">
        <h1 className="mb-4 font-display text-[38px] font-semibold leading-[1.05] tracking-[-0.01em] text-on-surface md:mb-6 md:text-[72px]">
          {project.title.split(" ")[0]} <span className="text-primary">{project.title.split(" ").slice(1).join(" ")}</span>
        </h1>

        <p className="mb-6 max-w-2xl text-[14px] leading-[1.7] text-secondary md:mb-8 md:text-[18px]">
          {project.description}
        </p>

        <div className="mb-8 flex flex-wrap gap-3 md:mb-10">
          {project.techStack.map((tech) => (
            <span key={tech} className="clay-sm clay-pill px-4 py-1.5 text-[12px] font-bold text-primary">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex w-full flex-row gap-3 md:gap-4">
          <Link
            href={project.liveUrl}
            className={buttonVariants({ size: "lg", className: "h-12 flex-1 gap-2 px-4 text-[12px] md:h-14 md:px-8 md:text-[15px]" })}
          >
            <span className="truncate">View Live Demo</span>
            <ExternalLink className="size-4 shrink-0" />
          </Link>
          <Link
            href={project.githubUrl}
            className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 flex-1 gap-2 px-4 text-[12px] md:h-14 md:px-8 md:text-[15px]" })}
          >
            <span className="truncate">Source</span>
            <Code className="size-4 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
