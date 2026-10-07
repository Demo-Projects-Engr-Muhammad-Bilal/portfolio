import ExperienceBase from "@/components/generic/ExperienceBase";
import SectionHeader from "@/components/generic/SectionHeader";
import type { Experience } from "@/lib/types";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  const homeHeader = (
    <SectionHeader
      label="Journey"
      title="Experience"
      description="My professional journey in tech."
      align="left"
      showDivider={false}
    />
  );

  return (
    <section className="py-16 md:py-[var(--spacing-section-gap)]" id="experience">
      <ExperienceBase experiences={experiences} theme="light" headerContent={homeHeader} />
    </section>
  );
}
