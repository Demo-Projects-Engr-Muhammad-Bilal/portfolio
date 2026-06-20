import PageHeroHeader from "@/components/generic/PageHeroHeader";
import type { ProjectsPageHero } from "@/lib/types";

interface ProjectsHeroProps {
          data: ProjectsPageHero;
}

export default function ProjectsHero({ data }: ProjectsHeroProps) {
          return (
                    <PageHeroHeader
                              title={data.title}
                              highlight={data.highlight}
                              description={data.description}
                              align="left"
                    />
          );
}
