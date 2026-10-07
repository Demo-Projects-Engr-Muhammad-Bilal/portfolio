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
                              <section className="py-10 md:py-20">
                                        <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                                  {/* Section Header */}
                                                  <div className="text-center mb-10 md:mb-16">
                                                            <h2 className="font-display text-[28px] md:text-[48px] font-semibold text-on-surface mb-4">
                                                                      System <span className="text-primary">Architecture</span>
                                                            </h2>
                                                            <p className="text-[14px] md:text-[18px] text-secondary max-w-2xl mx-auto">
                                                                      A high-level view of the data flow, tech stack integration, and infrastructure setup.
                                                            </p>
                                                  </div>

                                                  {/* Slider Main Container */}
                                                  <div className="clay-lg relative p-4 md:p-8">

                                                            {/* Slider Navigation Arrows (Floating on Desktop) */}
                                                            {diagrams.length > 1 && (
                                                                      <div className="absolute top-4 right-4 flex items-center gap-2 z-30 md:static md:flex md:justify-between md:absolute md:top-1/2 md:-translate-y-1/2 md:left-4 md:right-4 md:pointer-events-none">
                                                                                <Button
                                                                                          variant="outline"
                                                                                          size="icon"
                                                                                          onClick={handlePrev}
                                                                                          className="rounded-full md:pointer-events-auto cursor-pointer"
                                                                                          aria-label="Previous Slide"
                                                                                >
                                                                                          <ChevronLeft className="w-5 h-5" />
                                                                                </Button>
                                                                                <Button
                                                                                          variant="outline"
                                                                                          size="icon"
                                                                                          onClick={handleNext}
                                                                                          className="rounded-full md:pointer-events-auto cursor-pointer"
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
                                                                                <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-1">
                                                                                          Diagram {activeIndex + 1} of {diagrams.length}
                                                                                </span>
                                                                                <h3 className="font-display text-[20px] md:text-[30px] font-semibold text-on-surface mb-3 leading-tight">
                                                                                          {currentDiagram.title}
                                                                                </h3>
                                                                                <p className="text-[13px] md:text-[16px] text-secondary leading-relaxed">
                                                                                          {currentDiagram.description}
                                                                                </p>
                                                                      </div>

                                                                      {/* Grid Layout: Points Left, Image Right */}
                                                                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 md:gap-10 items-start">

                                                                                {/* Active Diagram Bullet Points */}
                                                                                <div className="clay h-full rounded-[28px] p-5 text-left md:p-8">
                                                                                          <h4 className="font-bold text-[12px] md:text-[13px] uppercase tracking-widest text-primary mb-4 md:mb-6">
                                                                                                    Key Operations
                                                                                          </h4>
                                                                                          <ul className="space-y-3 md:space-y-4">
                                                                                                    {currentDiagram.points.map((point, idx) => (
                                                                                                              <li key={idx} className="flex items-start gap-2.5 md:gap-3">
                                                                                                                        <CheckCircle2 className="size-4 md:size-5 text-primary shrink-0 mt-0.5" />
                                                                                                                        <span className="text-[13px] md:text-[15px] text-secondary leading-relaxed">
                                                                                                                                  {point}
                                                                                                                        </span>
                                                                                                              </li>
                                                                                                    ))}
                                                                                          </ul>
                                                                                </div>

                                                                                {/* Active Diagram Image Container (With Zoom functionality) */}
                                                                                <div
                                                                                          className="clay-sm group relative w-full cursor-zoom-in overflow-hidden rounded-[28px] p-2 md:p-4"
                                                                                          onClick={() => setZoomedImage(currentDiagram.image)}
                                                                                >
                                                                                          <Image
                                                                                                    src={currentDiagram.image}
                                                                                                    alt={currentDiagram.title}
                                                                                                    width={1200}
                                                                                                    height={800}
                                                                                                    className="w-full h-auto rounded-[20px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                                                                                          />

                                                                                          {/* Magnifier Hover Overlay */}
                                                                                          <div className="absolute inset-0 flex items-center justify-center rounded-[28px] bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                                                                    <div className="clay-accent clay-pill flex translate-y-3 transform items-center gap-2 px-5 py-2.5 text-[13px] font-bold transition-all duration-300 group-hover:translate-y-0 md:text-[15px]">
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
 ? "clay-accent w-6"
 : "bg-surface-variant w-2 hover:bg-primary/50"
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
                                                            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/15 hover:bg-[var(--accent-fill)] hover:text-[var(--on-accent-fill)] text-white p-2.5 md:p-3 rounded-full transition-colors duration-300 z-50 cursor-pointer"
                                                            onClick={() => setZoomedImage(null)}
                                                  >
                                                            <X className="w-5 h-5 md:w-7 md:h-7" />
                                                  </button>

                                                  <Image
                                                            src={zoomedImage}
                                                            alt="Zoomed Architecture Diagram"
                                                            width={1920}
                                                            height={1080}
                                                            className="w-auto h-auto max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-[24px] scale-100 animate-in zoom-in-95 duration-300"
                                                            onClick={(e) => e.stopPropagation()}
                                                  />
                                        </div>
                              )}
                    </>
          );
}