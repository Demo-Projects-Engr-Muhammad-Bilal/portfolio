import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import type { FeaturedBlogPost } from "@/lib/types";

export default function FeaturedPost({ post }: { post: FeaturedBlogPost }) {
  if (!post) return null;

  return (
    <section className="mb-16 md:mb-24">
      <div className="clay-lg group flex flex-col p-3 md:h-[380px] md:flex-row">
        {/* Image Box */}
        <div className="clay-frame relative h-56 w-full flex-shrink-0 overflow-hidden rounded-[32px] md:h-full md:w-1/2">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Content Box */}
        <div className="flex w-full flex-col justify-center space-y-4 p-6 md:w-1/2 md:px-10 md:py-8">
          <div className="text-left">
            <span className="clay-sm clay-pill inline-block px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              {post.category}
            </span>
          </div>

          <h2 className="text-left font-display text-[24px] font-semibold leading-[1.2] text-on-surface md:text-[32px]">
            {post.title}
          </h2>

          <p className="line-clamp-2 text-left text-[14px] leading-[1.6] text-secondary">{post.desc}</p>

          <div className="flex items-center gap-3 pt-2">
            <div className="clay-sm clay-pill size-11 shrink-0 p-1">
              <div className="relative size-full overflow-hidden rounded-full">
                <Image src={post.authorImage} alt={post.author} fill className="object-cover" />
              </div>
            </div>
            <div className="text-left">
              <p className="text-[13px] font-bold leading-none text-on-surface">{post.author}</p>
              <p className="mt-1 text-[11px] text-secondary">
                {post.date} • {post.readTime}
              </p>
            </div>
          </div>

          <Link href={`/blog/${post.id}`} className={buttonVariants({ size: "lg", className: "mt-1 w-fit gap-2 text-[13px]" })}>
            Read More
            <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
