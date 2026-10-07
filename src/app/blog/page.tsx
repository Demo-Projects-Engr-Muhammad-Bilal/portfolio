"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { useBlogData, useBlogListPageData } from "@/lib/PortfolioContext";

// Sub Components Imports
import FeaturedPost from "@/components/sections/blog/FeaturedPost";
import BlogCard from "@/components/sections/blog/BlogCard";
import BlogMarquee from "@/components/sections/blog/BlogMarquee";
import { Button } from "@/components/ui/button";
import { usePagination } from "@/lib/usePagination";
import CategoryFilterBar from "@/components/generic/CategoryFilterBar";
import PaginationControls from "@/components/generic/PaginationControls";

export default function BlogPage() {
          const { categories } = useBlogListPageData();
          const { featuredPost, posts } = useBlogData();

          const [activeCategory, setActiveCategory] = useState("All");
          const postsPerPage = 3; // Har page par 3 cards dikhenge (1 full row on desktop)

          // Category filter logic
          const filteredPosts = activeCategory === "All"
                    ? posts
                    : posts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());

          const {
                    currentPage,
                    totalPages,
                    currentItems: currentPosts,
                    setCurrentPage,
                    goToPrevPage,
                    goToNextPage,
          } = usePagination({
                    items: filteredPosts,
                    itemsPerPage: postsPerPage,
                    resetKey: activeCategory,
                    // Preserves the original BlogPage "Next" button behavior exactly
                    // (it used Math.max instead of Math.min — see usePagination.ts).
                    preserveLegacyNextPageBehavior: true,
          });

          return (
                    <main className="clay-page min-h-screen mt-20 md:mt-24 overflow-x-hidden">

                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                        {/* ================= PAGE HEADER (Mobile: Center, Desktop: Start) ================= */}
                                      <section className="flex flex-col items-center pt-32 pb-12 text-center md:items-start md:pt-40 md:pb-16 md:text-left">
            <p className="clay-sm clay-pill mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 text-[12px] font-semibold text-foreground md:text-[13px]"> <span className="clay-accent size-2.5 rounded-full" aria-hidden="true" />
              Blogs
            </p>
            <h1 className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.01em] text-on-surface md:text-[84px]">
              My <span className="text-primary">Blogs</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[14px] leading-[1.7] text-secondary md:text-[17px]">
              Sharing what I learn building real-world projects — debugging stories, tutorials, and dev insights.
            </p>
          </section>

                                        {/* ================= FEATURED POST (Blog of the Day) ================= */}
                                        <FeaturedPost post={featuredPost} />

                                        {/* ================= CATEGORY FILTERS ================= */}
                                        <CategoryFilterBar
                                                  categories={categories}
                                                  activeCategory={activeCategory}
                                                  onSelect={setActiveCategory}
                                                  variant="pill-solid"
                                        />

                                        {/* ================= BLOG POSTS GRID ================= */}
                                        <section className="mb-16 md:mb-24">
                                                  {currentPosts.length > 0 ? (
                                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                                                      {currentPosts.map((post) => (
                                                                                <BlogCard key={post.id} post={post} />
                                                                      ))}
                                                            </div>
                                                  ) : (
                                                            <div className="flex flex-col items-center justify-center py-24 md:py-32 px-6 clay-inset rounded-[40px]">
                                                                      {/* Icon for empty state */}
                                                                      <div className="clay-sm mb-6 flex size-20 items-center justify-center rounded-[28px]">
                                                                                <Sparkles className="w-8 h-8 text-secondary/40" />
                                                                      </div>

                                                                      <h3 className="font-display text-[20px] md:text-[24px] font-semibold text-on-surface mb-2">
                                                                                No articles found yet
                                                                      </h3>
                                                                      <p className="text-secondary text-[15px] md:text-[16px] max-w-sm text-center leading-relaxed">
                                                                                We&apos;re currently crafting new insights in this category. Stay tuned for upcoming posts!
                                                                      </p>

                                                                      {/* Reset Filter Button */}
                                                                      {activeCategory !== "All" && (
                                                                                <Button
                                                                                          variant="outline"
                                                                                          onClick={() => setActiveCategory("All")}
                                                                                          className="mt-6 px-6 text-primary"
                                                                                >
                                                                                          View All Categories
                                                                                </Button>
                                                                      )}
                                                            </div>
                                                  )}
                                        </section>

                                        {/* ================= DYNAMIC PAGINATION ================= */}
                                        <PaginationControls
                                                  currentPage={currentPage}
                                                  totalPages={totalPages}
                                                  onPrev={goToPrevPage}
                                                  onNext={goToNextPage}
                                                  onPageSelect={setCurrentPage}
                                                  variant="icon-arrows"
                                        />

                              </div>

                              {/* ================= MARQUEE DECORATION ================= */}
                              <BlogMarquee />

                    </main>
          );
}
