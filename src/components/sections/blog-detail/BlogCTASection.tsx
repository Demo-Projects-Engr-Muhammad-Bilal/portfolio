import { Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * CTA block used at the bottom of the blog detail page: a dark clay panel with
 * a side-by-side layout (text left, email form right).
 */
export default function BlogCTASection() {
  return (
    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] mb-20 md:mb-32">
      <div className="clay-dark relative overflow-hidden rounded-[40px] p-8 md:rounded-[56px] md:p-16">
        <span aria-hidden="true" className="clay-blob clay-float pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-80" style={{ ["--c" as string]: "var(--accent-fill)", animationDuration: "9s" }} />
        <div className="pointer-events-none absolute bottom-0 right-0 p-8 opacity-10">
          <Sparkles className="size-40 text-inverse-on-surface" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="mb-4 font-display text-[32px] font-semibold leading-tight text-inverse-on-surface md:text-[48px]">
              Have a Project Idea? <br className="hidden md:block" />
              <span className="text-[var(--accent-fill)]">Let&apos;s Discuss</span>
            </h2>
            <p className="text-[16px] leading-relaxed text-inverse-on-surface/75 md:text-[18px]">
              Ready to take your digital products to the next level? Join the kinetic movement and let&apos;s build something extraordinary together.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <Input
                className="h-14 w-full px-6 text-inverse-on-surface placeholder:text-inverse-on-surface/60 sm:w-[320px]"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button type="submit" size="lg" className="h-14 w-full gap-2 px-10 sm:w-auto">
                Send Message
                <Send className="ml-1 size-4 shrink-0" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
