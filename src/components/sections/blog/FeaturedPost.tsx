import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FeaturedBlogPost } from "@/lib/types";

export default function FeaturedPost({ post }: { post: FeaturedBlogPost }) {
          if (!post) return null;

          return (
                    <section className="mb-16 md:mb-24">
                              {/* Container height set to md:h-[350px] for compact look */}
                              <div className="group flex flex-col md:flex-row bg-surface rounded-[24px] overflow-hidden hover:shadow-xl transition-all duration-500 border border-surface-container-high md:h-[350px]">

                                        {/* Image Box */}
                                        <div className="w-full md:w-1/2 h-56 md:h-full relative overflow-hidden flex-shrink-0">
                                                  <Image
                                                            src={post.image}
                                                            alt={post.title}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                  />
                                        </div>

                                        {/* Content Box - bg-secondary/5 diya hai jo light secondary gray tone dega */}
                                        <div className="w-full md:w-1/2 p-6 md:px-10 md:py-8 flex flex-col justify-center space-y-4 bg-secondary/5">
                                                  <div className="text-left">
                                                            <span className="bg-primary-container/10 text-primary-container px-3 py-1 rounded-full font-bold text-[10px] tracking-wider uppercase">
                                                                      {post.category}
                                                            </span>
                                                  </div>

                                                  <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.2] text-on-surface text-left">
                                                            {post.title}
                                                  </h2>

                                                  <p className="text-secondary text-[14px] leading-[1.5] line-clamp-2 text-left">
                                                            {post.desc}
                                                  </p>

                                                  <div className="flex items-center gap-3 pt-2">
                                                            <div className="w-9 h-9 rounded-full relative overflow-hidden bg-primary-fixed shrink-0">
                                                                      <Image
                                                                                src={post.authorImage}
                                                                                alt={post.author}
                                                                                fill
                                                                                className="object-cover"
                                                                      />
                                                            </div>
                                                            <div className="text-left">
                                                                      <p className="font-bold text-[13px] text-on-surface leading-none">{post.author}</p>
                                                                      <p className="text-[11px] text-secondary mt-1">{post.date} • {post.readTime}</p>
                                                            </div>
                                                  </div>

                                                  {/* Connected Link with Shadcn Button */}
                                                  <Link href={`/blog/${post.id}`} className="mt-1 w-fit">
                                                            <Button className="bg-primary-container hover:bg-primary-container/90 text-on-primary font-bold px-6 h-12 rounded-full text-[13px] hover:translate-x-1 transition-all flex items-center gap-2 group/btn shadow-sm cursor-pointer border-0">
                                                                      Read More
                                                                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                            </Button>
                                                  </Link>
                                        </div>

                              </div>
                    </section>
          );
}