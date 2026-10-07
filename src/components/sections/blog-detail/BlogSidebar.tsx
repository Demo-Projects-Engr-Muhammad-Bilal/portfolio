"use client";

import Image from "next/image";
import Link from "next/link";
import { List, Share2, Link as LinkIcon, AtSign, ArrowUpRight } from "lucide-react";
import type { BlogDetailData } from "@/lib/types";

export default function BlogSidebar({ data }: { data: BlogDetailData }) {
          if (!data) return null;

          return (
                    <aside className="lg:col-span-4 space-y-8">

                              {/* ================= TABLE OF CONTENTS & SHARE ================= */}
                              <section className="clay sticky top-24 rounded-[32px] p-8">
                                        <h4 className="font-display text-[18px] font-semibold mb-6 flex items-center gap-2 text-on-surface">
                                                  <List className="w-5 h-5 text-primary" />
                                                  On This Page
                                        </h4>

                                        <nav className="flex flex-col gap-2">
                                                  {data.toc.map((item, idx) => (
                                                            <a
                                                                      key={idx}
                                                                      href={`#${item.id}`}
                                                                      // Pehla item active style mein, baqi normal
                                                                      className={`block rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${idx === 0 ? "clay-inset text-primary" : "text-secondary hover:text-primary" }`}
                                                            >
                                                                      {item.text}
                                                            </a>
                                                  ))}
                                        </nav>

                                        <div className="clay-inset my-8 h-2 rounded-full" aria-hidden="true" />

                                        {/* Share Links */}
                                        <div className="flex flex-col gap-4">
                                                  <span className="font-bold text-secondary uppercase tracking-widest text-[12px]">Share this article</span>
                                                  <div className="flex gap-4">
                                                            <button className="clay-sm clay-hover clay-pill flex size-10 cursor-pointer items-center justify-center text-on-surface transition-colors hover:[background-color:var(--accent-fill)] hover:text-[var(--on-accent-fill)]">
                                                                      <Share2 className="w-5 h-5" />
                                                            </button>
                                                            <button className="clay-sm clay-hover clay-pill flex size-10 cursor-pointer items-center justify-center text-on-surface transition-colors hover:[background-color:var(--accent-fill)] hover:text-[var(--on-accent-fill)]">
                                                                      <LinkIcon className="w-5 h-5" />
                                                            </button>
                                                            <button className="clay-sm clay-hover clay-pill flex size-10 cursor-pointer items-center justify-center text-on-surface transition-colors hover:[background-color:var(--accent-fill)] hover:text-[var(--on-accent-fill)]">
                                                                      <AtSign className="w-5 h-5" />
                                                            </button>
                                                  </div>
                                        </div>
                              </section>

                              {/* ================= AUTHOR CARD (DARK) ================= */}
                              <section className="clay-dark rounded-[32px] p-8">
                                        <h4 className="font-display mb-5 text-[18px] font-semibold">About Author</h4>

                                        <div className="flex items-center gap-4 mb-4">
                                                  <div className="clay-sm clay-pill size-16 shrink-0 p-1"> <div className="relative size-full overflow-hidden rounded-full"> <Image src={data.authorImage} alt={data.author} fill className="object-cover" /> </div> </div>
                                                  <div>
                                                            <p className="font-bold mb-0 text-[16px] text-inverse-on-surface">{data.author}</p>
                                                            <p className="text-[14px] text-inverse-on-surface/70">{data.authorRole}</p>
                                                  </div>
                                        </div>

                                        <p className="text-[15px] text-inverse-on-surface/70 mb-5 leading-relaxed">
                                                  {data.author} is a full-stack architect obsessed with performance and the future of web standards.
                                        </p>

                                        <Link href="#" className="text-primary font-bold hover:underline flex items-center gap-1 text-[14px]">
                                                  View Profile <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                              </section>

                              {/* ================= RELATED READS (LIGHT) ================= */}
                              <section className="clay rounded-[32px] p-8">
                                        <h4 className="font-display text-[18px] font-semibold mb-5 text-on-surface">Related Reads</h4>
                                        <div className="flex flex-col gap-5">
                                                  {data.relatedPosts.map((post, idx) => (
                                                            <Link key={idx} href={post.href} className="group flex flex-col gap-1">
                                                                      <h5 className="font-bold text-[16px] text-on-surface group-hover:text-primary transition-colors leading-tight">
                                                                                {post.title}
                                                                      </h5>
                                                                      <span className="text-[13px] font-medium text-secondary">{post.readTime}</span>
                                                            </Link>
                                                  ))}
                                        </div>
                              </section>

                    </aside>
          );
}