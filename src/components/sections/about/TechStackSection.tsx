import Image from "next/image";
import type { TechStackItem } from "@/lib/types";
import Tilt from "@/components/shared/Tilt";

interface TechStackProps {
  techStack: TechStackItem[];
}

export default function TechStackSection({ techStack }: TechStackProps) {
  return (
    <section className="py-16 md:py-[var(--spacing-section-gap)]">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <h2 className="mb-10 text-center font-display text-[30px] font-semibold text-on-surface md:mb-16 md:text-[48px]">
          My <span className="text-primary">Tech Stack</span>
        </h2>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
          {techStack.map((tech, index) => (
            <Tilt key={index} className="h-full rounded-[32px]">
              <div className="clay clay-hover flex h-full cursor-pointer flex-col items-center justify-center gap-4 rounded-[32px] p-6 text-center md:p-8">
                <div className="clay-sm relative flex size-16 items-center justify-center rounded-[22px] md:size-20">
                  <div className="relative size-8 md:size-10">
                    <Image src={tech.icon} alt={`${tech.name} logo`} fill className="object-contain" />
                  </div>
                </div>
                <span className="text-[14px] font-semibold text-on-surface md:text-[16px]">{tech.name}</span>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
