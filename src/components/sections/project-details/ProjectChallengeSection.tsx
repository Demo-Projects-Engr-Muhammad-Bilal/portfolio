import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { ProjectChallenge } from "@/lib/types";

interface ProjectChallengeSectionProps {
  challenge: ProjectChallenge;
}

/**
 * Extracted verbatim from the "THE CHALLENGE (LIGHT)" block of
 * app/projects/[id]/page.tsx.
 */
export default function ProjectChallengeSection({ challenge }: ProjectChallengeSectionProps) {
  return (
    <section className="bg-surface-container-lowest py-10 md:py-20 overflow-hidden">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16">

          {/* Text Column: Mobile Center, Desktop Start */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <h2 className="text-[28px] md:text-[48px] font-bold mb-6 md:mb-8">
              The <span className="text-primary-container">Challenge</span>
            </h2>

            <p className="text-[14px] md:text-[18px] text-secondary mb-8 leading-[1.6]">
              {challenge.text}
            </p>

            {/* List Container - Centered block on mobile, aligned left internally */}
            <ul className="space-y-4 inline-block text-left w-[90%] sm:w-auto">
              {challenge.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 md:size-6 text-primary-container shrink-0 mt-0.5" />
                  <span className="text-[14px] md:text-[16px] text-secondary leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column: Properly Sized and Balanced */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] h-[80%] max-w-[500px] bg-primary-container/10 rounded-full blur-3xl"></div>

            <Image
              src={challenge.image || "/fallback.png"}
              alt="Challenge Visualization"
              width={600}
              height={600}
              priority={false}
              // Mobile pe full width legi, Desktop pe max 500px tak ruk jayegi (Balanced Size)
              className="relative rounded-[24px] shadow-xl w-[95%] md:w-full h-auto max-w-[500px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
