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
      <h2 className="text-[25px] md:text-[48px] font-bold mb-10 md:mb-16 text-center text-on-surface">
        Key <span className="text-primary-container">Features</span>
      </h2>

      {/* ================= DESKTOP VIEW (100% Untouched) ================= */}
      <div className="hidden md:flex flex-nowrap overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-surface-variant/30 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary-container/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary-container transition-all">
        {features.map((feat, idx) => (
          <div key={idx} className="flex-shrink-0 w-[350px] snap-center bg-surface p-8 rounded-[24px] border border-surface-container-high hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
            <div className="w-14 h-14 bg-primary-fixed-dim/20 rounded-2xl flex items-center justify-center mb-6 text-primary-container">
              <span className="material-symbols-outlined text-3xl">{feat.icon}</span>
            </div>
            <h3 className="text-[20px] font-bold mb-3">{feat.title}</h3>
            <p className="text-secondary text-[15px] leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* ================= MOBILE VIEW: Stack with "View More" (Sizes Adjusted) ================= */}
      <div className="md:hidden flex flex-col gap-3">
        {displayFeatures.map((feat, idx) => (
          <div key={idx} className="bg-surface p-5 rounded-[16px] border border-surface-container-high shadow-sm">
            {/* Icon box size reduced for mobile */}
            <div className="w-10 h-10 bg-primary-fixed-dim/20 rounded-[10px] flex items-center justify-start mb-3 text-primary-container">
              <span className="material-symbols-outlined text-[20px]">{feat.icon}</span>
            </div>
            {/* Text sizes and margins adjusted for mobile compact view */}
            <h3 className="text-[16px] font-bold mb-1.5">{feat.title}</h3>
            <p className="text-secondary text-[13px] leading-relaxed">{feat.desc}</p>
          </div>
        ))}

        {/* View More / View Less Button */}
        {hasMore && (
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-primary-container font-bold flex items-center justify-center gap-2 hover:bg-primary-container/10 border border-surface-variant rounded-full h-12 transition-all w-full"
          >
            {isExpanded ? (
              <>View Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>View All Features <ChevronDown className="w-4 h-4" /></>
            )}
          </Button>
        )}
      </div>
    </section>
  );
}