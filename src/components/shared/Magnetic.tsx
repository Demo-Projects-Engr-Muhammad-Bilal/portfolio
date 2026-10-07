"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

/**
 * Wrapper that makes its child drift slightly toward the cursor (desktop only).
 * CSS-variable based, no re-renders. Off for touch + reduced-motion.
 */
export default function Magnetic({
  children,
  className = "",
  strength = 0.3,
  max = 12,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const allowed = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const clamp = (v: number) => Math.max(-max, Math.min(max, v));

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !allowed()) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.dataset.active = "true";
    el.style.setProperty("--tx", `${clamp(dx * strength).toFixed(1)}px`);
    el.style.setProperty("--ty", `${clamp(dy * strength).toFixed(1)}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.dataset.active = "false";
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className={`clay-magnetic ${className}`}>
      {children}
    </div>
  );
}
