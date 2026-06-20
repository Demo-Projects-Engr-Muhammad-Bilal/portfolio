"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

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

                              // Success state on
                              setIsSuccess(true);
                              setEmail(""); // Form clear kar dein

                              // 3 seconds baad success message gayab kar dein taake dobara subscribe kiya ja sake agar chahein
                              setTimeout(() => {
                                        setIsSuccess(false);
                              }, 3000);

                    } catch (error) {
                              console.error("Subscription failed:", error);
                    } finally {
                              setIsLoading(false);
                    }
          };

          return (
                    <footer className="bg-inverse-surface pt-16 pb-2 md:py-[var(--spacing-section-gap)]">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">

                                                  {/* Brand Column */}
                                                  <div className="col-span-1 sm:col-span-2 md:col-span-1">
                                                            <Link href="/" className="block relative w-32 h-10 md:w-48 md:h-14 mb-6 md:mb-8">
                                                                      <Image
                                                                                src="/logo (3).png"
                                                                                alt="MBilal Logo"
                                                                                fill
                                                                                className="object-contain object-left"
                                                                                priority
                                                                      />
                                                            </Link>

                                                            <p className="text-surface-variant text-[14px] md:text-[16px] leading-[1.6] mb-6 md:mb-8 max-w-xs">
                                                                      Building the future of the web with precision, passion, and high-performance code.
                                                            </p>
                                                            <div className="flex gap-4">
                                                                      {/* GitHub Link via .env */}
                                                                      <Link
                                                                                href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-surface hover:bg-primary-container hover:text-on-primary-container transition-all"
                                                                                aria-label="GitHub"
                                                                      >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                                                                                </svg>
                                                                      </Link>

                                                                      {/* LinkedIn Link via .env */}
                                                                      <Link
                                                                                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-surface hover:bg-primary-container hover:text-on-primary-container transition-all"
                                                                                aria-label="LinkedIn"
                                                                      >
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
                                                            <h5 className="text-surface font-bold uppercase tracking-widest text-[12px] md:text-[14px] mb-4 md:mb-6">Navigation</h5>
                                                            <ul className="space-y-3 md:space-y-4">
                                                                      <li><Link href="/" className="text-surface-variant hover:text-primary-container transition-colors text-[14px] md:text-[16px] inline-block hover:translate-x-1">Home</Link></li>
                                                                      <li><Link href="/projects" className="text-surface-variant hover:text-primary-container transition-colors text-[14px] md:text-[16px] inline-block hover:translate-x-1">Projects</Link></li>
                                                                      <li><Link href="/about" className="text-surface-variant hover:text-primary-container transition-colors text-[14px] md:text-[16px] inline-block hover:translate-x-1">About Me</Link></li>
                                                                      <li><Link href="/contact" className="text-surface-variant hover:text-primary-container transition-colors text-[14px] md:text-[16px] inline-block hover:translate-x-1">Contact</Link></li>
                                                            </ul>
                                                  </div>

                                                  {/* Resources */}
                                                  <div>
                                                            <h5 className="text-surface font-bold uppercase tracking-widest text-[12px] md:text-[14px] mb-4 md:mb-6">Resources</h5>
                                                            <ul className="space-y-3 md:space-y-4">
                                                                      <li><Link href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors text-[14px] md:text-[16px] inline-block hover:translate-x-1">Github</Link></li>
                                                                      <li><Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors text-[14px] md:text-[16px] inline-block hover:translate-x-1">LinkedIn</Link></li>
                                                            </ul>
                                                  </div>

                                                  {/* ================= NEWSLETTER SECTION ================= */}
                                                  <div className="col-span-1 sm:col-span-2 md:col-span-1">
                                                            <h5 className="text-surface font-bold uppercase tracking-widest text-[12px] md:text-[14px] mb-4 md:mb-6">Stay Updated</h5>
                                                            <p className="text-surface-variant text-[14px] mb-4">Subscribe to get the latest tech insights.</p>

                                                            <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
                                                                      <div className="flex gap-2">
                                                                                <Input
                                                                                          value={email}
                                                                                          onChange={(e) => setEmail(e.target.value)}
                                                                                          disabled={isLoading || isSuccess}
                                                                                          className="bg-white/5 border border-white/10 rounded-lg px-4 h-[48px] md:h-[56px] text-surface focus-visible:ring-1 focus-visible:ring-primary-container w-full placeholder:text-surface/50 text-[14px] md:text-[16px]"
                                                                                          placeholder="Email"
                                                                                          type="email"
                                                                                          required
                                                                                />
                                                                                <Button
                                                                                          type="submit"
                                                                                          disabled={isLoading || isSuccess}
                                                                                          className={`px-5 md:px-6 h-[48px] md:h-[56px] rounded-lg transition-all shadow-md shrink-0 border-0 ${isSuccess
                                                                                                              ? "bg-green-600 hover:bg-green-600 text-white cursor-default"
                                                                                                              : "bg-primary-container text-on-primary-container hover:scale-105 cursor-pointer"
                                                                                                    }`}
                                                                                >
                                                                                          {isLoading ? (
                                                                                                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                                                                                          ) : isSuccess ? (
                                                                                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                                                                                          ) : (
                                                                                                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                                                                                          )}
                                                                                </Button>
                                                                      </div>

                                                                      {/* Success Message Text */}
                                                                      {isSuccess && (
                                                                                <span className="text-[12px] text-green-400 font-medium px-1 animate-in fade-in slide-in-from-top-1">
                                                                                          Thanks for subscribing!
                                                                                </span>
                                                                      )}
                                                            </form>

                                                  </div>
                                        </div>

                              </div>
                    </footer>
          );
}