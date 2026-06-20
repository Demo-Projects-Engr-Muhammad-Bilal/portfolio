import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
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
                              <h1 className="text-[30px] sm:text-[56px] md:text-[72px] leading-[1.1] tracking-[-0.02em] font-extrabold mb-6 text-on-surface text-shadow-md">
                                        {data.title.split(' ')[0]} <span className="text-primary-container inline-flex items-center">{data.title.split(' ')[1]} <Sparkles className="ml-2 text-primary-container w-8 h-8 md:w-12 md:h-12" /></span>
                              </h1>

                              <p className="text-[14px] md:text-[18px] text-secondary mb-10 max-w-xl leading-[1.6]">
                                        {data.description}
                              </p>

                              <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-primary-container text-on-primary-container rounded-full px-8 h-[56px] text-[14px] md:text-[16px] font-bold uppercase tracking-widest hover:scale-105 hover:bg-primary-container/90 transition-all shadow-md cursor-pointer" onClick={handleDownload}>
                                        Download Resume
                                        <Download size={20} className="transition-transform duration-300 group-hover:translate-y-1" strokeWidth={2} />
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