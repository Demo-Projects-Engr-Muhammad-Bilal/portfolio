import ExperienceBase from "@/components/generic/ExperienceBase";
import type { Experience } from "@/lib/types";

export default function AboutExperience({ experiences }: { experiences: Experience[] }) {
  // Specific header for About page (sits on a dark clay panel)
  const aboutHeader = (
    <h2 className="relative z-10 text-center font-display text-[30px] font-semibold leading-[1.2] text-inverse-on-surface md:text-left md:text-[48px]">
      My <span className="text-[var(--accent-fill)]">Journey</span>
    </h2>
  );

  return (
    <section className="px-3 py-16 md:px-6 md:py-[var(--spacing-section-gap)]" id="journey">
      <div className="clay-dark relative mx-auto max-w-[1280px] overflow-hidden rounded-[40px] py-12 md:rounded-[56px] md:py-20">
        <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -right-10 -top-10 size-36 rounded-full opacity-60" style={{ ["--c" as string]: "var(--tint-lavender)", animationDuration: "10s" }} />
        <ExperienceBase experiences={experiences} theme="dark" headerContent={aboutHeader} />
      </div>
    </section>
  );
}
