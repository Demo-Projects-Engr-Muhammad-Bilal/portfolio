import PageHeroHeader from "@/components/generic/PageHeroHeader";
import type { ContactPageHero } from "@/lib/types";

interface ContactHeroProps {
          data: ContactPageHero;
}

export default function ContactHero({ data }: ContactHeroProps) {
          return (
                    <PageHeroHeader
                              title={data.title}
                              highlight={data.highlight}
                              description={data.description}
                              align="center"
                    />
          );
}
