import type { Project } from "@/lib/types";

interface ProjectOverviewSectionProps {
  project: Project;
}

/**
 * Extracted verbatim from the "OVERVIEW & INFO GRID (DARK THEME)" block of
 * app/projects/[id]/page.tsx.
 */
export default function ProjectOverviewSection({ project }: ProjectOverviewSectionProps) {
  return (
    <section className="bg-inverse-surface text-white py-10 md:py-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 flex flex-col items-center md:items-start">
          <div className="inline-block px-4 py-1 bg-primary-container/20 rounded-full text-primary-fixed-dim font-bold mb-4 text-[10px] md:text-[12px] uppercase tracking-wider">
            Overview
          </div>
          <h2 className="text-[25px] md:text-[48px] font-bold mb-6">The <span className="text-primary-container">Goal</span>
          </h2>
          <p className="text-[13px] md:text-[18px] text-white/70 leading-[1.7] text-center md:text-start">
            {project.overview}
          </p>
        </div>

        {/* Detail Card - Darkened */}
        <div className="bg-white/5 p-8 rounded-[24px] border border-white/10 shadow-lg">
          <div className="space-y-6">
            <div>
              <h4 className="text-primary-container font-bold text-[10px] md:text-[12px] uppercase tracking-wider mb-2">Role</h4>
              <p className="text-[18px] font-bold text-white">{project.role}</p>
            </div>
            <hr className="border-white/10" />
            <div>
              <h4 className="text-primary-container font-bold text-[10px] md:text-[12px] uppercase tracking-wider mb-2">Duration</h4>
              <p className="text-[18px] font-bold text-white">{project.duration}</p>
            </div>
            <hr className="border-white/10" />
            <div>
              <h4 className="text-primary-container font-bold text-[10px] md:text-[12px] uppercase tracking-wider mb-2">Status</h4>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-[18px] font-bold text-white">{project.status}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
