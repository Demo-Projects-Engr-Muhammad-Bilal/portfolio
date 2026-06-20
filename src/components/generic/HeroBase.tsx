import Image from "next/image";
import { ReactNode } from "react";

interface HeroBaseProps {
          leftContent: ReactNode;
          floatingBadge?: ReactNode;
          imageUrl: string;
          imageAlt: string;
          heightClass?: string; // <-- Yeh naya prop add kiya hai parent control ke liye
}

export default function HeroBase({ leftContent, floatingBadge, imageUrl, imageAlt, heightClass }: HeroBaseProps) {

          // Agar parent ne heightClass pass ki hai tou wo use hogi, warna default homepage wali
          const sectionHeight = heightClass || "min-h-[90vh] md:min-h-[921px]";

          return (
                    <section className={`relative flex items-center pt-28 md:pt-12 pb-[var(--spacing-section-gap)] md:mt-5 overflow-hidden ${sectionHeight}`}>
                              <div className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 items-center w-full">

                                        {/* Left Content Column */}
                                        <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
                                                  {leftContent}
                                        </div>

                                        {/* Right Image Column */}
                                        <div className="order-1 md:order-2 flex justify-center relative mt-4 md:mt-0">

                                                  {/* Blurred Background Glow */}
                                                  <div className="absolute inset-0 bg-primary-container rounded-full opacity-70 blur-3xl transform -translate-y-10 scale-110"></div>

                                                  {/* Main Circular Image Box */}
                                                  <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[480px] md:h-[480px] rounded-full flex items-center justify-center overflow-hidden shadow-2xl md:ml-22 bg-primary-container backdrop-opacity-30">
                                                            <Image
                                                                      src={imageUrl}
                                                                      alt={imageAlt}
                                                                      fill
                                                                      className="object-cover"
                                                                      priority
                                                                      sizes="(max-width: 768px) 280px, 480px"
                                                            />
                                                  </div>

                                                  {/* Floating Badge */}
                                                  {floatingBadge && (
                                                            <div className="absolute -bottom-4 right-0 sm:-right-4 md:-bottom-6 md:right-12 z-10 transform scale-90 md:scale-100 origin-bottom-right">
                                                                      {floatingBadge}
                                                            </div>
                                                  )}

                                        </div>
                              </div>
                    </section>
          );
}