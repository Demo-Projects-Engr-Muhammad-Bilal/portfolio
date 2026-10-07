import Image from "next/image";

const icons = [
  { src: "/icons/nextjs.svg", pos: "-left-16 top-10", dur: 7, delay: 0 },
  { src: "/icons/react.svg", pos: "-right-14 top-24", dur: 8.5, delay: 1.2 },
  { src: "/icons/typescript.svg", pos: "-left-10 bottom-32", dur: 9, delay: 2.1 },
  { src: "/icons/nodejs.svg", pos: "-right-12 bottom-16", dur: 7.5, delay: 0.6 },
];

const blobs = [
  { cls: "-right-10 -top-10 size-24 rounded-full", c: "var(--accent-fill)", dur: 8, delay: 0.4 },
  { cls: "-left-14 -bottom-10 size-20 rounded-[28px]", c: "var(--tint-lavender)", dur: 9.5, delay: 1.6 },
  { cls: "left-1/3 -top-14 h-10 w-24 rounded-full", c: "var(--tint-peach)", dur: 7, delay: 2.4 },
];

/**
 * Clay decoration around the portrait (desktop only, rendered by HeroBase).
 * Pure CSS: floating clay blobs + tech icon tiles. Replaces the old orbit rings.
 */
export default function HeroOrbit({ showBlobs = true }: { showBlobs?: boolean }) {
  return (
    <div aria-hidden="true" className="relative h-full w-full">
      {showBlobs && blobs.map((b, i) => (
        <span
          key={i}
          className={`clay-blob clay-float absolute ${b.cls}`}
          style={{ ["--c" as string]: b.c, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
        />
      ))}
      {icons.map((ic) => (
        <span
          key={ic.src}
          className={`clay-sm clay-float absolute flex size-14 items-center justify-center rounded-[20px] ${ic.pos}`}
          style={{ animationDuration: `${ic.dur}s`, animationDelay: `${ic.delay}s` }}
        >
          <Image src={ic.src} alt="" width={26} height={26} />
        </span>
      ))}
    </div>
  );
}
