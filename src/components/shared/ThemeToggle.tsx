"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/**
 * Clay sliding switch. The knob position/icon are driven purely by the
 * `dark:` CSS variant (class on <html>), so there is no SSR/hydration flash.
 * Only the aria-label needs the mounted gate.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={mounted ? isDark : false}
      aria-label={mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`clay-inset shadow-[inset_5px_5px_10px_var(--clay-inner-dark),inset_-5px_-5px_10px_var(--clay-inner-light),0_0_0_1px_var(--clay-inner-dark)] relative inline-flex h-10 w-[76px] shrink-0 cursor-pointer items-center rounded-full p-1 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 ${className}`}
    >
      <span
        className="clay-accent relative flex size-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:translate-x-9"
      >
        <Sun size={16} strokeWidth={2.2} className="absolute transition-opacity duration-300 dark:opacity-0" />
        <Moon size={16} strokeWidth={2.2} className="absolute opacity-0 transition-opacity duration-300 dark:opacity-100" />
      </span>
    </button>
  );
}
