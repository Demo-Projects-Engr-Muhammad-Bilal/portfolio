import Image from "next/image";
import type { TechStackItem } from "@/lib/types";

interface TechStackProps {
          techStack: TechStackItem[];
}

export default function TechStackSection({ techStack }: TechStackProps) {
          return (
                    <section className="bg-[#f5f3f3] py-16 md:py-[var(--spacing-section-gap)]">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                        <h2 className="text-[28px] md:text-[40px] font-bold mb-10 md:mb-16 text-center text-on-surface text-shadow-md">
                                                  My <span className="text-primary-container">Tech Stack</span>
                                        </h2>

                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                                                  {techStack.map((tech, index) => (
                                                            <div
                                                                      key={index}
                                                                      className="bg-white p-6 md:p-8 rounded-[24px] hover:-translate-y-2 hover:shadow-[0px_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center cursor-pointer border border-surface-variant/50"
                                                            >
                                                                      {/* Yahan se 'grayscale' aur 'hover:grayscale-0' classes hata di gayi hain */}
                                                                      <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300">
                                                                                <Image
                                                                                          src={tech.icon}
                                                                                          alt={`${tech.name} logo`}
                                                                                          fill
                                                                                          className="object-contain"
                                                                                />
                                                                      </div>
                                                                      <span className="font-semibold text-[14px] md:text-[16px] text-on-surface">
                                                                                {tech.name}
                                                                      </span>
                                                            </div>
                                                  ))}
                                        </div>

                              </div>
                    </section>
          );
}