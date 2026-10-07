"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/Logo";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const label =
  "clay-sm clay-pill mb-5 inline-flex items-center gap-2 px-4 py-1.5 text-[12px] font-semibold text-inverse-on-surface";
const link =
  "text-inverse-on-surface/80 transition-colors hover:text-[var(--accent-fill)] text-[15px] font-medium";
const social =
  "clay-sm clay-hover flex size-11 items-center justify-center rounded-full text-inverse-on-surface outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 hover:text-[var(--accent-fill)]";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setIsSuccess(false);

    try {
      // Fake network request delay (1.5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="px-3 pb-3 pt-10 md:px-6 md:pb-6 md:pt-16">
      <div className="clay-dark relative mx-auto max-w-[1280px] overflow-hidden rounded-[36px] px-6 pt-12 sm:px-10 md:rounded-[56px] md:px-16 md:pt-20">
        <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -right-10 -top-10 size-36 rounded-full opacity-70" style={{ ["--c" as string]: "var(--tint-lavender)", animationDuration: "9s" }} />
        <div className="mb-14 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-6 text-inverse-on-surface">
              <Logo />
            </div>
            <p className="mb-6 max-w-xs text-[14px] leading-[1.7] text-inverse-on-surface/70">
              Building the future of the web with precision, passion, and high-performance code.
            </p>
            <div className="flex gap-4">
              <Link href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} target="_blank" rel="noopener noreferrer" className={social} aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                                                                                </svg>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} target="_blank" rel="noopener noreferrer" className={social} aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                                                          <rect x="2" y="9" width="4" height="12"></rect>
                                                                                          <circle cx="4" cy="4" r="2"></circle>
                                                                                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 className={label}>Navigate</h5>
            <ul className="space-y-3">
              <li><Link href="/" className={link}>Home</Link></li>
              <li><Link href="/projects" className={link}>Projects</Link></li>
              <li><Link href="/about" className={link}>About Me</Link></li>
              <li><Link href="/blog" className={link}>Blogs</Link></li>
              <li><Link href="/contact" className={link}>Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className={label}>Elsewhere</h5>
            <ul className="space-y-3">
              <li><Link href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} target="_blank" rel="noopener noreferrer" className={link}>GitHub</Link></li>
              <li><Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} target="_blank" rel="noopener noreferrer" className={link}>LinkedIn</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <h5 className={label}>Stay updated</h5>
            <p className="mb-4 text-[14px] text-inverse-on-surface/70">Subscribe to get the latest tech insights.</p>

            <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
              <div className="flex gap-2">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isSuccess}
                  className="h-12 w-full text-[14px] text-inverse-on-surface placeholder:text-inverse-on-surface/60"
                  placeholder="Email"
                  type="email"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading || isSuccess}
                  size="icon-lg"
                  aria-label="Subscribe"
                  variant={isSuccess ? "secondary" : "default"}
                  className={isSuccess ? "cursor-default text-[var(--accent-fill)]" : ""}
                >
                  {isLoading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : isSuccess ? (
                    <CheckCircle2 className="size-4" />
                  ) : (
                    <Send className="size-4" />
                  )}
                </Button>
              </div>
              {isSuccess && (
                <span className="px-3 text-[13px] font-semibold text-[var(--accent-fill)]">
                  Thanks for subscribing!
                </span>
              )}
            </form>
          </div>
        </div>

        <div className="clay-inset h-1.5 rounded-full" aria-hidden="true" /> <div className="flex flex-col gap-2 py-6 text-[13px] font-medium text-inverse-on-surface/70 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Muhammad Bilal Khalid</span>
          <span>Full-Stack Developer</span>
        </div>
      </div>
    </footer>
  );
}
