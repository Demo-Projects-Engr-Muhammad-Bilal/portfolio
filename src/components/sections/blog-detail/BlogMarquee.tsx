export default function BlogMarquee() {
          return (
                    <div className="relative transform -rotate-[3deg] scale-110 bg-primary-container py-4 mb-20 md:mb-32 shadow-xl border-y-4 border-primary overflow-hidden flex whitespace-nowrap">
                              <div className="animate-[marquee_20s_linear_infinite] flex whitespace-nowrap items-center w-max">
                                        {[...Array(4)].map((_, i) => (
                                                  <span key={i} className="font-bold text-[20px] md:text-[28px] text-white uppercase tracking-widest mx-4">
                                                            Innovate • Build • Scale • Kinetic • System • Performance • Future •
                                                  </span>
                                        ))}
                              </div>
                    </div>
          );
}