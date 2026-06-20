export default function BlogMarquee() {
          return (
                    <div className="relative transform -rotate-[3deg] scale-110 bg-primary-container py-4 mb-20 md:mb-32 shadow-xl border-y-4 border-primary overflow-hidden flex whitespace-nowrap">

                              {/* Marquee Motion Wrapper */}
                              <div className="animate-marquee flex whitespace-nowrap items-center w-max">
                                        {/* Repeat exactly to create infinite illusion */}
                                        {[...Array(4)].map((_, i) => (
                                                  <span key={i} className="font-bold text-[24px] md:text-[32px] text-white uppercase tracking-widest mx-4">
                                                            Innovation • Design • Code • Scale • Security •
                                                  </span>
                                        ))}
                              </div>

                              {/* Global Style specifically for marquee keyframes */}
                              <style dangerouslySetInnerHTML={{
                                        __html: `
        @keyframes custom-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: custom-marquee 20s linear infinite;
        }
      `}} />
                    </div>
          );
}