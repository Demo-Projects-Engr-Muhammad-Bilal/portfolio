import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
          return (
                    // Mobile py-16, Desktop py-section-gap
                    <section className="bg-[#f5f3f3] py-16 md:py-[var(--spacing-section-gap)]" id="about">
                              {/* Mobile gap-10, Desktop gap-16 */}
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                                        {/* Left Column: Image Card with Stats */}
                                        {/* Mobile height 350px, Desktop 500px */}
                                        <div className="rounded-[var(--radius-card)] overflow-hidden h-[350px] md:h-[500px] shadow-2xl relative bg-inverse-surface group">
                                                  <Image
                                                            src="/workspace.png"
                                                            alt="Developer workspace"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                                  />

                                                  {/* Bottom Gradient Overlay for Stats - Padding adjusted for mobile */}
                                                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                                            <div className="flex gap-6 md:gap-8 text-white">
                                                                      <div>
                                                                                <p className="text-[24px] md:text-[32px] font-bold leading-tight">50+</p>
                                                                                <p className="text-[10px] md:text-[12px] opacity-80 uppercase tracking-widest mt-1 font-medium">Projects Done</p>
                                                                      </div>

                                                                      {/* Vertical Divider */}
                                                                      <div className="w-px h-10 md:h-12 bg-white/30 self-center"></div>

                                                                      <div>
                                                                                <p className="text-[24px] md:text-[32px] font-bold leading-tight">12+</p>
                                                                                <p className="text-[10px] md:text-[12px] opacity-80 uppercase tracking-widest mt-1 font-medium">Tech Stack</p>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>

                                        {/* Right Column: Text and CTA */}
                                        <div className="text-center md:text-left">
                                                  {/* Mobile 28px, Desktop 48px */}
                                                  <h2 className="text-[28px] md:text-[48px] font-bold mb-4 md:mb-6 leading-[1.2] tracking-[-0.02em] text-on-surface text-shadow-md">
                                                            Why Hire Me For Your Next <span className="text-primary-container underline decoration-primary/20 underline-offset-4">Project?</span>
                                                  </h2>

                                                  <p className="text-[14px] md:text-[18px] text-secondary mb-6 md:mb-8 leading-[1.6]">
                                                            I don't just write code; I build business solutions. My focus is on creating scalable, performant architectures that grow with your user base using DRY principles and optimal HCI strategies.
                                                  </p>

                                                  {/* Features List */}
                                                  <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-left">
                                                            {[
                                                                      "Fast-paced delivery with high precision",
                                                                      "Excellent communication and team collaboration",
                                                                      "Always up-to-date with latest React & Next.js standards"
                                                            ].map((item, i) => (
                                                                      <li key={i} className="flex items-center gap-3">
                                                                                <CheckCircle
                                                                                          size={20} // Shrink icon slightly for mobile, md size is inherited visually
                                                                                          className="text-primary-container shrink-0 md:w-6 md:h-6"
                                                                                          fill="currentColor"
                                                                                          stroke="white"
                                                                                          strokeWidth={1.5}
                                                                                />
                                                                                <span className="font-semibold text-on-surface text-[14px] md:text-[16px]">{item}</span>
                                                                      </li>
                                                            ))}
                                                  </ul>

                                                  {/* UNIFIED PRIMARY BUTTON - Full width on mobile */}
                                                  <Button className="w-full sm:w-auto bg-primary-container text-on-primary-container rounded-full px-10 h-[56px] text-[16px] font-bold uppercase tracking-widest hover:scale-105 hover:bg-primary-container/90 transition-all shadow-md cursor-pointer mt-2">
                                                            Hire Me Now
                                                  </Button>
                                        </div>
                              </div>
                    </section>
          );
}