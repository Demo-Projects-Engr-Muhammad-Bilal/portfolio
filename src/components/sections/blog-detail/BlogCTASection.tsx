import { Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * CTA block used at the bottom of the blog detail page. Visually distinct
 * from the generic CTASection (side-by-side layout, different glow/radius),
 * so it is kept as its own component rather than merged with it — this is
 * an exact extraction of the original inline JSX from blog/[id]/page.tsx.
 */
export default function BlogCTASection() {
          return (
                    <section className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] mb-20 md:mb-32">
                              <div className="bg-inverse-surface rounded-[24px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                                        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                                                  <Sparkles className="w-48 h-48 text-white" />
                                        </div>

                                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                                                  <div className="max-w-xl text-center md:text-left">
                                                            <h2 className="text-white text-[32px] md:text-[48px] font-bold mb-4 leading-tight">
                                                                      Have a Project Idea? <br className="hidden md:block" /><span className="text-surface-variant">Let's Discuss</span>
                                                            </h2>
                                                            <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed">
                                                                      Ready to take your digital products to the next level? Join the kinetic movement and let's build something extraordinary together.
                                                            </p>
                                                  </div>

                                                  <div className="w-full md:w-auto">
                                                            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                                                                      <input
                                                                                className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-6 py-4 rounded-full focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none w-full sm:w-[320px] transition-all"
                                                                                placeholder="Enter your email"
                                                                                type="email"
                                                                                required
                                                                      />
                                                                      <Button type="submit" className="bg-primary-container text-white font-bold px-10 h-[56px] rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto">
                                                                                Send Message
                                                                                <Send className="w-4 h-4 ml-1 shrink-0" />
                                                                      </Button>
                                                            </form>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
}
