"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

/**
 * Shared "Have a Project Idea? Let's Discuss" call-to-action block, used at
 * the bottom of Home, About, Projects, and Project Detail pages. This is an
 * exact extraction of the original home-about/ContactSection markup — no
 * className, copy, or structural changes.
 */
export default function CTASection() {
          const [email, setEmail] = useState("");
          const [isLoading, setIsLoading] = useState(false);
          const [isSuccess, setIsSuccess] = useState(false);

          const handleSubmit = async (e: React.FormEvent) => {
                    e.preventDefault();
                    if (!email) return;

                    setIsLoading(true);
                    setIsSuccess(false);

                    try {
                              await new Promise((resolve) => setTimeout(resolve, 1500));
                              setIsSuccess(true);
                              setEmail(""); 
                              setTimeout(() => {
                                        setIsSuccess(false);
                              }, 3000);

                    } catch (error) {
                              console.error("Submission failed:", error);
                    } finally {
                              setIsLoading(false);
                    }
          };

          return (
                    <section className="py-16 md:py-[var(--spacing-section-gap)]" id="contact">
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">

                                        {/* Mobile p-8, Desktop p-20 */}
                                        <div className="bg-inverse-surface rounded-[32px] md:rounded-[40px] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden">

                                                  {/* Background Glow */}
                                                  <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-container/20 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

                                                  <div className="relative z-10 max-w-2xl mx-auto">
                                                            {/* Mobile text 32px, Desktop 48px/56px */}
                                                            <h2 className="text-[32px] md:text-[56px] font-bold text-surface mb-6 md:mb-8 text-shadow-md leading-[1.2]">
                                                                      Have a Project Idea? <br /> Let's <span className="text-primary-container">Discuss</span>
                                                            </h2>

                                                            {/* Mobile text 16px, Desktop 18px */}
                                                            <p className="text-surface-variant text-[16px] md:text-[18px] mb-8 md:mb-12 leading-[1.6]">
                                                                      I'm currently available for freelance work and full-time opportunities. Send me a message and let's turn your vision into reality.
                                                            </p>

                                                            {/* Form - Flex-col on mobile, Flex-row on desktop */}
                                                            <form className="relative group max-w-lg mx-auto flex flex-col gap-2" onSubmit={handleSubmit}>
                                                                      <div className="flex flex-col md:flex-row gap-4 w-full">
                                                                                <Input
                                                                                          value={email}
                                                                                          onChange={(e) => setEmail(e.target.value)}
                                                                                          disabled={isLoading || isSuccess}
                                                                                          className="w-full bg-white/10 border-white/20 rounded-full px-6 md:px-8 py-6 md:py-7 text-surface placeholder:text-surface/40 focus-visible:ring-primary-container text-[14px] md:text-[16px]"
                                                                                          placeholder="Your email address"
                                                                                          type="email"
                                                                                          required
                                                                                />
                                                                                <Button
                                                                                          type="submit"
                                                                                          disabled={isLoading || isSuccess}
                                                                                          className={`font-bold px-10 h-[56px] rounded-full transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto border-0 ${isSuccess
                                                                                                              ? "bg-green-600 hover:bg-green-600 text-white cursor-default scale-100"
                                                                                                              : "bg-primary-container text-white hover:scale-105 active:scale-95 cursor-pointer"
                                                                                                    }`}
                                                                                >
                                                                                          {isLoading ? (
                                                                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                                                          ) : isSuccess ? (
                                                                                                    <>
                                                                                                              Sent
                                                                                                              <CheckCircle2 className="w-4 h-4 ml-1 shrink-0" />
                                                                                                    </>
                                                                                          ) : (
                                                                                                    <>
                                                                                                              Send
                                                                                                              <Send className="w-4 h-4 ml-1 shrink-0" />
                                                                                                    </>
                                                                                          )}
                                                                                </Button>
                                                                      </div>

                                                                      {/* Success Message Text */}
                                                                      {isSuccess && (
                                                                                <span className="text-[13px] text-green-400 font-medium px-4 text-center md:text-left animate-in fade-in slide-in-from-top-1 mt-1">
                                                                                          Thanks for reaching out! We'll be in touch shortly.
                                                                                </span>
                                                                      )}
                                                            </form>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
}