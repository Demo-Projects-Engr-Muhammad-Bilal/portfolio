import type { ProjectResult } from "@/lib/types";

interface ProjectResultsSectionProps {
  results: ProjectResult[];
  resultsDesc?: string;
}

export default function ProjectResultsSection({ results, resultsDesc }: ProjectResultsSectionProps) {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="clay-dark relative overflow-hidden rounded-[40px] p-8 text-center md:rounded-[56px] md:p-16">
          <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-70" style={{ ["--c" as string]: "var(--accent-fill)", animationDuration: "9s" }} />
          <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -bottom-10 -left-6 size-24 rounded-[30px] opacity-70" style={{ ["--c" as string]: "var(--tint-peach)", animationDuration: "11s" }} />

          <div className="relative z-10">
            <h2 className="mb-6 font-display text-[28px] font-semibold md:text-[48px]">
              The <span className="text-primary">Results</span>
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-[14px] leading-[1.6] text-secondary md:mb-16 md:text-[18px]">
              {resultsDesc || "Our implementation significantly improved overall system performance and user engagement, driving measurable growth and stability across all key metrics."}
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
              {results.map((res, idx) => (
                <div key={idx} className="clay-sm rounded-[28px] p-8 md:p-6">
                  <div className="mb-2 font-display text-[48px] font-semibold leading-none text-primary md:text-[60px]">{res.value}</div>
                  <div className="text-[12px] font-bold uppercase tracking-widest text-secondary">{res.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
