"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import HeroOrbit from "@/components/sections/home/HeroOrbit";

// three.js is only downloaded when the 3D scene is actually used (desktop + WebGL)
const HeroScene3D = dynamic(() => import("@/components/sections/home/HeroScene3D"), {
  ssr: false,
  loading: () => <HeroOrbit />,
});

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

let webglCache: boolean | null = null;
function detectWebGL() {
  if (webglCache !== null) return webglCache;
  try {
    const canvas = document.createElement("canvas");
    webglCache = !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    webglCache = false;
  }
  return webglCache;
}
const noopSubscribe = () => () => {};

const mobileBlobs = [
  { cls: "-right-6 -top-8 size-28", c: "var(--accent-fill)" },
  { cls: "-left-8 top-1/3 size-24", c: "var(--tint-lavender)" },
  { cls: "-bottom-8 right-6 size-24", c: "var(--tint-peach)" },
];

/**
 * Hero decoration:
 *  - < lg: blurred CSS blobs only (no JS, no WebGL)
 *  - >= lg + WebGL: React Three Fiber clay cluster (lazy, ssr:false)
 *  - >= lg without WebGL: CSS clay orbit fallback
 * prefers-reduced-motion renders the 3D scene as a still frame (no Float / parallax).
 */
export default function HeroDecoration() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = useMediaQuery("(prefers-reduced-motion: reduce)");
  const webgl = useSyncExternalStore(noopSubscribe, detectWebGL, () => false);
  const use3D = isDesktop && webgl;

  // Pause rendering when the hero scrolls out of view
  const holder = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={holder} aria-hidden="true" className="relative h-full w-full">
      {/* Mobile / tablet: CSS-only blurred blobs */}
      <div className="lg:hidden">
        {mobileBlobs.map((b, i) => (
          <span
            key={i}
            className={`absolute rounded-full opacity-60 blur-2xl ${b.cls}`}
            style={{ backgroundColor: b.c }}
          />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        {use3D ? (
          <>
            <div className="absolute -inset-x-14 -inset-y-14">
              <HeroScene3D reduceMotion={reduce} active={visible} />
            </div>
            <HeroOrbit showBlobs={false} />
          </>
        ) : (
          <HeroOrbit />
        )}
      </div>
    </div>
  );
}
