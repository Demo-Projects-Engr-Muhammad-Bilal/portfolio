import { Lightbulb, Copy, CheckCircle2, Zap } from "lucide-react";
import type { ContentBlock } from "@/lib/types";

interface BlogContentRendererProps {
  blocks: ContentBlock[];
}

/**
 * Renders the blog post body from its typed ContentBlock union. This is an
 * exact extraction of the renderBlock(block: any, idx) switch statement that
 * used to live inline in app/blog/[id]/page.tsx — markup is unchanged, only
 * the `any` typing has been replaced with the discriminated union from
 * lib/types.ts so each `case` branch gets full type narrowing.
 */
export default function BlogContentRenderer({ blocks }: BlogContentRendererProps) {
  return (
    <>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={idx} className={`text-[16px] md:text-[18px] leading-relaxed text-secondary mb-6 ${block.dropCap
 ? 'first-letter:text-[48px] md:first-letter:text-[56px] first-letter:font-semibold first-letter:text-primary first-letter:mr-3 first-letter:float-left'
 : ''
 }`}>
                {block.text}
              </p>
            );

          case "heading2":
            return (
              <h2 key={idx} id={block.text.toLowerCase().replace(/\s+/g, '-')} className="font-display text-[28px] md:text-[32px] font-semibold mt-12 mb-4 text-on-surface leading-tight">
                {block.text}
              </h2>
            );

          case "heading3":
            return (
              <h3 key={idx} id={block.text.toLowerCase().replace(/\s+/g, '-')} className="font-display text-[22px] md:text-[24px] font-semibold mt-8 mb-3 text-on-surface leading-tight">
                {block.text}
              </h3>
            );

          case "callout":
            return (
              <div key={idx} className="clay my-8 flex items-start gap-4 rounded-[28px] p-6 md:p-8">
                <span className="clay-accent flex size-12 shrink-0 items-center justify-center rounded-[18px]"> <Lightbulb className="size-6" /> </span>
                <div>
                  <h4 className="font-display text-[18px] font-semibold mb-2 text-on-surface">{block.title}</h4>
                  <p className="text-[16px] text-secondary m-0 leading-relaxed">{block.text}</p>
                </div>
              </div>
            );

          case "code":
            return (
              <div key={idx} className="clay-dark my-8 overflow-hidden rounded-[28px]">
                <div className="flex items-center justify-between bg-black/20 px-5 py-3">
                  <span className="text-[12px] font-mono text-primary uppercase tracking-wider">{block.filename}</span>
                  <button className="clay-sm clay-pill flex size-8 cursor-pointer items-center justify-center text-primary transition-colors hover:text-foreground" aria-label="Copy code">
                    <Copy className="size-4" />
                  </button>
                </div>
                {/* Custom Scrollbar entirely via Tailwind classes (NO style jsx) */}
                <div className="p-6 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/30 transition-colors">
                  <pre className="font-mono text-[14px] leading-relaxed text-inverse-on-surface" dangerouslySetInnerHTML={{ __html: block.codeHTML }} />
                </div>
              </div>
            );

          case "comparison":
            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="clay rounded-[28px] p-8">
                  <h4 className="font-display text-[18px] font-semibold mb-4 text-on-surface">{block.left.title}</h4>
                  <ul className="space-y-3">
                    {block.left.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[16px] text-secondary">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="clay rounded-[28px] p-8">
                  <h4 className="font-display text-[18px] font-semibold mb-4 text-on-surface">{block.right.title}</h4>
                  <ul className="space-y-3">
                    {block.right.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[16px] text-secondary">
                        <Zap className="w-5 h-5 text-primary shrink-0 fill-current" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
