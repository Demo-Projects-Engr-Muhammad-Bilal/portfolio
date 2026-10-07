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
    <section className="overflow-hidden py-12 md:py-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-2 gap-5 md:gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="clay flex flex-col justify-center rounded-[32px] px-4 py-8 text-center md:py-10">
              <div className="mb-2 font-display text-[44px] font-semibold leading-none text-primary md:text-[60px]">
                <AnimatedCounter value={stat.number} />
              </div>
              <div className="mt-2 text-[12px] font-semibold uppercase tracking-widest text-secondary md:text-[13px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
