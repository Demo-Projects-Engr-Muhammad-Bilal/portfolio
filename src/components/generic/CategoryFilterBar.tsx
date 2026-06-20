import { Button } from "@/components/ui/button";

interface CategoryFilterBarProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  /**
   * "pill-solid" matches the original BlogPage filter row (default/ghost
   * variant buttons, solid container background).
   * "outline-glow" matches the original ProjectsDisplay filter row (outline
   * variant buttons with a glow shadow on the active state).
   */
  variant: "pill-solid" | "outline-glow";
}

/**
 * Extracted from the duplicated horizontal-scroll category filter markup in
 * BlogPage and ProjectsDisplay. Each variant reproduces its source's exact
 * classes — nothing is unified or restyled.
 */
export default function CategoryFilterBar({
  categories,
  activeCategory,
  onSelect,
  variant,
}: CategoryFilterBarProps) {
  if (variant === "pill-solid") {
    return (
      <section className="mb-10 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center space-x-3">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "ghost"}
              onClick={() => onSelect(cat)}
              className={`px-5 h-10 rounded-full font-bold transition-all duration-300 whitespace-nowrap text-[13px] md:text-[14px] cursor-pointer ${activeCategory === cat
                ? "bg-primary-container hover:bg-primary-container/90 text-white shadow-md"
                : "bg-surface-container text-secondary hover:text-primary hover:bg-surface-container-highest"
                }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>
    );
  }

  // variant === "outline-glow"
  return (
    <div className="flex flex-nowrap overflow-x-auto gap-3 md:gap-4 mb-8 md:mb-12 pb-4 pt-2 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant="outline"
          onClick={() => onSelect(cat)}
          className={`flex-shrink-0 rounded-full px-5 md:px-7 h-8 md:h-11 text-[12px] md:text-[14px] font-semibold transition-all duration-300 border ${activeCategory === cat
            ? "bg-primary-container text-white border-primary-container shadow-[0_8px_16px_-4px_rgba(255,107,53,0.4)] hover:bg-primary-container hover:-translate-y-0.5"
            : "bg-transparent text-secondary border-surface-variant hover:border-primary-container/50 hover:text-primary hover:bg-primary-container/5 hover:-translate-y-0.5"
            }`}
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
