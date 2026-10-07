import { ArrowRight, ArrowDown } from "lucide-react";
import HeroBase from "@/components/generic/HeroBase";
import type { HeroData } from "@/lib/types";
import Link from "next/link";
import Magnetic from "@/components/shared/Magnetic";
import { buttonVariants } from "@/components/ui/button";
import HeroDecoration from "@/components/sections/home/HeroDecoration";

export default function HeroSection({ data }: { data: HeroData }) {
  const homeLeftContent = (
    <>
      {/* Status badge */}
      <span className="clay-sm clay-pill mb-8 inline-flex items-center gap-3 px-5 py-2 text-[13px] font-semibold text-foreground">
        <span className="relative flex size-2.5">
          <span className="clay-ping absolute inset-0 rounded-full bg-primary" />
          <span className="relative size-2.5 rounded-full bg-primary" />
        </span>
        Available for work
      </span>

      <p className="mb-2 text-[15px] text-secondary md:text-[18px]">
        Hello, I&apos;m {data.name}. A full-stack
      </p>

      <h1 className="mb-6 font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.01em] text-on-surface sm:text-[60px] md:text-[78px]">
        {data.role}
      </h1>

      <p className="mb-10 max-w-lg text-[14px] leading-[1.7] text-secondary md:text-[17px]">
        {data.description}
      </p>

      <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row md:justify-start">
        <Magnetic className="flex sm:inline-flex">
        <Link href="/projects" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
          View projects
          <ArrowRight strokeWidth={2.2} className="transition-transform duration-300 group-hover/button:translate-x-1" />
        </Link>
        </Magnetic>
        <Magnetic className="flex sm:inline-flex">
          <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto" })}>
            Hire me
          </Link>
        </Magnetic>
      </div>

      <p className="mt-14 hidden items-center gap-3 text-sm font-medium text-secondary md:flex">
        Scroll to explore
        <ArrowDown size={14} strokeWidth={1.5} />
      </p>
    </>
  );

  // Stack card overlapping the portrait frame
  const homeBadge = (
    <div className="clay-sm rounded-[24px] px-5 py-3 md:px-6 md:py-4">
      <p className="mb-0.5 text-[12px] font-semibold text-secondary">Main stack</p>
      <p className="font-display text-[15px] font-semibold text-on-surface md:text-[17px]">
        Next.js · React · Node.js
      </p>
    </div>
  );

  return (
    <HeroBase
      leftContent={homeLeftContent}
      floatingBadge={homeBadge}
      decoration={<HeroDecoration />}
      imageUrl="/profile.png"
      imageAlt={`${data.name} - ${data.role}`}
    />
  );
}
