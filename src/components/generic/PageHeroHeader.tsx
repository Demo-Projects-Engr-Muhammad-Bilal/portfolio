import { Sparkles } from "lucide-react";

interface PageHeroHeaderProps {
  title: string;
  highlight: string;
  description: string;
  /** "center" matches ContactHero, "left" (desktop) matches ProjectsHero. */
  align?: "center" | "left";
}

/**
 * Shared "Title <highlight/> + Sparkles + description" hero header used by
 * ContactHero and ProjectsHero. Each call site's exact spacing/alignment
 * classes are preserved via the `align` prop so rendered output is unchanged.
 */
export default function PageHeroHeader({ title, highlight, description, align = "center" }: PageHeroHeaderProps) {
  if (align === "left") {
    // Matches the original ProjectsHero markup exactly.
    return (
      <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] pt-[var(--spacing-section-gap)] pb-12 relative md:px-0">
        <div className="max-w-3xl flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="flex flex-row gap-4 mb-6">
            <h1 className="text-[30px] text-shadow-md md:text-[72px] font-extrabold leading-[1.1] tracking-[-0.04em] text-on-surface">
              {title} <span className="text-primary-container">{highlight}</span>
            </h1>
            <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-primary-container animate-pulse fill-current" />
          </div>
          <p className="text-[14px] md:text-[18px] text-secondary max-w-2xl leading-[1.6] text-center md:text-start">
            {description}
          </p>
        </div>
      </section>
    );
  }

  // Matches the original ContactHero markup exactly.
  return (
    <section className="pt-[var(--spacing-section-gap)] pb-8 md:pb-12 px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto text-center relative">
      {/* Faded Background Icon */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <Sparkles className="w-[120px] h-[120px] text-primary-container" />
      </div>

      <h1 className="text-[30px] md:text-[72px] font-extrabold leading-[1.1] tracking-[-0.04em] mb-4 text-on-surface text-shadow-md">
        {title} <span className="text-primary-container">{highlight}</span>
        <Sparkles className="inline-block w-8 h-8 md:w-12 md:h-12 ml-2 text-primary-container align-top fill-current" />
      </h1>

      <p className="text-[14px] md:text-[18px] text-secondary max-w-2xl mx-auto leading-[1.6] text-center px-4 md:px-0">
        {description}
      </p>
    </section>
  );
}
