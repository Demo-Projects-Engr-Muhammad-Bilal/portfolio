"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import ThemeToggle from "@/components/shared/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const talkHref = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";

  // Lock page scroll + close on Escape while the menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Floating clay pill bar
          < lg : theme toggle | logo | Let's talk + hamburger
          >= lg: logo | inline links | theme toggle + Let's talk */}
      <header className="pointer-events-none fixed inset-x-0 top-3 z-[70] px-3 md:top-4 md:px-6">
        <div className="clay pointer-events-auto mx-auto grid h-[60px] max-w-[1180px] grid-cols-[1fr_auto_1fr] items-center rounded-full px-3 md:h-16 md:px-4">
          {/* Left */}
          <div className="justify-self-start">
            <div className="lg:hidden">
              <ThemeToggle />
            </div>
            <div className="hidden pl-2 lg:block">
              <Logo onClick={() => setOpen(false)} />
            </div>
          </div>

          {/* Center */}
          <div>
            <div className="lg:hidden">
              <Logo onClick={() => setOpen(false)} />
            </div>
            <nav aria-label="Main" className="hidden items-center gap-1.5 lg:flex">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-[14px] font-semibold outline-none transition-[box-shadow,color,background-color] duration-300 focus-visible:ring-[3px] focus-visible:ring-ring/60 ${
                      active
                        ? "clay-inset text-foreground"
                        : "text-secondary hover:bg-surface-container-low hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2.5 justify-self-end">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <div className="hidden sm:block">
              <Link
                href={talkHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "sm" })}
              >
                Let&apos;s talk
              </Link>
            </div>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((v) => !v)}
              className="clay-sm clay-hover inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 lg:hidden"
            >
              {open ? <X size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen clay menu */}
      <div
        id="site-menu"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] overflow-y-auto bg-background pt-28 pb-10 lg:hidden transition-[opacity,transform] duration-300 ease-out ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto flex min-h-full max-w-[var(--spacing-container-max)] flex-col px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
          <p className="clay-sm clay-pill mb-6 inline-flex w-fit items-center gap-2 px-4 py-1.5 text-[12px] font-semibold text-secondary">
            <span className="size-2 rounded-full bg-primary" />
            Navigate
          </p>

          <ul className="flex flex-col gap-4">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`clay-hover flex items-center gap-5 rounded-[28px] px-6 py-4 md:py-6 ${
                      active ? "clay-sm clay-pressed" : "clay-sm"
                    }`}
                  >
                    <span className="clay-sm flex size-9 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`font-display text-3xl font-semibold tracking-tight md:text-5xl ${active ? "text-primary" : "text-foreground"}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-10">
            <Link
              href={talkHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={buttonVariants({ size: "lg", className: "w-full sm:w-auto" })}
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
