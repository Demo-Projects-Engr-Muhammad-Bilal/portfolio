"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, Clock, ChevronLeft } from "lucide-react";

// Swiper Imports
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules"; // Autoplay removed
import "swiper/css";
import "swiper/css/pagination";

import type { BlogDetailData } from "@/lib/types";

// ================= HERO SWIPER NAVIGATION BUTTONS =================
const HeroSwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-4 md:px-8">
      <button
        onClick={() => swiper.slidePrev()}
        className="clay-sm clay-pill pointer-events-auto flex size-10 items-center justify-center text-foreground transition-transform hover:scale-110 md:size-12"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 pr-0.5" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="clay-sm clay-pill pointer-events-auto flex size-10 items-center justify-center text-foreground transition-transform hover:scale-110 md:size-12"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 pl-0.5" />
      </button>
    </div>
  );
};

interface BlogDetailHeroProps {
  data: BlogDetailData;
}

/**
 * Extracted verbatim from the hero/header block (breadcrumb, title, author
 * meta, and image swiper) of app/blog/[id]/page.tsx.
 */
export default function BlogDetailHero({ data }: BlogDetailHeroProps) {
  // Safe fallback for Detail Page Images
  const heroImages = data.images && data.images.length > 0 ? data.images : (data.image ? [data.image] : ["/placeholder.jpg"]);

  return (
    <header className="pt-32 md:pt-40 pb-12 relative overflow-hidden">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] relative z-10">

        {/* Breadcrumb */}
        <nav className="clay-sm clay-pill mb-8 inline-flex max-w-full items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-secondary md:text-[14px]">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary truncate max-w-[200px] md:max-w-none">{data.title}</span>
        </nav>

        {/* Meta Header */}
        <div className="flex flex-col gap-6 max-w-4xl relative">
          <span className="clay-accent clay-pill inline-flex w-fit items-center px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider">
            {data.category}
          </span>

          <h1 className="font-display text-[38px] md:text-[64px] font-semibold leading-[1.08] tracking-[-0.01em] relative text-on-surface">
            {data.title.split(' ')[0]} <span className="text-primary">{data.title.split(' ').slice(1).join(' ')}</span>
            <Sparkles className="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-primary opacity-40 w-10 h-10 md:w-12 md:h-12 animate-pulse fill-current" />
          </h1>

          {/* Author & Read Time */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <div className="flex items-center gap-3">
              <div className="clay-sm clay-pill size-14 shrink-0 p-1"> <div className="relative size-full overflow-hidden rounded-full"> <Image src={data.authorImage} alt={data.author} fill className="object-cover" /> </div> </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-on-surface">{data.author}</span>
                <span className="text-[14px] font-medium text-secondary">{data.date}</span>
              </div>
            </div>

            <div className="clay-inset hidden h-2 w-10 rounded-full sm:block" aria-hidden="true"></div>

            <div className="flex items-center gap-2 text-secondary font-medium text-[14px]">
              <Clock className="w-5 h-5 shrink-0" />
              {data.readTime}
            </div>
          </div>
        </div>

        {/* ================= HERO SWIPER / FEATURED IMAGE ================= */}
        <div className="mt-16 md:mt-20">
          <div className="clay-lg p-3 md:p-4"> <div className="clay-frame relative h-[300px] overflow-hidden rounded-[32px] md:h-[500px] [&_.swiper-pagination-bullet]:!bg-white/80 [&_.swiper-pagination-bullet-active]:!bg-primary-container [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!rounded-md [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet]:!duration-300">
            {heroImages.length > 1 ? (
              <Swiper
                modules={[Pagination]} // No Autoplay
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-full z-0 relative"
              >
                {heroImages.map((img, idx) => (
                  <SwiperSlide key={idx} className="w-full h-full">
                    <Image src={img} alt={`${data.title} - Image ${idx + 1}`} fill className="object-cover" />
                  </SwiperSlide>
                ))}

                {/* Custom Nav Buttons - Always Visible */}
                <HeroSwiperNavButtons />
              </Swiper>
            ) : (
              <Image src={heroImages[0]} alt={data.title} fill className="object-cover" />
            )}
          </div>
          </div>
        </div>

      </div>
    </header>
  );
}
