import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import HeroBase from "@/components/generic/HeroBase";
import type { AboutHeroData } from "@/lib/types";

interface AboutHeroProps {
  data: AboutHeroData;
}

export default function AboutHero({ data }: AboutHeroProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv/resume.docx'; // Path to your file in the public folder
    link.download = 'My_Resume.docx'; // The name the file will save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const aboutLeftContent = (
    <>
      <p className="clay-sm clay-pill mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 text-[12px] font-semibold text-foreground md:text-[13px]">
        <span className="clay-accent size-2.5 rounded-full" aria-hidden="true" />
        About
      </p>

      <h1 className="mb-6 font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.01em] text-on-surface md:text-[80px]">
        {data.title.split(' ')[0]} <span className="text-primary">{data.title.split(' ').slice(1).join(' ')}</span>
      </h1>

      <p className="mb-10 max-w-xl text-[14px] leading-[1.7] text-secondary md:text-[18px]">
        {data.description}
      </p>

      <Button size="lg" className="group w-full gap-2 sm:w-auto" onClick={handleDownload}>
        Download Resume
        <Download size={20} className="transition-transform duration-300 group-hover/button:translate-y-1" strokeWidth={2} />
      </Button>
    </>
  );

  return (
    <HeroBase
      leftContent={aboutLeftContent}
      imageUrl={data.image}
      imageAlt="A professional portrait of the developer"
      heightClass="min-h-[50vh] md:min-h-[750px]"
    />
  );
}
