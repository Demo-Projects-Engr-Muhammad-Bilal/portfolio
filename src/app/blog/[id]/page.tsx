"use client";

// Sub Components
import ReadingProgress from "@/components/sections/blog-detail/ReadingProgress";
import BlogSidebar from "@/components/sections/blog-detail/BlogSidebar";
import BlogMarquee from "@/components/sections/blog/BlogMarquee";
import BlogDetailHero from "@/components/sections/blog-detail/BlogDetailHero";
import BlogContentRenderer from "@/components/sections/blog-detail/BlogContentRenderer";
import BlogAdjacentNav from "@/components/sections/blog-detail/BlogAdjacentNav";
import BlogCTASection from "@/components/sections/blog-detail/BlogCTASection";
import { useBlogDetail } from "@/lib/PortfolioContext";

export default function BlogDetailPage() {
          const data = useBlogDetail();

          if (!data) return null;

          return (
                    <>
                              <ReadingProgress />

                              <main className="min-h-screen bg-surface text-on-background overflow-x-hidden">

                                        {/* ================= HERO SECTION ================= */}
                                        <BlogDetailHero data={data} />

                                        {/* ================= MAIN ARTICLE BODY ================= */}
                                        <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                                                  {/* Left: Article Content */}
                                                  <article className="lg:col-span-8">
                                                            <BlogContentRenderer blocks={data.contentBlocks} />
                                                  </article>

                                                  {/* Right: Sidebar */}
                                                  <BlogSidebar data={data} />

                                        </div>

                                        {/* ================= BOTTOM NAVIGATION ================= */}
                                        <BlogAdjacentNav prevPost={data.prevPost} nextPost={data.nextPost} />

                                        {/* ================= MARQUEE DECORATION ================= */}
                                        <div className="pb-10">
                                                  <BlogMarquee />
                                        </div>

                                        {/* ================= CTA SECTION ================= */}
                                        <BlogCTASection />

                              </main>
                    </>
          );
}
