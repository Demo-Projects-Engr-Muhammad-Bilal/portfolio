"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { ApproachStep } from "@/lib/types";

export default function ProjectApproach({ approach }: { approach: ApproachStep[] }) {
          const [isExpanded, setIsExpanded] = useState(false);
          const initialMobileCount = 3; // Mobile par shuru mein kitne rows dikhane hain

          if (!approach || approach.length === 0) return null;

          const displayApproach = isExpanded ? approach : approach.slice(0, initialMobileCount);
          const hasMore = approach.length > initialMobileCount;

          return (
                    <section className="bg-inverse-surface text-white py-10 md:py-20 overflow-hidden">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
                                        <h2 className="text-[25px] md:text-[48px] font-bold mb-10 md:mb-16 text-center">
                                                  My <span className="text-primary-container">Approach</span>
                                        </h2>

                                        {/* ================= DESKTOP VIEW (100% Untouched) ================= */}
                                        <div className="hidden md:flex flex-nowrap overflow-x-auto gap-8 pb-8 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary-container/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-primary-container transition-all">
                                                  {approach.map((step) => (
                                                            <div key={step.step} className="group relative pt-10 flex-shrink-0 w-[380px] snap-center">
                                                                      <div className="text-9xl font-black text-white/5 absolute top-0 -left-2 group-hover:text-primary-container/10 transition-colors duration-500 z-0">
                                                                                {step.step}
                                                                      </div>
                                                                      <div className="relative z-10 p-8 bg-white/5 border border-white/10 rounded-[24px] hover:border-primary-container/40 transition-all duration-300 h-full backdrop-blur-sm shadow-xl">
                                                                                <h3 className="text-[24px] font-bold mb-4 text-primary-container group-hover:text-primary transition-colors">
                                                                                          {step.title}
                                                                                </h3>
                                                                                <p className="text-white/70 text-[15px] leading-relaxed">
                                                                                          {step.desc}
                                                                                </p>
                                                                      </div>
                                                            </div>
                                                  ))}
                                        </div>

                                        {/* ================= MOBILE VIEW (Vertical Rows + View More) ================= */}
                                        <div className="flex md:hidden flex-col gap-6">
                                                  {displayApproach.map((step) => (
                                                            <div key={step.step} className="group relative pt-8">
                                                                      <div className="text-8xl font-black text-white/5 absolute top-0 -left-2 group-hover:text-primary-container/10 transition-colors duration-500 z-0">
                                                                                {step.step}
                                                                      </div>
                                                                      <div className="relative z-10 p-6 bg-white/5 border border-white/10 rounded-[20px] hover:border-primary-container/40 transition-all duration-300 h-full backdrop-blur-sm shadow-xl">
                                                                                <h3 className="text-[20px] font-bold mb-3 text-primary-container group-hover:text-primary transition-colors">
                                                                                          {step.title}
                                                                                </h3>
                                                                                <p className="text-white/70 text-[14px] leading-relaxed">
                                                                                          {step.desc}
                                                                                </p>
                                                                      </div>
                                                            </div>
                                                  ))}

                                                  {/* View More / View Less Button (Shadcn Ghost Variant) */}
                                                  {hasMore && (
                                                            <Button
                                                                      variant="ghost"
                                                                      onClick={() => setIsExpanded(!isExpanded)}
                                                                      className="mt-4 text-primary-container font-bold flex items-center justify-center gap-2 hover:bg-white/5 hover:text-primary-container border border-white/10 rounded-full h-12 transition-all w-full"
                                                            >
                                                                      {isExpanded ? (
                                                                                <>View Less <ChevronUp className="w-4 h-4" /></>
                                                                      ) : (
                                                                                <>View All Steps <ChevronDown className="w-4 h-4" /></>
                                                                      )}
                                                            </Button>
                                                  )}
                                        </div>

                              </div>
                    </section>
          );
}