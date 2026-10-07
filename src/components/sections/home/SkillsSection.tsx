import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/generic/SectionHeader";
import { Stagger } from "@/components/shared/Reveal";
import Tilt from "@/components/shared/Tilt";
import { getIconComponent } from "@/lib/iconMap";
import type { Skill } from "@/lib/types";

const tints = ["var(--tint-lavender)", "var(--tint-peach)", "var(--tint-sky)", "var(--tint-mint)"];

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-[var(--spacing-section-gap)]" id="expertise">
      <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -right-12 top-10 hidden size-44 rounded-full opacity-60 md:block" style={{ ["--c" as string]: "var(--tint-mint)", animationDuration: "11s" }} />
      <div className="relative z-10 mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <SectionHeader
          label="My expertise"
          title="What I do"
          align="left"
          showDivider={false}
          className="mb-12 md:mb-16"
        />

        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {skills.map((skill, i) => {
            const Icon = getIconComponent(skill.icon);
            return (
              <Tilt key={skill.id} className="h-full rounded-[32px]">
                <div className="clay clay-hover group relative h-full p-7 pb-24 md:p-9 md:pb-28">
                  {/* Ghost number */}
                  <span className="pointer-events-none absolute right-7 top-6 font-display text-[56px] font-semibold leading-none text-foreground/[0.07] md:text-[72px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="clay-sm mb-7 flex size-14 items-center justify-center rounded-[20px] text-[#1d2540] dark:text-white md:size-16 md:rounded-[22px]"
                    style={{ backgroundColor: tints[i % tints.length] }}
                  >
                    <Icon className="size-6 md:size-7" strokeWidth={2} />
                  </div>

                  <h3 className="mb-3 font-display text-[22px] font-semibold leading-[1.2] text-on-surface md:mb-4 md:text-[26px]">
                    {skill.title}
                  </h3>

                  <p className="text-[15px] leading-[1.7] text-secondary">{skill.desc}</p>

                  <div
                    className="clay-sm absolute bottom-6 right-6 flex size-11 items-center justify-center rounded-full text-on-surface transition-colors group-hover:text-[var(--on-accent-fill)] group-hover:[background-color:var(--accent-fill)] md:bottom-8 md:right-8 md:size-12"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-5" strokeWidth={2.2} />
                  </div>
                </div>
              </Tilt>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
