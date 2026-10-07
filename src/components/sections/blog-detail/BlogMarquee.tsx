const words = ["Innovate", "Build", "Scale", "Kinetic", "System", "Performance", "Future"];
const dots = ["var(--accent-fill)", "var(--tint-lavender)", "var(--tint-peach)", "var(--tint-sky)", "var(--tint-mint)"];

export default function BlogMarquee() {
  // Rendered twice so the -50% translate loops seamlessly
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-5 pr-5 md:gap-7 md:pr-7" aria-hidden={key === "b" ? true : undefined}>
      {words.map((w, i) => (
        <span
          key={w}
          className="clay-sm clay-pill flex items-center gap-3 px-6 py-3 font-display text-[18px] font-semibold text-on-surface md:px-8 md:py-4 md:text-[24px]"
        >
          <span className="clay-blob size-3 rounded-full" style={{ ["--c" as string]: dots[i % dots.length] }} />
          {w}
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative mb-20 overflow-hidden py-6 md:mb-32 md:py-8" aria-hidden="true">
      <style>{`
        @keyframes blog-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .blog-marquee {
          display: flex;
          width: max-content;
          animation: blog-marquee 50s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .blog-marquee { animation: none; }
        }
      `}</style>
      <div className="clay-mask-x overflow-hidden py-6">
        <div className="blog-marquee whitespace-nowrap">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  );
}
