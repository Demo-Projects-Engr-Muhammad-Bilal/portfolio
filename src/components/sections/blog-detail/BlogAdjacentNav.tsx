import Link from "next/link";
import { ArrowLeft, ArrowRight as ArrowRightIcon } from "lucide-react";
import type { AdjacentPost } from "@/lib/types";

interface BlogAdjacentNavProps {
  prevPost: AdjacentPost;
  nextPost: AdjacentPost;
}

/**
 * Extracted verbatim from the "BOTTOM NAVIGATION" block of
 * app/blog/[id]/page.tsx.
 */
export default function BlogAdjacentNav({ prevPost, nextPost }: BlogAdjacentNavProps) {
  return (
    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href={prevPost.href} className="clay clay-hover group flex items-center gap-6 rounded-[32px] p-6 md:p-8">
          <ArrowLeft className="w-6 h-6 text-secondary group-hover:-translate-x-2 transition-transform shrink-0" />
          <div>
            <span className="font-bold text-secondary uppercase tracking-widest text-[11px] mb-1 block">Previous Post</span>
            <h4 className="font-display text-[18px] md:text-[20px] font-semibold line-clamp-1 text-on-surface">{prevPost.title}</h4>
          </div>
        </Link>

        <Link href={nextPost.href} className="clay clay-hover group flex items-center justify-between gap-6 rounded-[32px] p-6 md:p-8 text-right">
          <div className="flex-1">
            <span className="font-bold text-secondary uppercase tracking-widest text-[11px] mb-1 block">Next Post</span>
            <h4 className="font-display text-[18px] md:text-[20px] font-semibold line-clamp-1 text-on-surface">{nextPost.title}</h4>
          </div>
          <ArrowRightIcon className="w-6 h-6 text-secondary group-hover:translate-x-2 transition-transform shrink-0" />
        </Link>
      </div>
    </section>
  );
}
