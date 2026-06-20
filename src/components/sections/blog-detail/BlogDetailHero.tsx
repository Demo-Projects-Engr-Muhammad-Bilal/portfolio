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
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 hover:bg-white text-primary-container rounded-full shadow-lg pointer-events-auto transition-transform hover:scale-110"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 pr-0.5" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/90 hover:bg-white text-primary-container rounded-full shadow-lg pointer-events-auto transition-transform hover:scale-110"
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
        <nav className="flex items-center gap-2 text-[14px] font-bold text-secondary mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary truncate max-w-[200px] md:max-w-none">{data.title}</span>
        </nav>

        {/* Meta Header */}
        <div className="flex flex-col gap-6 max-w-4xl relative">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-[12px] font-bold uppercase tracking-wider w-fit shadow-sm">
            {data.category}
          </span>

          <h1 className="text-[40px] md:text-[72px] font-extrabold leading-[1.1] tracking-[-0.02em] relative text-on-surface">
            {data.title.split(' ')[0]} <span className="text-primary-container">{data.title.split(' ').slice(1).join(' ')}</span>
            <Sparkles className="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-primary opacity-40 w-10 h-10 md:w-12 md:h-12 animate-pulse fill-current" />
          </h1>

          {/* Author & Read Time */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-container relative shrink-0">
                <Image src={data.authorImage} alt={data.author} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-bold text-on-surface">{data.author}</span>
                <span className="text-[14px] font-medium text-secondary">{data.date}</span>
              </div>
            </div>

            <div className="h-8 w-px bg-surface-variant hidden sm:block"></div>

            <div className="flex items-center gap-2 text-secondary font-medium text-[14px]">
              <Clock className="w-5 h-5 shrink-0" />
              {data.readTime}
            </div>
          </div>
        </div>

        {/* ================= HERO SWIPER / FEATURED IMAGE ================= */}
        <div className="mt-16 md:mt-20">
          <div className="rounded-[24px] overflow-hidden shadow-[0px_20px_40px_rgba(171,53,0,0.1)] border-[6px] md:border-8 border-surface-container-lowest relative h-[300px] md:h-[500px] [&_.swiper-pagination-bullet]:!bg-white/80 [&_.swiper-pagination-bullet-active]:!bg-primary-container [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!rounded-md [&_.swiper-pagination-bullet]:!transition-all [&_.swiper-pagination-bullet]:!duration-300">
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
    </header>
  );
}
