"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules"; // Autoplay removed
import type { BlogPost } from "@/lib/types";

// Import Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

// ================= CUSTOM NAVIGATION BUTTONS =================
const SwiperNavButtons = () => {
          const swiper = useSwiper();
          return (
                    // Hamesha visible rakhne ke liye opacity-0 hata diya hai
                    <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-2">
                              <button
                                        onClick={(e) => {
                                                  e.preventDefault(); // Card click/navigation block karega
                                                  e.stopPropagation();
                                                  swiper.slidePrev();
                                        }}
                                        className="clay-sm clay-pill pointer-events-auto flex size-8 items-center justify-center text-foreground transition-transform hover:scale-110"
                              >
                                        <ChevronLeft className="w-4 h-4 pr-0.5" />
                              </button>
                              <button
                                        onClick={(e) => {
                                                  e.preventDefault();
                                                  e.stopPropagation();
                                                  swiper.slideNext();
                                        }}
                                        className="clay-sm clay-pill pointer-events-auto flex size-8 items-center justify-center text-foreground transition-transform hover:scale-110"
                              >
                                        <ChevronRight className="w-4 h-4 pl-0.5" />
                              </button>
                    </div>
          );
};

export default function BlogCard({ post }: { post: BlogPost }) {
          const imageList = post.images && post.images.length > 0 ? post.images : (post.image ? [post.image] : ["/placeholder.jpg"]);

          return (
                    <Link
                              href={`/blog/${post.id}`}
                              className="clay clay-hover group relative flex h-full cursor-pointer flex-col rounded-[32px] p-3"
                    >
                              {/* ================= IMAGE / SWIPER AREA ================= */}
                              {/* Default blue dots ko override karne ke liye `!bg-primary-container` (important flag) use kiya hai */}
                              <div className="clay-frame relative h-48 overflow-hidden rounded-[26px] sm:h-52 md:h-56 [&_.swiper-pagination-bullet]:!bg-white/80 [&_.swiper-pagination-bullet-active]:!bg-primary-container [&_.swiper-pagination-bullet-active]:!w-5 [&_.swiper-pagination-bullet-active]:!rounded-md [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet]:!duration-300 [&_.swiper-pagination]:!bottom-2">

                                        {imageList.length > 1 ? (
                                                  <Swiper
                                                            modules={[Pagination]} // No Autoplay
                                                            pagination={{ clickable: true }}
                                                            loop={true}
                                                            className="w-full h-full z-0 relative"
                                                  >
                                                            {imageList.map((img: string, idx: number) => (
                                                                      <SwiperSlide key={idx} className="w-full h-full">
                                                                                <Image
                                                                                          src={img}
                                                                                          alt={`${post.title} - Image ${idx + 1}`}
                                                                                          fill
                                                                                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                                />
                                                                      </SwiperSlide>
                                                            ))}

                                                            {/* Custom Navigation Chevrons inside Swiper */}
                                                            <SwiperNavButtons />
                                                  </Swiper>
                                        ) : (
                                                  <Image
                                                            src={imageList[0]}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                  />
                                        )}

                                        <span className="clay-accent clay-pill pointer-events-none absolute left-3 top-3 z-10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider">
                                                  {post.category}
                                        </span>

                                        <div className="clay-accent absolute bottom-3 right-3 z-10 flex size-10 translate-y-12 items-center justify-center rounded-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                                  <ArrowUpRight className="size-5" />
                                        </div>
                              </div>

                              <div className="relative z-10 flex flex-grow flex-col p-5 text-left md:p-6">
                                        <p className="text-[11px] text-secondary mb-2 uppercase tracking-widest font-bold">
                                                  By {post.author} • {post.date}
                                        </p>
                                        <h3 className="font-display text-[20px] md:text-[22px] font-semibold mb-2 group-hover:text-primary transition-colors leading-snug text-on-surface line-clamp-2">
                                                  {post.title}
                                        </h3>
                                        <p className="text-secondary text-[13px] md:text-[14px] leading-relaxed line-clamp-3">
                                                  {post.desc}
                                        </p>
                              </div>
                    </Link>
          );
}