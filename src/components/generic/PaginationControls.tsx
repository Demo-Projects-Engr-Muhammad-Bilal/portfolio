import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPageSelect: (page: number) => void;
  /** "icon-arrows" (Blog) or "text-buttons" (Projects). Same sharp style, different prev/next labels + spacing. */
  variant: "icon-arrows" | "text-buttons";
}

const box =
  "clay-pill inline-flex h-10 min-w-10 cursor-pointer items-center justify-center font-mono text-[12px] uppercase tracking-wider outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 disabled:cursor-not-allowed disabled:opacity-40 md:h-12 md:min-w-12";
const idle = "clay-sm clay-hover text-secondary hover:text-foreground";
const active = "clay-accent clay-pressed";

export default function PaginationControls({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onPageSelect,
  variant,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  const icons = variant === "icon-arrows";
  const wrapper = icons
    ? "mb-20 flex items-center justify-center gap-2 md:mb-32"
    : "mt-10 flex items-center justify-center gap-2 md:mt-16";

  return (
    <nav aria-label="Pagination" className={wrapper}>
      <button
        type="button"
        onClick={onPrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`${box} ${idle} ${icons ? "" : "px-4 md:px-6"}`}
      >
        {icons ? <ChevronLeft className="size-4" /> : "Previous"}
      </button>

      {Array.from({ length: totalPages }).map((_, idx) => {
        const page = idx + 1;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageSelect(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`${box} ${currentPage === page ? active : idle}`}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={onNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`${box} ${idle} ${icons ? "" : "px-4 md:px-6"}`}
      >
        {icons ? <ChevronRight className="size-4" /> : "Next"}
      </button>
    </nav>
  );
}
