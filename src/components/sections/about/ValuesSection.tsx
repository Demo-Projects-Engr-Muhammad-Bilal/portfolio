import { Brain, Sparkles, Zap } from "lucide-react";
import type { ValueItem } from "@/lib/types";
import { Stagger } from "@/components/shared/Reveal";

interface ValuesProps {
  values: ValueItem[];
}

const tints = ["var(--tint-lavender)", "var(--tint-peach)", "var(--tint-mint)"];

export default function ValuesSection({ values }: ValuesProps) {
  // Helper function to map string names to actual Lucide components
  const getIcon = (iconName: string) => {
    const className = "size-7 md:size-8";
    switch (iconName) {
      case "brain": return <Brain className={className} strokeWidth={2.2} />;
      case "sparkles": return <Sparkles className={className} strokeWidth={2.2} />;
      case "zap": return <Zap className={className} strokeWidth={2.2} />;
      default: return <Brain className={className} strokeWidth={2.2} />;
    }
  };

  return (
    <section className="py-16 md:py-[var(--spacing-section-gap)]">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {values.map((val, index) => (
            <div key={index} className="clay clay-hover h-full rounded-[32px] p-8 md:p-10">
              <div
                className="clay-sm mb-6 flex size-16 items-center justify-center rounded-[22px] text-[#1d2540] dark:text-white md:size-20 md:rounded-[26px]"
                style={{ backgroundColor: tints[index % tints.length] }}
              >
                {getIcon(val.iconName)}
              </div>
              <h3 className="mb-3 font-display text-[20px] font-semibold leading-[1.3] text-on-surface md:mb-4 md:text-[24px]">
                {val.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-secondary md:text-[16px]">{val.desc}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
