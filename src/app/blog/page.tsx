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
                    <main className="min-h-screen bg-surface text-on-background mt-20 md:mt-24 overflow-x-hidden">

                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                        {/* ================= PAGE HEADER (Mobile: Center, Desktop: Start) ================= */}
                                        <section className="py-12 md:py-20 flex flex-col items-center md:items-start text-center md:text-left">
                                                  <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mb-4">
                                                            <h1 className="text-[38px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] text-shadow-md">
                                                                      My <span className="text-primary-container">Blogs</span>
                                                            </h1>
                                                            <Sparkles className="text-primary-container w-8 h-8 md:w-12 md:h-14 animate-pulse mt-1 md:mt-0" />
                                                  </div>
                                                  <p className="text-[14px] md:text-[18px] text-secondary max-w-2xl leading-[1.6]">
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
                                                            <div className="flex flex-col items-center justify-center py-24 md:py-32 px-6 bg-surface-container-low rounded-[32px] border border-surface-variant/50 border-dashed">
                                                                      {/* Icon for empty state */}
                                                                      <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-6">
                                                                                <Sparkles className="w-8 h-8 text-secondary/40" />
                                                                      </div>

                                                                      <h3 className="text-[20px] md:text-[24px] font-bold text-on-surface mb-2">
                                                                                No articles found yet
                                                                      </h3>
                                                                      <p className="text-secondary text-[15px] md:text-[16px] max-w-sm text-center leading-relaxed">
                                                                                We're currently crafting new insights in this category. Stay tuned for upcoming posts!
                                                                      </p>

                                                                      {/* Reset Filter Button */}
                                                                      {activeCategory !== "All" && (
                                                                                <Button
                                                                                          variant="ghost"
                                                                                          onClick={() => setActiveCategory("All")}
                                                                                          className="mt-6 text-primary-container font-bold hover:bg-primary-container/10 rounded-full px-6"
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
