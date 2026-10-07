"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

/**
 * Shared "Have a Project Idea? Let's Discuss" call-to-action block, used at
 * the bottom of Home, About, Projects, and Project Detail pages. Styled as a dark clay panel.
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
      <div className="mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)]">
        <div className="clay-dark relative overflow-hidden rounded-[40px] p-8 text-center sm:p-10 md:rounded-[56px] md:p-20">
          <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -left-8 -top-8 size-28 rounded-full opacity-80" style={{ ["--c" as string]: "var(--accent-fill)", animationDuration: "8s" }} />
          <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -bottom-10 -right-6 size-32 rounded-[36px] opacity-80" style={{ ["--c" as string]: "var(--tint-lavender)", animationDuration: "10s", animationDelay: "1.5s" }} />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="clay-sm clay-pill mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 text-[12px] font-semibold text-inverse-on-surface md:text-[13px]">
              <span className="clay-accent size-2.5 rounded-full" aria-hidden="true" />
              Contact
            </p>

            <h2 className="mb-6 font-display text-[36px] font-semibold leading-[1.08] text-inverse-on-surface md:mb-8 md:text-[68px]">
              Have a project idea? <br /> Let&apos;s <span className="text-[var(--accent-fill)]">discuss.</span>
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-[15px] leading-[1.7] text-inverse-on-surface/80 md:mb-12 md:text-[17px]">
              I&apos;m currently available for freelance work and full-time opportunities. Send me a message and let&apos;s turn your vision into reality.
            </p>

            <form className="mx-auto flex max-w-lg flex-col gap-2" onSubmit={handleSubmit}>
              <div className="flex w-full flex-col gap-4 md:flex-row">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isSuccess}
                  className="h-14 w-full px-6 text-[14px] text-inverse-on-surface placeholder:text-inverse-on-surface/60 md:text-[15px]"
                  placeholder="Your email address"
                  type="email"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading || isSuccess}
                  variant={isSuccess ? "secondary" : "default"}
                  className={`h-14 w-full gap-2 px-8 sm:w-auto ${isSuccess ? "cursor-default text-[var(--accent-fill)]" : ""}`}
                >
                  {isLoading ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : isSuccess ? (
                    <>
                      Sent
                      <CheckCircle2 className="ml-1 size-4 shrink-0" />
                    </>
                  ) : (
                    <>
                      Send
                      <Send className="ml-1 size-4 shrink-0" />
                    </>
                  )}
                </Button>
              </div>

              {isSuccess && (
                <span className="mt-2 px-1 text-center text-[13px] font-semibold text-[var(--accent-fill)] animate-in fade-in slide-in-from-top-1">
                  Thanks for reaching out! We&apos;ll be in touch shortly.
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
