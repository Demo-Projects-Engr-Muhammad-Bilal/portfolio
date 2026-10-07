import Image from "next/image";
import { ReactNode } from "react";

interface HeroBaseProps {
  leftContent: ReactNode;
  floatingBadge?: ReactNode;
  /** Optional decorative element centred behind the portrait (desktop only). */
  decoration?: ReactNode;
  imageUrl: string;
  imageAlt: string;
  heightClass?: string; // parent can override the section height
}

export default function HeroBase({ leftContent, floatingBadge, decoration, imageUrl, imageAlt, heightClass }: HeroBaseProps) {
  const sectionHeight = heightClass || "min-h-[90vh] md:min-h-[860px]";

  return (
    <section className={`relative flex items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 ${sectionHeight}`}>
      <div className="mx-auto grid w-full max-w-[var(--spacing-container-max)] grid-cols-1 items-center gap-12 px-[var(--spacing-margin-mobile)] md:grid-cols-2 md:px-[var(--spacing-margin-desktop)]">
        {/* Left content */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          {leftContent}
        </div>

        {/* Right: framed portrait */}
        <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
          <div className="clay-lg relative w-[260px] p-3 sm:w-[320px] md:w-[420px]">
            {decoration && (
              <div className="pointer-events-none absolute inset-0">
                {decoration}
              </div>
            )}
            <div className="relative z-[1] aspect-[4/5] w-full overflow-hidden rounded-[34px] bg-[var(--clay-inset-bg)] shadow-[inset_5px_5px_12px_var(--clay-inner-dark)]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 320px, 420px"
              />
            </div>

            {floatingBadge && (
              <div className="absolute -bottom-6 -left-4 z-10 origin-bottom-left scale-90 md:-left-8 md:scale-100">
                {floatingBadge}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
