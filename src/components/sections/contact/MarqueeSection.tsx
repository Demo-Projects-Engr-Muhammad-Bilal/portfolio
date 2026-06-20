interface MarqueeProps {
          text?: string; // Optional prop banaya hai
}

export default function MarqueeSection({ text }: MarqueeProps) {
          // Agar prop pass nahi hoga, tou default homepage wala text use hoga
          const displayText = text || "POSTGRESQL ✦ PRISMA ✦ TAILWIND CSS ✦ TYPESCRIPT ✦ NEXT.JS ✦ REACT ✦ ASP.NET CORE ✦ FIREBASE ✦ ";

          return (
                    <section className="py-20 md:py-32 relative overflow-hidden z-20 flex items-center justify-center">
                              <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee-scroll 70s linear infinite;
        }
      `}</style>

                              <div className="absolute transform -skew-y-[3deg] md:-skew-y-[5deg] w-[150%] md:w-[120%] py-4 md:py-6 bg-primary-container shadow-2xl border-y border-white/10 flex items-center overflow-hidden">
                                        <div className="animate-marquee">
                                                  <div className="flex items-center">
                                                            <span className="text-white text-[14px] md:text-[25px] font-light tracking-widest mx-4">
                                                                      {displayText}
                                                            </span>
                                                            <span className="text-white text-[14px] md:text-[25px] uppercase font-light  tracking-widest mx-4">
                                                                      {displayText}
                                                            </span>
                                                  </div>
                                                  <div className="flex items-center">
                                                            <span className="text-white text-[14px] md:text-[25px] uppercase font-light  tracking-widest mx-4">
                                                                      {displayText}
                                                            </span>
                                                            <span className="text-white text-[14px] md:text-[25px] uppercase font-light  tracking-widest mx-4">
                                                                      {displayText}
                                                            </span>
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
}