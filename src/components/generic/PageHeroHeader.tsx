interface PageHeroHeaderProps {
  title: string;
  highlight: string;
  description: string;
  /** "center" (Contact) or "left" on desktop (Projects). */
  align?: "center" | "left";
}

/** Shared page hero: clay chip + puffy display title with accent highlight + muted description. */
export default function PageHeroHeader({ title, highlight, description, align = "center" }: PageHeroHeaderProps) {
  const left = align === "left";

  return (
    <section
      className={`mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] pt-36 pb-10 md:px-[var(--spacing-margin-desktop)] md:pt-44 md:pb-14 ${
        left ? "text-center md:text-left" : "text-center"
      }`}
    >
      <div className={`flex flex-col ${left ? "items-center md:items-start" : "items-center"}`}>
        <p className="clay-sm clay-pill mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 text-[12px] font-semibold text-foreground md:text-[13px]">
          <span className="clay-accent size-2.5 rounded-full" aria-hidden="true" />
          {highlight}
        </p>
        <h1 className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.01em] text-on-surface md:text-[84px]">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className={`mt-6 max-w-2xl text-[14px] leading-[1.7] text-secondary md:text-[17px] ${left ? "" : "mx-auto"}`}>
          {description}
        </p>
      </div>
    </section>
  );
}
