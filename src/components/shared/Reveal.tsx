"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll reveal. Pure CSS transition + IntersectionObserver (no dependency).
 * - default: fade + slide up
 * - `pop`: soft spring "pop" (scale 0.94 -> 1 + translate)
 * Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  pop = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  pop?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = pop ? "translate-y-8 scale-[0.94] opacity-0" : "translate-y-6 opacity-0";
  const visible = pop ? "translate-y-0 scale-100 opacity-100" : "translate-y-0 opacity-100";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: pop ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "ease-out",
      }}
      className={`transition-[opacity,transform,scale] ${pop ? "duration-[800ms]" : "duration-700"} motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? visible : hidden
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Wraps every child in a popping Reveal with an incremental delay,
 * so grid cards appear one after another. `className` goes on the wrapper
 * (e.g. the grid), `itemClassName` on each item.
 */
export function Stagger({
  children,
  className = "",
  itemClassName = "h-full",
  step = 90,
  start = 0,
}: {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  step?: number;
  start?: number;
}) {
  return (
    <div className={className}>
      {Children.toArray(children).map((child, i) => (
        <Reveal key={i} pop delay={start + i * step} className={itemClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
