import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import Link from "next/link";
import { Button } from "../ui/button";

type ProjectCardProps = Pick<Project, "id" | "title" | "description" | "imageUrl" | "techStack">;

export default function ProjectCard({ id, title, description, imageUrl, techStack }: ProjectCardProps) {
          return (
                    <div className="group bg-white rounded-[var(--radius-card)] overflow-hidden border border-surface-variant flex flex-col h-full transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0px_15px_35px_rgba(0,0,0,0.1)] relative">

                              {/* Top Image Box - Mobile height reduced to h-48, Desktop remains h-64 */}
                              <div className="h-48 md:h-64 overflow-hidden relative bg-surface-container">
                                        <Image
                                                  src={imageUrl || "/placeholder.jpg"}
                                                  alt={title}
                                                  fill
                                                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />

                                        {/* Floating Tech Stack Badges */}
                                        <div className="absolute top-3 left-3 md:top-4 md:left-4 flex flex-wrap gap-2">
                                                  {techStack.map((tech) => (
                                                            <span
                                                                      key={tech}
                                                                      // Mobile padding and text shrink, Desktop stays exact same
                                                                      className="bg-surface/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-[12px] font-bold uppercase tracking-wider text-on-surface shadow-sm"
                                                            >
                                                                      {tech}
                                                            </span>
                                                  ))}
                                        </div>
                              </div>

                              {/* Bottom Content Box - Mobile padding reduced to p-5 and pb-20 */}
                              <div className="p-5 pb-20 md:p-8 md:pb-24 flex-grow flex flex-col">
                                        {/* Title - Mobile 20px, Desktop 24px */}
                                        <h3 className="text-[20px] md:text-[24px] font-bold text-on-surface mb-2 md:mb-3 leading-[1.3]">
                                                  {title}
                                        </h3>
                                        {/* Description - Mobile 14px, Desktop 16px */}
                                        <p className="text-secondary text-[14px] md:text-[16px] leading-[1.6]">
                                                  {description}
                                        </p>
                              </div>

                              <Link href={`/projects/${id}`} passHref>
                                        <Button
                                                  variant="outline"
                                                  className="absolute bottom-5 right-5 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 p-0 rounded-full border border-surface-variant bg-transparent flex items-center justify-center text-on-surface cursor-pointer group-hover:bg-primary-container group-hover:text-white group-hover:border-primary-container transition-all duration-300"
                                                  aria-label={`View project ${title}`}
                                        >
                                                  {/* Icon size managed via Tailwind classes for responsiveness */}
                                                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                                        </Button>
                              </Link>

                    </div>
          );
}