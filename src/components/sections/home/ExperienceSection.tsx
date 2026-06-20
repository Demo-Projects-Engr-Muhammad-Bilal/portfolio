import ExperienceBase from "@/components/generic/ExperienceBase";
import type { Experience } from "@/lib/types";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {

          // Specific header for homepage
          const homeHeader = (
                    <div className="flex flex-col gap-2 text-center md:text-left">
                              <h2 className="text-[28px] md:text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-on-surface text-shadow-md">
                                        Experience
                              </h2>
                              <p className="text-secondary text-[16px] md:text-[18px] leading-[1.6]">
                                        My professional journey in tech.
                              </p>
                    </div>
          );

          return (
                    <section className="py-16 md:py-[var(--spacing-section-gap)] bg-background" id="experience">
                              <ExperienceBase
                                        experiences={experiences}
                                        theme="light"
                                        headerContent={homeHeader}
                              />
                    </section>
          );
}