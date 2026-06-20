import type { Experience } from "@/lib/types";

interface ExperienceBaseProps {
          experiences: Experience[];
          theme: "light" | "dark";
          headerContent: React.ReactNode;
}

export default function ExperienceBase({ experiences, theme, headerContent }: ExperienceBaseProps) {
          // Theme ke mutabiq text colors set karna
          const headingColor = theme === "dark" ? "text-white" : "text-on-surface";
          const descColor = theme === "dark" ? "text-surface-variant" : "text-secondary";

          return (
                    <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                              {/* Dynamic Header Injected Here */}
                              <div className="mb-10 md:mb-16">
                                        {headerContent}
                              </div>

                              {/* Timeline Container */}
                              <div className="relative">
                                        {/* Vertical Dashed Line */}
                                        <div className="absolute left-[7px] md:left-1/2 transform md:-translate-x-1/2 h-full w-px border-l-2 border-dashed border-primary-container/30"></div>

                                        {/* Experience Entries */}
                                        <div className="space-y-10 md:space-y-16">
                                                  {experiences.map((exp, index) => (
                                                            <div
                                                                      key={exp.id}
                                                                      className={`relative flex flex-col md:flex-row md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                                            >
                                                                      {/* Text Content Column (Role, Company, Date) */}
                                                                      <div className={`md:w-1/2 w-full pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pr-[var(--spacing-margin-desktop)] md:text-right' : 'md:pl-[var(--spacing-margin-desktop)] md:text-left'}`}>
                                                                                <h4 className={`font-semibold text-[18px] md:text-[20px] mb-1 leading-[1.4] ${headingColor}`}>
                                                                                          {exp.role}
                                                                                </h4>
                                                                                <p className="text-primary font-bold text-[16px] md:text-[18px] mb-2 tracking-wide uppercase">
                                                                                          {exp.company}
                                                                                </p>
                                                                                <p className={`text-[14px] md:text-[16px] leading-[1.5] ${descColor}`}>
                                                                                          {exp.period}
                                                                                </p>
                                                                      </div>

                                                                      {/* Timeline Dot */}
                                                                      <div
                                                                                className={`absolute left-[7px] md:left-1/2 transform -translate-x-1/2 mt-1.5 md:mt-0 w-4 h-4 bg-primary-container rounded-full cursor-pointer hover:scale-125 transition-transform duration-300 ${theme === "dark"
                                                                                                    ? "border-4 border-inverse-surface ring-4 ring-primary-container/20"
                                                                                                    : "shadow-[0_0_0_8px_rgba(255,107,53,0.15)]"
                                                                                          }`}
                                                                                aria-label={`Time marker for ${exp.company} experience`}
                                                                      ></div>

                                                                      {/* Description Column */}
                                                                      <div className={`md:w-1/2 w-full pl-10 md:pl-0 mt-3 md:mt-0 ${index % 2 === 0 ? 'md:pl-[var(--spacing-margin-desktop)]' : 'md:pr-[var(--spacing-margin-desktop)] md:text-right'}`}>
                                                                                <p className={`text-[14px] md:text-[16px] leading-[1.6] ${descColor}`}>
                                                                                          {exp.description}
                                                                                </p>
                                                                      </div>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    </div>
          );
}