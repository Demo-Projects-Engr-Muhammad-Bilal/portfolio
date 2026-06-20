import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import HeroBase from "@/components/generic/HeroBase";
import type { HeroData } from "@/lib/types";
import Link from "next/link";

export default function HeroSection({ data }: { data: HeroData }) {

          // Left side ka content (Text, Buttons, Stars)
          const homeLeftContent = (
                    <>
                              <span className="inline-flex items-center bg-primary-container/10 text-primary px-4 py-1.5 rounded-full mb-6 text-[14px] font-semibold tracking-wider">
                                        {data.greeting}
                              </span>

                              <h1 className="text-[30px] sm:text-[56px] md:text-[90px] leading-[1.1] tracking-[-0.02em] font-extrabold mb-6 text-on-surface text-shadow-md">
                                        I'm <span className="text-primary-container">{data.name}</span>,<br />
                                        {data.role}
                              </h1>

                              <p className="text-[13px] md:text-[18px] text-secondary mb-10 max-w-lg">
                                        {data.description}
                              </p>

                              <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center md:justify-start">
                                        <Link href="/projects" className="w-full sm:w-auto">
                                                  <Button className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-primary-container text-on-primary-container rounded-full px-8 h-[56px] text-[14px] md:text-[16px] font-bold uppercase tracking-widest hover:scale-105 hover:bg-primary-container/90 transition-all shadow-md cursor-pointer">
                                                            View Projects
                                                            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                                                  </Button>
                                        </Link>
                                        <Link href="/contact" className="w-full sm:w-auto"><Button variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-on-surface text-on-surface rounded-full px-8 h-[56px] text-[14px] md:text-[16px] font-bold uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all cursor-pointer shadow-none">
                                                  Hire Me
                                        </Button></Link>
                                        
                              </div>

                              <div className="mt-12 flex items-center justify-center md:justify-start gap-4">
                                        <div className="flex -space-x-3">
                                                  <div className="w-12 h-12 rounded-full border-2 border-surface bg-primary-container/20 flex items-center justify-center text-primary font-bold text-[16px]">
                                                            {data.yearsExperience}+
                                                  </div>
                                        </div>
                                        <div className="text-left">
                                                  <div className="flex text-primary">
                                                            {Array.from({ length: 5 }).map((_, i) => (
                                                                      <Star key={i} className="w-4 h-4 fill-current" />
                                                            ))}
                                                  </div>
                                                  <p className="text-[12px] font-semibold text-secondary uppercase tracking-widest mt-1">
                                                            Years Experience
                                                  </p>
                                        </div>
                              </div>
                    </>
          );

          // Floating Badge specifically for Home
          const homeBadge = (
                    <div className="bg-surface p-4 md:p-6 rounded-[24px] shadow-lg flex items-center gap-3 md:gap-4 animate-bounce hover:animate-none transition-all cursor-default">
                              <div className="p-2 md:p-3 bg-primary-container/10 rounded-full text-primary flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                              </div>
                              <div>
                                        <span className="block font-bold text-on-surface text-[14px] md:text-[16px]">Top Rated</span>
                                        <span className="text-[12px] md:text-[14px] text-secondary">Service Provider</span>
                              </div>
                    </div>
          );

          return (
                    <HeroBase
                              leftContent={homeLeftContent}
                              floatingBadge={homeBadge}
                              imageUrl="/profile.png"
                              imageAlt={`${data.name} - ${data.role}`}
                    />
          );
}