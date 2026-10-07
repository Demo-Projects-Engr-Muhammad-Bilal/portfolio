"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { ApproachStep } from "@/lib/types";

export default function ProjectApproach({ approach }: { approach: ApproachStep[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialMobileCount = 3; // Mobile par shuru mein kitne rows dikhane hain

  if (!approach || approach.length === 0) return null;

  const displayApproach = isExpanded ? approach : approach.slice(0, initialMobileCount);
  const hasMore = approach.length > initialMobileCount;

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="clay-dark relative overflow-hidden rounded-[40px] p-6 md:rounded-[56px] md:p-14">
          <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-60" style={{ ["--c" as string]: "var(--tint-sky)", animationDuration: "10s" }} />

          <h2 className="relative mb-10 text-center font-display text-[28px] font-semibold md:mb-16 md:text-[48px]">
            My <span className="text-primary">Approach</span>
          </h2>

          {/* ================= DESKTOP VIEW ================= */}
          <div className="-mx-6 hidden snap-x snap-mandatory flex-nowrap gap-8 overflow-x-auto px-6 pb-10 pt-4 md:flex [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/50 hover:[&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/5">
            {approach.map((step) => (
              <div key={step.step} className="group relative w-[380px] flex-shrink-0 snap-center pt-10">
                <div className="absolute -left-2 top-0 z-0 font-display text-9xl font-black text-foreground/10 transition-colors duration-500 group-hover:text-primary/20">
                  {step.step}
                </div>
                <div className="clay-sm relative z-10 h-full rounded-[28px] p-8">
                  <h3 className="mb-4 font-display text-[24px] font-semibold text-primary">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-secondary">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= MOBILE VIEW ================= */}
          <div className="relative flex flex-col gap-6 md:hidden">
            {displayApproach.map((step) => (
              <div key={step.step} className="group relative pt-8">
                <div className="absolute -left-2 top-0 z-0 font-display text-8xl font-black text-foreground/10">
                  {step.step}
                </div>
                <div className="clay-sm relative z-10 h-full rounded-[24px] p-6">
                  <h3 className="mb-3 font-display text-[20px] font-semibold text-primary">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-secondary">{step.desc}</p>
                </div>
              </div>
            ))}

            {hasMore && (
              <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)} className="mt-4 h-12 w-full gap-2 text-primary">
                {isExpanded ? (
                  <>View Less <ChevronUp className="size-4" /></>
                ) : (
                  <>View All Steps <ChevronDown className="size-4" /></>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
