import type { Experience } from "@/lib/types";
import { Stagger } from "@/components/shared/Reveal";

interface ExperienceBaseProps {
  experiences: Experience[];
  /** "dark" = sits on an always-dark panel (light text); "light" = normal theme text. */
  theme: "light" | "dark";
  headerContent: React.ReactNode;
}

/** Timeline: clay beads on a soft groove line, entries as clay cards. */
export default function ExperienceBase({ experiences, theme, headerContent }: ExperienceBaseProps) {
  const onPanel = theme === "dark";
  const headingColor = onPanel ? "text-inverse-on-surface" : "text-on-surface";
  const descColor = onPanel ? "text-inverse-on-surface/75" : "text-secondary";
  const card = onPanel ? "clay-dark" : "clay";

  return (
    <div className="mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
      <div className="mb-12 md:mb-16">{headerContent}</div>

      <div className="relative">
        {/* Soft groove line */}
        <div
          aria-hidden="true"
          className="clay-inset absolute left-[11px] h-full w-2 -translate-x-1/2 rounded-full md:left-1/2"
          style={onPanel ? { ["--clay-inset-bg" as string]: "rgba(10,14,32,0.4)", ["--clay-inner-dark" as string]: "rgba(0,0,0,0.45)", ["--clay-inner-light" as string]: "rgba(255,255,255,0.08)" } : undefined}
        />

        <Stagger className="space-y-10 md:space-y-14" itemClassName="">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Bead */}
              <span
                aria-label={`Time marker for ${exp.company} experience`}
                role="img"
                className="absolute left-[11px] top-8 z-10 size-6 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2"
              >
                <span className="clay-ping absolute inset-0 rounded-full bg-[var(--accent-fill)]/60" />
                <span className="clay-accent relative block size-6 rounded-full" />
              </span>

              {/* Card (alternates sides on desktop) */}
              <div className={`ml-12 md:w-[calc(50%-48px)] ${index % 2 !== 0 ? "md:ml-auto" : "md:ml-0 md:mr-auto"}`}>
                <div className={`${card} clay-hover rounded-[32px] p-6 md:p-8`}>
                  <p className={`clay-sm clay-pill mb-4 inline-flex px-4 py-1 text-[12px] font-semibold md:text-[13px] ${onPanel ? "text-[var(--accent-fill)]" : "text-primary"}`}>
                    {exp.period}
                  </p>
                  <h4 className={`mb-1 font-display text-[20px] font-semibold leading-[1.3] md:text-[24px] ${headingColor}`}>
                    {exp.role}
                  </h4>
                  <p className={`mb-3 text-[14px] font-semibold md:text-[15px] ${onPanel ? "text-[var(--accent-fill)]" : "text-primary"}`}>
                    {exp.company}
                  </p>
                  <p className={`text-[14px] leading-[1.7] md:text-[15px] ${descColor}`}>{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
