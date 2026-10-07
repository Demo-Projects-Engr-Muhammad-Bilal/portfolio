"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

/**
 * Pointer-based CSS 3D tilt with a soft moving highlight.
 * No state / re-renders: only CSS variables are written on pointermove.
 * Disabled for touch pointers and prefers-reduced-motion.
 */
export default function Tilt({
  children,
  className = "",
  max = 8,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  /** max rotation in degrees */
  max?: number;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const allowed = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !allowed()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.dataset.active = "true";
    el.style.setProperty("--ry", `${((px - 0.5) * 2 * max).toFixed(2)}deg`);
    el.style.setProperty("--rx", `${(-(py - 0.5) * 2 * max).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.dataset.active = "false";
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`clay-tilt relative ${className}`}
    >
      {children}
      {glow && (
        <span
          aria-hidden="true"
          className="clay-tilt-glow pointer-events-none absolute inset-0 rounded-[inherit]"
        />
      )}
    </div>
  );
}
