import type { ProjectResult } from "@/lib/types";

interface ProjectResultsSectionProps {
  results: ProjectResult[];
  resultsDesc?: string;
}

/**
 * Extracted verbatim from the "RESULTS (DARK THEME)" block of
 * app/projects/[id]/page.tsx.
 */
export default function ProjectResultsSection({ results, resultsDesc }: ProjectResultsSectionProps) {
  return (
    <section className="bg-inverse-surface text-white py-10 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="bg-primary-container py-12 rotate-3 whitespace-nowrap text-9xl font-black text-white">SUCCESS IMPACT DELIVERY SCALE GROWTH</div>
      </div>

      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] relative z-10 text-center">
        <h2 className="text-[25px] md:text-[48px] font-bold mb-6">The <span className="text-primary-container">Results</span></h2>

        {/* NEW: Results Detail Paragraph */}
        <p className="text-[13px] md:text-[18px] text-white/70 max-w-3xl mx-auto mb-16 leading-[1.6]">
          {/* Fallback text diya hai agar data.ts mein na ho */}
          {resultsDesc || "Our implementation significantly improved overall system performance and user engagement, driving measurable growth and stability across all key metrics."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {results.map((res, idx) => (
            <div key={idx} className="border border-primary-container p-10 md:p-5 rounded-xl">
              <div className="text-primary-container text-[48px] md:text-[64px] font-extrabold leading-none mb-2 ">{res.value}</div>
              <div className="font-bold text-white/60 uppercase tracking-widest text-[12px]">{res.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
