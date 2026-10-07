import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/generic/SectionHeader";
import Magnetic from "@/components/shared/Magnetic";
import Tilt from "@/components/shared/Tilt";
import { buttonVariants } from "@/components/ui/button";

const features = [
  "Fast-paced delivery with high precision",
  "Excellent communication and team collaboration",
  "Always up-to-date with latest React & Next.js standards",
];

const stats = [
  { value: "50+", label: "Projects done" },
  { value: "12+", label: "Tech stack" },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-[var(--spacing-section-gap)]" id="about">
      <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -left-16 top-24 hidden size-40 rounded-full opacity-60 md:block" style={{ ["--c" as string]: "var(--tint-sky)", animationDuration: "10s" }} />
      <div className="relative mx-auto grid max-w-[var(--spacing-container-max)] grid-cols-1 items-center gap-12 px-[var(--spacing-margin-mobile)] md:grid-cols-2 md:gap-16 md:px-[var(--spacing-margin-desktop)]">
        {/* Left: framed image + stat pillows */}
        <div>
          <Tilt className="rounded-[44px]">
            <div className="clay-lg p-3">
              <div className="group relative h-[300px] overflow-hidden rounded-[34px] bg-[var(--clay-inset-bg)] shadow-[inset_5px_5px_12px_var(--clay-inner-dark)] md:h-[420px]">
                <Image
                  src="/workspace.png"
                  alt="Developer workspace"
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </Tilt>
          <div className="mt-8 grid grid-cols-2 gap-5 md:gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="clay clay-hover rounded-[32px] px-5 py-5 md:px-7 md:py-6">
                <span
                  aria-hidden="true"
                  className="clay-blob mb-3 block size-3.5 rounded-full"
                  style={{ ["--c" as string]: i === 0 ? "var(--accent-fill)" : "var(--tint-peach)" }}
                />
                <p className="font-display text-[32px] font-semibold leading-none text-on-surface md:text-[44px]">
                  {s.value}
                </p>
                <p className="mt-2 text-[13px] font-semibold text-secondary">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div>
          <SectionHeader
            label="About me"
            title={
              <>
                Why hire me for your next <span className="text-primary">project?</span>
              </>
            }
            description="I don't just write code; I build business solutions. My focus is on creating scalable, performant architectures that grow with your user base using DRY principles and optimal HCI strategies."
            align="left"
            showDivider={false}
          />

          <ul className="mb-8 mt-8 flex flex-col gap-4 text-left md:mb-10">
            {features.map((item) => (
              <li key={item} className="clay-sm flex items-center gap-4 rounded-[24px] px-5 py-4">
                <span className="clay-accent size-3 shrink-0 rounded-full" aria-hidden="true" />
                <span className="text-[14px] font-semibold text-on-surface md:text-[16px]">{item}</span>
              </li>
            ))}
          </ul>

          <Magnetic className="flex sm:inline-flex">
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}>
              Hire me now
              <ArrowUpRight strokeWidth={2.2} className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
