import { Brain, Sparkles, Zap } from "lucide-react";
import type { ValueItem } from "@/lib/types";

interface ValuesProps {
          values: ValueItem[];
}

export default function ValuesSection({ values }: ValuesProps) {
          // Helper function to map string names to actual Lucide components
          const getIcon = (iconName: string) => {
                    const className = "w-10 h-10 md:w-12 md:h-12";
                    switch (iconName) {
                              case "brain": return <Brain className={className} strokeWidth={3} />;
                              case "sparkles": return <Sparkles className={className} strokeWidth={3} />;
                              case "zap": return <Zap className={className} strokeWidth={3} />;
                              default: return <Brain className={className} strokeWidth={3} />;
                    }
          };

          return (
                    <section className="bg-surface-container py-16 md:py-[var(--spacing-section-gap)]">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                                                  {values.map((val, index) => (
                                                            <div key={index} className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                                                                      <div className="text-primary-container mb-6">
                                                                                {getIcon(val.iconName)}
                                                                      </div>
                                                                      <h3 className="text-[20px] md:text-[24px] font-bold text-on-surface mb-3 md:mb-4 leading-[1.3] text-shadow-md">
                                                                                {val.title}
                                                                      </h3>
                                                                      <p className="text-secondary text-[14px] md:text-[16px] leading-[1.6]">
                                                                                {val.desc}
                                                                      </p>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    </section>
          );
}