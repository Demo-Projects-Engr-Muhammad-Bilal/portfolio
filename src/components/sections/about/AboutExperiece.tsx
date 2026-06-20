import ExperienceBase from "@/components/generic/ExperienceBase";
import type { Experience } from "@/lib/types";

export default function AboutExperience({ experiences }: { experiences: Experience[] }) {

          // Specific header for About page
          const aboutHeader = (
                    <h2 className="text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-white text-shadow-md relative z-10 text-center md:text-left">
                              My <span className="text-primary-container">Journey</span>
                    </h2>
          );

          return (
                    // Background is dark (inverse-surface)
                    <section className="py-16 md:py-[var(--spacing-section-gap)] bg-inverse-surface overflow-hidden relative" id="journey">
                              <ExperienceBase
                                        experiences={experiences}
                                        theme="dark"
                                        headerContent={aboutHeader}
                              />
                    </section>
          );
}