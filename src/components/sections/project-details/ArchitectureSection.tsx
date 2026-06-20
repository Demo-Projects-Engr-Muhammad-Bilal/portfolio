"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn, X, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ArchitectureDiagram } from "@/lib/types";

export type { ArchitectureDiagram };

export default function ArchitectureSection({ diagrams }: { diagrams: ArchitectureDiagram[] }) {
          const [activeIndex, setActiveIndex] = useState(0);
          const [zoomedImage, setZoomedImage] = useState<string | null>(null);

          if (!diagrams || diagrams.length === 0) return null;

          const currentDiagram = diagrams[activeIndex];

          const handlePrev = () => {
                    setActiveIndex((prev) => (prev === 0 ? diagrams.length - 1 : prev - 1));
          };

          const handleNext = () => {
                    setActiveIndex((prev) => (prev === diagrams.length - 1 ? 0 : prev + 1));
          };

          return (
                    <>
                              <section className="bg-surface py-10 md:py-20 border-y border-surface-container-high">
                                        <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                                  {/* Section Header */}
                                                  <div className="text-center mb-10 md:mb-16">
                                                            <h2 className="text-[28px] md:text-[48px] font-bold mb-4">
                                                                      System <span className="text-primary-container">Architecture</span>
                                                            </h2>
                                                            <p className="text-[14px] md:text-[18px] text-secondary max-w-2xl mx-auto">
                                                                      A high-level view of the data flow, tech stack integration, and infrastructure setup.
                                                            </p>
                                                  </div>

                                                  {/* Slider Main Container */}
                                                  <div className="relative bg-surface border border-surface-container-high rounded-[24px] md:rounded-[32px] p-4 md:p-8 shadow-sm">

                                                            {/* Slider Navigation Arrows (Floating on Desktop) */}
                                                            {diagrams.length > 1 && (
                                                                      <div className="absolute top-4 right-4 flex items-center gap-2 z-30 md:static md:flex md:justify-between md:absolute md:top-1/2 md:-translate-y-1/2 md:left-4 md:right-4 md:pointer-events-none">
                                                                                <Button
                                                                                          variant="outline"
                                                                                          size="icon"
                                                                                          onClick={handlePrev}
                                                                                          className="rounded-full bg-surface/80 backdrop-blur-sm border-surface-container-high hover:bg-primary-container hover:text-white transition-all shadow-sm md:pointer-events-auto cursor-pointer"
                                                                                          aria-label="Previous Slide"
                                                                                >
                                                                                          <ChevronLeft className="w-5 h-5" />
                                                                                </Button>
                                                                                <Button
                                                                                          variant="outline"
                                                                                          size="icon"
                                                                                          onClick={handleNext}
                                                                                          className="rounded-full bg-surface/80 backdrop-blur-sm border-surface-container-high hover:bg-primary-container hover:text-white transition-all shadow-sm md:pointer-events-auto cursor-pointer"
                                                                                          aria-label="Next Slide"
                                                                                >
                                                                                          <ChevronRight className="w-5 h-5" />
                                                                                </Button>
                                                                      </div>
                                                            )}

                                                            {/* Active Slide Content */}
                                                            <div className="animate-in fade-in-50 duration-500 flex flex-col gap-6 md:gap-10">

                                                                      {/* Active Diagram Title & Description */}
                                                                      <div className="max-w-3xl pr-20 md:pr-0 text-left">
                                                                                <span className="text-[11px] font-bold text-primary-container uppercase tracking-widest block mb-1">
                                                                                          Diagram {activeIndex + 1} of {diagrams.length}
                                                                                </span>
                                                                                <h3 className="text-[20px] md:text-[30px] font-bold text-on-surface mb-3 leading-tight">
                                                                                          {currentDiagram.title}
                                                                                </h3>
                                                                                <p className="text-[13px] md:text-[16px] text-secondary leading-relaxed">
                                                                                          {currentDiagram.description}
                                                                                </p>
                                                                      </div>

                                                                      {/* Grid Layout: Points Left, Image Right */}
                                                                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 md:gap-10 items-start">

                                                                                {/* Active Diagram Bullet Points */}
                                                                                <div className="bg-surface-container-lowest p-5 md:p-8 rounded-[16px] md:rounded-[24px] border border-surface-container-high shadow-sm text-left h-full">
                                                                                          <h4 className="font-bold text-[12px] md:text-[13px] uppercase tracking-widest text-primary-container mb-4 md:mb-6">
                                                                                                    Key Operations
                                                                                          </h4>
                                                                                          <ul className="space-y-3 md:space-y-4">
                                                                                                    {currentDiagram.points.map((point, idx) => (
                                                                                                              <li key={idx} className="flex items-start gap-2.5 md:gap-3">
                                                                                                                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-container shrink-0 mt-0.5" />
                                                                                                                        <span className="text-[13px] md:text-[15px] text-secondary leading-relaxed">
                                                                                                                                  {point}
                                                                                                                        </span>
                                                                                                              </li>
                                                                                                    ))}
                                                                                          </ul>
                                                                                </div>

                                                                                {/* Active Diagram Image Container (With Zoom functionality) */}
                                                                                <div
                                                                                          className="group relative w-full bg-white p-2 md:p-4 rounded-[16px] md:rounded-[24px] border border-surface-variant shadow-md overflow-hidden cursor-zoom-in transition-all hover:border-primary-container/40"
                                                                                          onClick={() => setZoomedImage(currentDiagram.image)}
                                                                                >
                                                                                          <Image
                                                                                                    src={currentDiagram.image}
                                                                                                    alt={currentDiagram.title}
                                                                                                    width={1200}
                                                                                                    height={800}
                                                                                                    className="w-full h-auto rounded-[10px] md:rounded-[14px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                                                                                          />

                                                                                          {/* Magnifier Hover Overlay */}
                                                                                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[16px] md:rounded-[24px]">
                                                                                                    <div className="bg-primary-container text-white px-5 py-2.5 rounded-full font-bold text-[13px] md:text-[15px] flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                                                                                                              <ZoomIn className="w-4 h-4 md:w-5 md:h-5" /> Click to Zoom
                                                                                                    </div>
                                                                                          </div>
                                                                                </div>

                                                                      </div>
                                                            </div>

                                                            {/* Slider Pagination Dots */}
                                                            {diagrams.length > 1 && (
                                                                      <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
                                                                                {diagrams.map((_, idx) => (
                                                                                          <button
                                                                                                    key={idx}
                                                                                                    onClick={() => setActiveIndex(idx)}
                                                                                                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                                                                                                                        ? "bg-primary-container w-6"
                                                                                                                        : "bg-surface-variant w-2 hover:bg-primary-container/50"
                                                                                                              }`}
                                                                                                    aria-label={`Go to slide ${idx + 1}`}
                                                                                          />
                                                                                ))}
                                                                      </div>
                                                            )}

                                                  </div>

                                        </div>
                              </section>

                              {/* Full-Screen Zoom Lightbox Modal */}
                              {zoomedImage && (
                                        <div
                                                  className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
                                                  onClick={() => setZoomedImage(null)}
                                        >
                                                  <button
                                                            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-primary-container text-white p-2.5 md:p-3 rounded-full transition-colors duration-300 z-50 cursor-pointer"
                                                            onClick={() => setZoomedImage(null)}
                                                  >
                                                            <X className="w-5 h-5 md:w-7 md:h-7" />
                                                  </button>

                                                  <Image
                                                            src={zoomedImage}
                                                            alt="Zoomed Architecture Diagram"
                                                            width={1920}
                                                            height={1080}
                                                            className="w-auto h-auto max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-[8px] md:rounded-[16px] shadow-2xl scale-100 animate-in zoom-in-95 duration-300"
                                                            onClick={(e) => e.stopPropagation()}
                                                  />
                                        </div>
                              )}
                    </>
          );
}