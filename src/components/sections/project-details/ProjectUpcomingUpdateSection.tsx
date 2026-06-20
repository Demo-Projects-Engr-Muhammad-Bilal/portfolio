import { Sparkles } from "lucide-react";
import type { UpcomingUpdate } from "@/lib/types";

interface ProjectUpcomingUpdateSectionProps {
  upcomingUpdate: UpcomingUpdate;
}

/**
 * Extracted verbatim from the "UPCOMING UPDATE (DARK CARD)" block of
 * app/projects/[id]/page.tsx.
 */
export default function ProjectUpcomingUpdateSection({ upcomingUpdate }: ProjectUpcomingUpdateSectionProps) {
  return (
    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-10 md:py-20">
      <div className="bg-inverse-surface rounded-[24px] p-2 md:p-3 shadow-lg">
        <div className="bg-white/5 rounded-[20px] overflow-hidden p-8 md:p-12 border border-white/10 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <div className="max-w-2xl">
            <span className="text-primary-container font-bold text-[12px] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Upcoming Update
            </span>
            <h2 className="text-[28px] md:text-[40px] font-bold text-white mb-4 leading-tight">
              {upcomingUpdate.title}
            </h2>
            <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed">
              {upcomingUpdate.description}
            </p>
          </div>

          {/* Decorative Element on the right */}
          <div className="hidden md:flex w-24 h-24 rounded-full border-[8px] border-primary-container/20 items-center justify-center shrink-0">
            <div className="w-12 h-12 bg-primary-container rounded-full animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
