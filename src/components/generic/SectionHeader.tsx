import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Heading content - pass JSX so callers can include <span> highlights, <br/>, etc. */
  title: ReactNode;
  /** Optional supporting paragraph shown under the title. */
  description?: ReactNode;
  /** Optional label, rendered as a small clay chip above the title. */
  label?: string;
  /** "center" (default) or "left" (left-aligned on desktop). */
  align?: "center" | "left";
  /** "light" = light text for always-dark panels, "dark" (default) = normal theme text. */
  theme?: "light" | "dark";
  /** Show the short clay accent bar under the title (default true). */
  showDivider?: boolean;
  /** Extra classes appended to the divider bar. */
  dividerClassName?: string;
  /** Extra classes for the outer wrapper. */
  className?: string;
}

/**
 * Shared section header: clay chip label, rounded display title,
 * a soft accent bar and muted description.
 */
export default function SectionHeader({
  title,
  description,
  label,
  align = "center",
  theme = "dark",
  showDivider = true,
  dividerClassName = "",
  className = "",
}: SectionHeaderProps) {
  const light = theme === "light";
  const titleColor = light ? "text-inverse-on-surface" : "text-on-surface";
  const descColor = light ? "text-inverse-on-surface/75" : "text-secondary";
  const chipColor = light ? "text-inverse-on-surface" : "text-foreground";
  const alignClasses =
    align === "left"
      ? "flex flex-col items-center text-center md:items-start md:text-left"
      : "flex flex-col items-center text-center";
  const dividerAlign = align === "left" ? "mx-auto md:mx-0" : "mx-auto";

  return (
    <div className={`${alignClasses} ${className}`}>
      {label && (
        <p className={`clay-sm clay-pill mb-5 inline-flex items-center gap-2.5 px-4 py-1.5 text-[12px] font-semibold md:text-[13px] ${chipColor}`}>
          <span className="clay-accent size-2.5 rounded-full" aria-hidden="true" />
          {label}
        </p>
      )}
      <h2 className={`font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.01em] md:text-[56px] ${titleColor}`}>
        {title}
      </h2>
      {showDivider && (
        <div className={`clay-accent mt-5 h-2 w-16 rounded-full md:w-24 ${dividerAlign} ${dividerClassName}`} />
      )}
      {description && (
        <p className={`mt-5 max-w-2xl text-[15px] leading-[1.7] md:text-[17px] ${descColor}`}>{description}</p>
      )}
    </div>
  );
}
