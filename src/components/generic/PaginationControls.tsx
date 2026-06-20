import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onPageSelect: (page: number) => void;
  /**
   * "icon-arrows" matches the original BlogPage style (round icon-only
   * prev/next buttons with numbered circles).
   * "text-buttons" matches the original ProjectsDisplay style (text
   * "Previous"/"Next" buttons with numbered circular page buttons).
   */
  variant: "icon-arrows" | "text-buttons";
}

/**
 * Extracted from the duplicated pagination markup in BlogPage and
 * ProjectsDisplay. Each variant reproduces its source's exact classes —
 * nothing is unified or restyled.
 */
export default function PaginationControls({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onPageSelect,
  variant,
}: PaginationControlsProps) {
  if (totalPages <= 1) return null;

  if (variant === "icon-arrows") {
    return (
      <section className="flex justify-center items-center space-x-2 mb-20 md:mb-32">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrev}
          disabled={currentPage === 1}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors text-secondary cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {[...Array(totalPages)].map((_, idx) => {
          const pageNum = idx + 1;
          return (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "outline"}
              onClick={() => onPageSelect(pageNum)}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full font-bold text-[14px] transition-all cursor-pointer ${currentPage === pageNum
                ? "bg-primary-container hover:bg-primary-container/90 text-white shadow-md border-0"
                : "border border-surface-variant text-secondary hover:bg-surface-container"
                }`}
            >
              {pageNum}
            </Button>
          );
        })}

        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-surface-variant flex items-center justify-center hover:bg-surface-container transition-colors text-secondary cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </section>
    );
  }

  // variant === "text-buttons"
  return (
    <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-10 md:mt-16">
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={currentPage === 1}
        className="rounded-full h-9 md:h-12 px-4 md:px-6 font-semibold text-[12px] md:text-[14px]"
      >
        Previous
      </Button>

      <div className="flex gap-1 md:gap-2 px-1 md:px-4">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onPageSelect(idx + 1)}
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full font-bold text-[12px] md:text-[14px] transition-colors ${currentPage === idx + 1
              ? "bg-primary-container text-white"
              : "text-secondary hover:bg-surface-variant"
              }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <Button
        variant="outline"
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="rounded-full h-9 md:h-12 px-4 md:px-6 font-semibold text-[12px] md:text-[14px]"
      >
        Next
      </Button>
    </div>
  );
}
