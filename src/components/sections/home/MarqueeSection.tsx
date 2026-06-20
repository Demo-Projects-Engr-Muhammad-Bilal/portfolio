export default function MarqueeSection() {
          return (
                    <section className="py-20 md:py-30 relative overflow-hidden z-20 flex items-center justify-center">

                              {/* Inline style for guaranteed animation without messing with config files */}
                              <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee-scroll 20s linear infinite;
        }
      `}</style>

                              {/* The Diagonal Strip */}
              <div className="absolute transform -skew-y-[5deg] w-[150%] md:w-[120%] py-4 md:py-6 bg-primary-container shadow-2xl border-y border-white/10 flex items-center overflow-hidden">

                                        {/* Animated Text Container */}
                                        <div className="animate-marquee">
                                                  {/* We repeat the text twice so the loop is seamless */}
                                                  <div className="flex items-center">
                                                            <span className="text-white text-[20px] md:text-[32px] font-extrabold uppercase tracking-widest italic mx-4">
                                                                      POSTGRESQL ✦ PRISMA ✦ TAILWIND CSS ✦ TYPESCRIPT ✦ NEXT.JS ✦ REACT ✦ ASP.NET CORE ✦ FIREBASE ✦
                                                            </span>
                                                            <span className="text-white text-[20px] md:text-[32px] font-extrabold uppercase tracking-widest italic mx-4">
                                                                      POSTGRESQL ✦ PRISMA ✦ TAILWIND CSS ✦ TYPESCRIPT ✦ NEXT.JS ✦ REACT ✦ ASP.NET CORE ✦ FIREBASE ✦
                                                            </span>
                                                  </div>
                                                  <div className="flex items-center">
                                                            <span className="text-white text-[20px] md:text-[32px] font-extrabold uppercase tracking-widest italic mx-4">
                                                                      POSTGRESQL ✦ PRISMA ✦ TAILWIND CSS ✦ TYPESCRIPT ✦ NEXT.JS ✦ REACT ✦ ASP.NET CORE ✦ FIREBASE ✦
                                                            </span>
                                                            <span className="text-white text-[20px] md:text-[32px] font-extrabold uppercase tracking-widest italic mx-4">
                                                                      POSTGRESQL ✦ PRISMA ✦ TAILWIND CSS ✦ TYPESCRIPT ✦ NEXT.JS ✦ REACT ✦ ASP.NET CORE ✦ FIREBASE ✦
                                                            </span>
                                                  </div>
                                        </div>

                              </div>
                    </section>
          );
}