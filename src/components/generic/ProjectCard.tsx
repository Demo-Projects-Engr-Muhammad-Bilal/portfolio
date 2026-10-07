import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import Link from "next/link";
import Tilt from "@/components/shared/Tilt";

type ProjectCardProps = Pick<Project, "id" | "title" | "description" | "imageUrl" | "techStack">;

export default function ProjectCard({ id, title, description, imageUrl, techStack }: ProjectCardProps) {
  return (
    <Tilt className="h-full rounded-[36px]">
    <div className="clay clay-hover group relative flex h-full flex-col rounded-[36px] p-3">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-[28px] bg-[var(--clay-inset-bg)] shadow-[inset_5px_5px_12px_var(--clay-inner-dark)] md:h-64">
        <Image
          src={imageUrl || "/placeholder.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Tech badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 md:left-4 md:top-4">
          {techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="clay-sm clay-pill px-3 py-1 text-[11px] font-semibold text-foreground"
            >
              {tech}
            </span>
          ))}
          {techStack.length > 3 && (
            <span className="clay-sm clay-pill px-3 py-1 text-[11px] font-semibold text-foreground">
              +{techStack.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-5 pb-20 md:p-7 md:pb-24">
        <h3 className="mb-2 font-display text-[22px] font-semibold leading-[1.2] text-on-surface md:mb-3 md:text-[28px]">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.7] text-secondary md:text-[15px]">{description}</p>
      </div>

      <Link
        href={`/projects/${id}`}
        aria-label={`View project ${title}`}
        className="clay-sm clay-hover absolute bottom-6 right-6 flex size-11 items-center justify-center rounded-full text-on-surface group-hover:clay-accent md:bottom-8 md:right-8 md:size-12"
      >
        <ArrowUpRight className="size-5" strokeWidth={2.2} />
      </Link>
    </div>
    </Tilt>
  );
}
