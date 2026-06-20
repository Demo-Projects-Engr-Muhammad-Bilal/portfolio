"use client";

import { useState, useEffect, useRef } from "react";
import type { Stat } from "@/lib/types";

// Counter Hook Component: Number aur symbol (+, %) ko alag kar ke animate karta hai
function AnimatedCounter({ value }: { value: string }) {
          const [count, setCount] = useState(0);
          const ref = useRef<HTMLDivElement>(null);

          // Extract number and suffix (e.g., "50+" -> numericPart: 50, suffix: "+")
          const numericPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
          const suffix = value.replace(/[0-9]/g, "");

          useEffect(() => {
                    const observer = new IntersectionObserver(
                              (entries) => {
                                        // Jab element screen par nazar aaye
                                        if (entries[0].isIntersecting) {
                                                  let start = 0;
                                                  const duration = 2000; // 2 seconds ki animation
                                                  const increment = numericPart / (duration / 16); // 60fps ke hisaab se step

                                                  const timer = setInterval(() => {
                                                            start += increment;
                                                            if (start >= numericPart) {
                                                                      setCount(numericPart);
                                                                      clearInterval(timer);
                                                            } else {
                                                                      setCount(Math.ceil(start));
                                                            }
                                                  }, 16);

                                                  // Ek dafa animate hone ke baad observe karna band kar de
                                                  observer.disconnect();
                                        }
                              },
                              { threshold: 0.5 } // Jab 50% section screen par ho tab start ho
                    );

                    if (ref.current) {
                              observer.observe(ref.current);
                    }

                    return () => observer.disconnect();
          }, [numericPart]);

          return (
                    <div ref={ref}>
                              {count}{suffix}
                    </div>
          );
}

interface StatsSectionProps {
          stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
          return (
                    <section className="bg-white py-12 md:py-20 border-y border-surface-container overflow-hidden">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                                                  {stats.map((stat, index) => (
                                                            <div
                                                                      key={index}
                                                                      className={`text-center flex flex-col justify-center ${index !== 3 ? "lg:border-r border-surface-container" : ""
                                                                                } ${index % 2 === 0 ? "border-r border-surface-container lg:border-none" : ""}`}
                                                            >
                                                                      {/* Font size bara kiya aur drop-shadow apply kiya */}
                                                                      <div className="text-[48px] md:text-[64px] font-extrabold text-primary-container mb-2 leading-none drop-shadow-md">
                                                                                <AnimatedCounter value={stat.number} />
                                                                      </div>

                                                                      <div className="text-[12px] md:text-[14px] font-semibold text-secondary uppercase tracking-widest mt-2">
                                                                                {stat.label}
                                                                      </div>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    </section>
          );
}