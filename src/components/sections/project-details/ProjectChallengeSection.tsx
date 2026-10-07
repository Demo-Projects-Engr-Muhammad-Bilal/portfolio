import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ProjectChallenge } from "@/lib/types";

interface ProjectChallengeSectionProps {
  challenge: ProjectChallenge;
}

export default function ProjectChallengeSection({ challenge }: ProjectChallengeSectionProps) {
  return (
    <section className="overflow-hidden py-10 md:py-20">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
          {/* Text column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-start">
            <h2 className="mb-6 font-display text-[28px] font-semibold text-on-surface md:mb-8 md:text-[48px]">
              The <span className="text-primary">Challenge</span>
            </h2>

            <p className="mb-8 text-[14px] leading-[1.7] text-secondary md:text-[18px]">{challenge.text}</p>

            <ul className="w-full space-y-4 text-left">
              {challenge.points.map((point, idx) => (
                <li key={idx} className="clay-sm flex items-start gap-3 rounded-[24px] px-5 py-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary md:size-6" />
                  <span className="text-[14px] leading-relaxed text-secondary md:text-[16px]">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image column */}
          <div className="relative mt-8 flex justify-center lg:mt-0 lg:justify-end">
            <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -right-4 -top-6 size-20 rounded-full opacity-80" style={{ ["--c" as string]: "var(--accent-fill)", animationDuration: "8s" }} />
            <div className="clay-lg relative w-[95%] max-w-[500px] p-3 md:w-full">
              <Image
                src={challenge.image || "/fallback.png"}
                alt="Challenge Visualization"
                width={600}
                height={600}
                priority={false}
                className="h-auto w-full rounded-[32px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
