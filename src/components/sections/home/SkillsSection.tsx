import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionHeader from "@/components/generic/SectionHeader";
import { getIconComponent } from "@/lib/iconMap";
import type { Skill } from "@/lib/types";

export default function SkillsSection({ skills }: { skills: Skill[] }) {
          return (
                    // Mobile py-16, Desktop py-section-gap
                    <section className="bg-inverse-surface py-16 md:py-[var(--spacing-section-gap)] relative overflow-hidden" id="about">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] relative z-10">

                                        {/* Section Header */}
                                        <SectionHeader
                                                  title="What I Do"
                                                  theme="light"
                                                  align="center"
                                                  className="mb-10 md:mb-16"
                                        />

                                        {/* Skills Grid - Mobile gap-5, Desktop gap-8 */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
                                                  {skills.map((skill) => {
                                                            const Icon = getIconComponent(skill.icon);
                                                            return (
                                                                      <div
                                                                                key={skill.id}
                                                                                // Mobile padding p-6, Desktop p-8
                                                                                className="bg-surface/5 border border-surface/10 p-6 md:p-8 rounded-[var(--radius-card)] relative group overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0px_20px_40px_rgba(255,107,53,0.1)] cursor-default"
                                                                      >
                                                                                {/* Icon Container - Height adjusted for mobile */}
                                                                                <div className="mb-4 md:mb-6 text-primary-container flex items-center justify-start h-[40px] md:h-[50px]">
                                                                                          <Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={3} />
                                                                                </div>

                                                                                {/* Title - Mobile 20px, Desktop 24px */}
                                                                                <h3 className="text-[20px] md:text-[24px] font-semibold text-surface mb-3 md:mb-4 leading-[1.3] [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]">
                                                                                          {skill.title}
                                                                                </h3>

                                                                                {/* Description - Mobile 14px, Desktop 16px */}
                                                                                <p className="text-surface/70 text-[14px] md:text-[16px] leading-[1.6] mb-12 md:mb-12">
                                                                                          {skill.desc}
                                                                                </p>

                                                                                {/* Corner Action Button - Shrunk for mobile, exact positions adjusted */}
                                                                                <button
                                                                                          className="absolute bottom-5 right-5 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full border border-surface/20 flex items-center justify-center text-surface cursor-pointer group-hover:bg-primary-container group-hover:border-primary-container group-hover:text-on-primary-container transition-all duration-300"
                                                                                          aria-label={`Learn more about ${skill.title}`}
                                                                                >
                                                                                          <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                                                                                </button>
                                                                      </div>
                                                            );
                                                  })}
                                        </div>
                              </div>

                              {/* Decorative Sparkles (raw code) */}
                              <div className="absolute top-20 right-10 opacity-20 hidden md:block">
                                        <Sparkles size={64} className="text-primary-container" strokeWidth={1} />
                              </div>
                    </section>
          );
}
