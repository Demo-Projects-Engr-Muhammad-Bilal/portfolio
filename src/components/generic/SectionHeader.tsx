import type { ReactNode } from "react";

interface SectionHeaderProps {
  /** Heading content — pass JSX directly so callers can include <span> highlights, <br/>, icons, etc. exactly as before. */
  title: ReactNode;
  /** Optional supporting paragraph shown under the title. */
  description?: ReactNode;
  /** "center" (default) matches SkillsSection-style centered headers; "left" matches ProjectsSection-style headers that go left on desktop. */
  align?: "center" | "left";
  /** Text color theme — "light" for dark/inverse-surface backgrounds, "dark" (default) for light backgrounds. */
  theme?: "light" | "dark";
  /** Show the small underline divider bar beneath the title (default true). */
  showDivider?: boolean;
  /** Extra classes appended to the divider bar, for byte-for-byte parity with a specific original call site. */
  dividerClassName?: string;
  /** Extra classes for the outer wrapper, e.g. spacing overrides per call site. */
  className?: string;
}

/**
 * Shared section header: "text-[28px] md:text-[48px] ... text-shadow-md" title
 * + optional underline divider bar, used across ProjectsSection, SkillsSection,
 * and similar sections. Markup/classes are an exact extraction of the
 * previously duplicated inline JSX — no visual change.
 */
export default function SectionHeader({
  title,
  description,
  align = "center",
  theme = "dark",
  showDivider = true,
  dividerClassName = "",
  className = "",
}: SectionHeaderProps) {
  const titleColor = theme === "light" ? "text-surface" : "text-on-surface";
  const descColor = theme === "light" ? "text-surface-variant" : "text-secondary";
  const alignClasses =
    align === "left"
      ? "text-center md:text-left"
      : "flex flex-col items-center text-center";
  const dividerAlign = align === "left" ? "mx-auto md:mx-0" : "mx-auto";

  return (
    <div className={`${alignClasses} ${className}`}>
      <h2 className={`text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-bold mb-3 md:mb-4 text-shadow-md ${titleColor}`}>
        {title}
      </h2>
      {showDivider && (
        <div className={`w-16 md:w-24 h-1 bg-primary-container rounded-full ${dividerAlign} ${dividerClassName}`}></div>
      )}
      {description && (
        <p className={`text-[14px] md:text-[18px] leading-[1.6] mt-3 md:mt-4 ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
