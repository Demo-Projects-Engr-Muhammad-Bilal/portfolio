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
                              <section className="p-8 bg-surface-container rounded-[24px] sticky top-24 shadow-sm border border-surface-variant/30">
                                        <h4 className="text-[18px] font-bold mb-6 flex items-center gap-2 text-on-surface">
                                                  <List className="w-5 h-5 text-primary" />
                                                  On This Page
                                        </h4>

                                        <nav className="flex flex-col gap-4">
                                                  {data.toc.map((item, idx) => (
                                                            <a
                                                                      key={idx}
                                                                      href={`#${item.id}`}
                                                                      // Pehla item active style mein, baqi normal
                                                                      className={`text-[14px] font-semibold transition-colors pl-4 border-l-2 ${idx === 0
                                                                                          ? "text-primary border-primary"
                                                                                          : "text-secondary hover:text-primary border-transparent"
                                                                                }`}
                                                            >
                                                                      {item.text}
                                                            </a>
                                                  ))}
                                        </nav>

                                        <hr className="my-8 border-surface-variant" />

                                        {/* Share Links */}
                                        <div className="flex flex-col gap-4">
                                                  <span className="font-bold text-secondary uppercase tracking-widest text-[12px]">Share this article</span>
                                                  <div className="flex gap-4">
                                                            <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container hover:text-white transition-all cursor-pointer text-on-surface">
                                                                      <Share2 className="w-5 h-5" />
                                                            </button>
                                                            <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container hover:text-white transition-all cursor-pointer text-on-surface">
                                                                      <LinkIcon className="w-5 h-5" />
                                                            </button>
                                                            <button className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary-container hover:text-white transition-all cursor-pointer text-on-surface">
                                                                      <AtSign className="w-5 h-5" />
                                                            </button>
                                                  </div>
                                        </div>
                              </section>

                              {/* ================= AUTHOR CARD (DARK) ================= */}
                              <section className="p-8 bg-inverse-surface text-surface rounded-[24px] shadow-lg">
                                        <h4 className="text-[18px] font-bold mb-5">About Author</h4>

                                        <div className="flex items-center gap-4 mb-4">
                                                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shrink-0 relative">
                                                            <Image src={data.authorImage} alt={data.author} fill className="object-cover" />
                                                  </div>
                                                  <div>
                                                            <p className="font-bold mb-0 text-[16px] text-white">{data.author}</p>
                                                            <p className="text-[14px] text-surface-variant">{data.authorRole}</p>
                                                  </div>
                                        </div>

                                        <p className="text-[15px] text-surface-variant mb-5 leading-relaxed">
                                                  {data.author} is a full-stack architect obsessed with performance and the future of web standards.
                                        </p>

                                        <Link href="#" className="text-primary font-bold hover:underline flex items-center gap-1 text-[14px]">
                                                  View Profile <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                              </section>

                              {/* ================= RELATED READS (LIGHT) ================= */}
                              <section className="p-8 bg-surface-container-low rounded-[24px] border border-surface-variant/50 shadow-sm">
                                        <h4 className="text-[18px] font-bold mb-5 text-on-surface">Related Reads</h4>
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