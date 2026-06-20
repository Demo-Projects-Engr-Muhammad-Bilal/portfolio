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
                ? 'first-letter:text-[48px] md:first-letter:text-[56px] first-letter:font-extrabold first-letter:text-primary first-letter:mr-3 first-letter:float-left'
                : ''
                }`}>
                {block.text}
              </p>
            );

          case "heading2":
            return (
              <h2 key={idx} id={block.text.toLowerCase().replace(/\s+/g, '-')} className="text-[28px] md:text-[32px] font-bold mt-12 mb-4 text-on-surface leading-tight">
                {block.text}
              </h2>
            );

          case "heading3":
            return (
              <h3 key={idx} id={block.text.toLowerCase().replace(/\s+/g, '-')} className="text-[22px] md:text-[24px] font-bold mt-8 mb-3 text-on-surface leading-tight">
                {block.text}
              </h3>
            );

          case "callout":
            return (
              <div key={idx} className="my-8 p-6 md:p-8 bg-primary-fixed/30 border-l-4 border-primary rounded-xl flex gap-4 items-start">
                <Lightbulb className="w-8 h-8 text-primary shrink-0 fill-current mt-1" />
                <div>
                  <h4 className="text-[18px] font-bold mb-2 text-on-primary-fixed-variant">{block.title}</h4>
                  <p className="text-[16px] text-on-primary-fixed-variant m-0 leading-relaxed">{block.text}</p>
                </div>
              </div>
            );

          case "code":
            return (
              <div key={idx} className="rounded-xl overflow-hidden my-8 bg-[#1e1e1e] border border-white/10 shadow-xl">
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <span className="text-[12px] font-mono text-primary-container uppercase tracking-wider">{block.filename}</span>
                  <button className="text-primary-container hover:text-white transition-colors cursor-pointer">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                {/* Custom Scrollbar entirely via Tailwind classes (NO style jsx) */}
                <div className="p-6 overflow-x-auto [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/30 transition-colors">
                  <pre className="font-mono text-[14px] leading-relaxed text-[#D4D4D4]" dangerouslySetInnerHTML={{ __html: block.codeHTML }} />
                </div>
              </div>
            );

          case "comparison":
            return (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-8 bg-surface-container-high rounded-[24px]">
                  <h4 className="text-[18px] font-bold mb-4 text-on-surface">{block.left.title}</h4>
                  <ul className="space-y-3">
                    {block.left.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-[16px] text-secondary">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 bg-surface-container-high rounded-[24px]">
                  <h4 className="text-[18px] font-bold mb-4 text-on-surface">{block.right.title}</h4>
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
