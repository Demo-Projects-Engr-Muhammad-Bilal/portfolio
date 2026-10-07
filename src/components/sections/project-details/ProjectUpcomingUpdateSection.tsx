import { Sparkles } from "lucide-react";
import type { UpcomingUpdate } from "@/lib/types";

interface ProjectUpcomingUpdateSectionProps {
  upcomingUpdate: UpcomingUpdate;
}

export default function ProjectUpcomingUpdateSection({ upcomingUpdate }: ProjectUpcomingUpdateSectionProps) {
  return (
    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-10 md:py-20">
      <div className="clay-dark relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[40px] p-8 md:flex-row md:items-center md:rounded-[56px] md:p-14">
        <div className="max-w-2xl">
          <span className="clay-sm clay-pill mb-4 inline-flex items-center gap-2 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-primary">
            <Sparkles className="size-4" /> Upcoming Update
          </span>
          <h2 className="mb-4 font-display text-[28px] font-semibold leading-tight md:text-[40px]">
            {upcomingUpdate.title}
          </h2>
          <p className="text-[15px] leading-relaxed text-secondary md:text-[16px]">{upcomingUpdate.description}</p>
        </div>

        {/* Decorative clay orb */}
        <div className="clay-sm hidden size-24 shrink-0 items-center justify-center rounded-full md:flex">
          <span className="clay-blob size-12 animate-pulse rounded-full" style={{ ["--c" as string]: "var(--accent-fill)" }} />
        </div>
      </div>
    </section>
  );
}
