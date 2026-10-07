interface CategoryFilterBarProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  /** Kept for backward compatibility; both variants share the clay chip style, only spacing differs. */
  variant: "pill-solid" | "outline-glow";
}

const chip =
  "clay-pill h-10 shrink-0 cursor-pointer whitespace-nowrap px-5 text-[13px] font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 md:h-11 md:px-6";

export default function CategoryFilterBar({ categories, activeCategory, onSelect, variant }: CategoryFilterBarProps) {
  // padding keeps the clay shadows from being clipped by the scroll container
  const wrapper =
    variant === "pill-solid" ? "-mx-4 mb-6 overflow-x-auto px-4 pb-8 pt-3" : "-mx-4 mb-4 overflow-x-auto px-4 pb-8 pt-3 md:mb-8";

  return (
    <div className={`${wrapper} [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
      <div className="flex flex-nowrap items-center gap-3 md:gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelect(cat)}
            aria-pressed={activeCategory === cat}
            className={`${chip} ${
              activeCategory === cat
                ? "clay-accent clay-pressed"
                : "clay-sm clay-hover text-secondary hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
