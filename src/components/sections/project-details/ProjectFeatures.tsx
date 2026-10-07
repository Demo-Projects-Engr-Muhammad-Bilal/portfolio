"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { ProjectFeature } from "@/lib/types";

export default function ProjectFeatures({ features }: { features: ProjectFeature[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialMobileCount = 3; // Mobile par shuru mein kitne dikhane hain

  if (!features || features.length === 0) return null;

  const displayFeatures = isExpanded ? features : features.slice(0, initialMobileCount);
  const hasMore = features.length > initialMobileCount;

  return (
    <section className="py-10 md:py-20 max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
      <h2 className="mb-10 text-center font-display text-[28px] font-semibold text-on-surface md:mb-16 md:text-[48px]">
        Key <span className="text-primary">Features</span>
      </h2>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="-mx-6 hidden snap-x snap-mandatory flex-nowrap gap-8 overflow-x-auto px-6 pb-12 pt-4 md:flex [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/40 hover:[&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-surface-variant/30">
        {features.map((feat, idx) => (
          <div key={idx} className="clay w-[350px] flex-shrink-0 snap-center rounded-[32px] p-8">
            <div className="clay-sm mb-6 flex size-14 items-center justify-center rounded-[20px] text-primary">
              <span className="material-symbols-outlined text-3xl">{feat.icon}</span>
            </div>
            <h3 className="mb-3 font-display text-[20px] font-semibold text-on-surface">{feat.title}</h3>
            <p className="text-[15px] leading-relaxed text-secondary">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* ================= MOBILE VIEW: Stack with "View More" ================= */}
      <div className="flex flex-col gap-5 md:hidden">
        {displayFeatures.map((feat, idx) => (
          <div key={idx} className="clay rounded-[28px] p-5">
            <div className="clay-sm mb-3 flex size-11 items-center justify-center rounded-[16px] text-primary">
              <span className="material-symbols-outlined text-[20px]">{feat.icon}</span>
            </div>
            <h3 className="mb-1.5 font-display text-[16px] font-semibold text-on-surface">{feat.title}</h3>
            <p className="text-[13px] leading-relaxed text-secondary">{feat.desc}</p>
          </div>
        ))}

        {hasMore && (
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 h-12 w-full gap-2 text-primary"
          >
            {isExpanded ? (
              <>View Less <ChevronUp className="size-4" /></>
            ) : (
              <>View All Features <ChevronDown className="size-4" /></>
            )}
          </Button>
        )}
      </div>
    </section>
  );
}
