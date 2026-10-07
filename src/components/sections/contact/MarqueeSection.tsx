interface MarqueeProps {
  text?: string; // Optional: items separated by "✦" or "•"
}

const dots = ["var(--accent-fill)", "var(--tint-lavender)", "var(--tint-peach)", "var(--tint-sky)", "var(--tint-mint)"];

export default function MarqueeSection({ text }: MarqueeProps) {
  const source =
    text || "POSTGRESQL ✦ PRISMA ✦ TAILWIND CSS ✦ TYPESCRIPT ✦ NEXT.JS ✦ REACT ✦ ASP.NET CORE ✦ FIREBASE";
  const items = source
    .split(/[✦•]/)
    .map((t) => t.trim())
    .filter(Boolean);

  // Rendered twice so the -50% translate loops seamlessly
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-5 pr-5 md:gap-7 md:pr-7" aria-hidden={key === "b" ? true : undefined}>
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="clay-sm clay-pill flex items-center gap-3 px-6 py-3 font-display text-[18px] font-semibold text-on-surface md:px-8 md:py-4 md:text-[24px]"
        >
          <span className="clay-blob size-3 rounded-full" style={{ ["--c" as string]: dots[i % dots.length] }} />
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <section className="relative my-12 overflow-hidden py-6 md:my-20 md:py-10" aria-label="Highlights">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>

      <div className="clay-mask-x overflow-hidden py-6">
        <div className="animate-marquee whitespace-nowrap">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </section>
  );
}
