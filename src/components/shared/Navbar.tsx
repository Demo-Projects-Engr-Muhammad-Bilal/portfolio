"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Contact", href: "/contact" },
          { name: "Projects", href: "/projects" },
          { name: "Blogs", href: "/blog" }
];

export default function Navbar() {
          const [isScrolled, setIsScrolled] = useState(false);
          const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
          const pathname = usePathname();

          // Ref Navbar container ko track karne ke liye
          const navRef = useRef<HTMLDivElement>(null);

          // Scroll handle karne ke liye
          useEffect(() => {
                    const handleScroll = () => {
                              setIsScrolled(window.scrollY > 20);
                    };

                    window.addEventListener("scroll", handleScroll);
                    return () => window.removeEventListener("scroll", handleScroll);
          }, []);

          // Bahar click karne par menu close karne ki logic
          useEffect(() => {
                    const handleClickOutside = (event: MouseEvent) => {
                              // Agar click navRef ke bahar hua hai, toh menu band kar do
                              if (navRef.current && !navRef.current.contains(event.target as Node)) {
                                        setIsMobileMenuOpen(false);
                              }
                    };

                    // Sirf tabhi listener lagao jab menu open ho
                    if (isMobileMenuOpen) {
                              document.addEventListener("mousedown", handleClickOutside);
                    } else {
                              document.removeEventListener("mousedown", handleClickOutside);
                    }

                    return () => {
                              document.removeEventListener("mousedown", handleClickOutside);
                    };
          }, [isMobileMenuOpen]);

          return (
                    <div
                              ref={navRef}
                              className={`fixed z-50 w-full flex justify-center transition-all duration-500 ease-linear ${isScrolled ? "top-0 px-0" : "top-0 px-0 md:top-4 md:px-[64px]"
                                        }`}
                    >
                              <nav
                                        className={`w-full max-w-[var(--spacing-container-max)] bg-surface/90 backdrop-blur-xl border border-surface-variant flex justify-between items-center transition-all duration-500 ease-in-out relative ${isScrolled
                                                            ? "rounded-none md:rounded-b-[24px] shadow-md py-3 px-5 md:px-10"
                                                            : "rounded-none md:rounded-full shadow-sm md:shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-3 px-5 md:px-8 border-t-0 md:border-t"
                                                  }`}
                              >
                                        {/* Logo */}
                                        <Link
                                                  href="/"
                                                  className="z-50 flex items-center"
                                                  onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                                  <Image
                                                            src="/logo (3).png"
                                                            alt="MBilal Logo"
                                                            width={180}
                                                            height={40}
                                                            className="h-6 md:h-8 w-auto object-contain"
                                                            priority
                                                  />
                                        </Link>

                                        {/* DESKTOP LINKS */}
                                        <div className="hidden md:flex items-center gap-2 lg:gap-6">
                                                  {navLinks.map((link) => {
                                                            const isActive = pathname === link.href || (pathname.startsWith('/blog') && link.href === '/blog');

                                                            return (
                                                                      <Link
                                                                                key={link.name}
                                                                                href={link.href}
                                                                                className={`rounded-full transition-all duration-300 text-[14px] tracking-wider ${isActive
                                                                                                    ? "bg-primary text-on-primary px-6 py-2.5 font-semibold shadow-sm"
                                                                                                    : "text-secondary hover:text-primary px-4 py-2 font-light"
                                                                                          }`}
                                                                      >
                                                                                {link.name}
                                                                      </Link>
                                                            );
                                                  })}
                                        </div>

                                        {/* CTA Button (Desktop) - External Schedule Link via .env */}
                                        <Link
                                                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="hidden sm:flex"
                                        >
                                                  <Button className="bg-primary-container text-on-primary-container rounded-full px-8 h-[48px] text-[14px] font-bold uppercase tracking-widest hover:scale-105 hover:bg-primary-container/90 transition-all shadow-md cursor-pointer border-0">
                                                            Let's Talk
                                                  </Button>
                                        </Link>

                                        {/* MOBILE HAMBURGER ICON */}
                                        <button
                                                  className="md:hidden text-primary p-2 z-50 cursor-pointer"
                                                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                  aria-label="Toggle Menu"
                                        >
                                                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                        </button>

                                        {/* MOBILE DROPDOWN MENU */}
                                        {isMobileMenuOpen && (
                                                  <div className="absolute top-full left-0 w-full bg-surface border-b border-surface-variant rounded-b-[24px] shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
                                                            {navLinks.map((link) => {
                                                                      const isActive = pathname === link.href || (pathname.startsWith('/blog') && link.href === '/blog');

                                                                      return (
                                                                                <Link
                                                                                          key={link.name}
                                                                                          href={link.href}
                                                                                          onClick={() => setIsMobileMenuOpen(false)}
                                                                                          className={`text-center text-[14px] tracking-wider py-3 ${isActive
                                                                                                              ? "bg-primary text-on-primary rounded-full px-6 font-semibold"
                                                                                                              : "text-secondary hover:text-primary px-4 font-semibold border-b border-surface-variant/50"
                                                                                                    }`}
                                                                                >
                                                                                          {link.name}
                                                                                </Link>
                                                                      );
                                                            })}

                                                            {/* CTA Button (Mobile) - External Schedule Link via .env */}
                                                            <Link
                                                                      href={process.env.NEXT_PUBLIC_CALENDLY_URL || "#"}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="w-full sm:hidden mt-2"
                                                                      onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                      <Button className="bg-primary-container text-on-primary-container rounded-full px-8 h-[56px] text-[14px] font-bold uppercase tracking-widest shadow-md w-full border-0">
                                                                                Let's Talk
                                                                      </Button>
                                                            </Link>
                                                  </div>
                                        )}
                              </nav>
                    </div>
          );
}