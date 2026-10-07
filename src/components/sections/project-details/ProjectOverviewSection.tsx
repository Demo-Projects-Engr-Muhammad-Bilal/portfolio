import type { Project } from "@/lib/types";

interface ProjectOverviewSectionProps {
  project: Project;
}

/** "The Goal" overview + role / duration / status card, on a dark clay panel. */
export default function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="clay-dark relative grid grid-cols-1 gap-8 overflow-hidden rounded-[40px] p-8 md:rounded-[56px] md:p-14 lg:grid-cols-3">
          <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -left-8 -top-8 size-24 rounded-full opacity-70" style={{ ["--c" as string]: "var(--tint-lavender)", animationDuration: "9s" }} />

          <div className="relative flex flex-col items-center md:items-start lg:col-span-2">
            <div className="clay-sm clay-pill mb-4 inline-block px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary md:text-[12px]">
              Overview
            </div>
            <h2 className="mb-6 font-display text-[28px] font-semibold md:text-[48px]">
              The <span className="text-primary">Goal</span>
            </h2>
            <p className="text-center text-[14px] leading-[1.7] text-secondary md:text-start md:text-[18px]">
              {project.overview}
            </p>
          </div>

          <div className="clay-sm relative rounded-[32px] p-8">
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary md:text-[12px]">Role</h4>
                <p className="text-[18px] font-bold text-foreground">{project.role}</p>
              </div>
              <div className="clay-inset h-2 rounded-full" aria-hidden="true" />
              <div>
                <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary md:text-[12px]">Duration</h4>
                <p className="text-[18px] font-bold text-foreground">{project.duration}</p>
              </div>
              <div className="clay-inset h-2 rounded-full" aria-hidden="true" />
              <div>
                <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-primary md:text-[12px]">Status</h4>
                <div className="flex items-center gap-2">
                  <span className="size-3 animate-pulse rounded-full bg-green-500"></span>
                  <p className="text-[18px] font-bold text-foreground">{project.status}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
