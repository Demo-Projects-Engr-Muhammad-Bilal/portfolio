import Link from "next/link";

export default function WhatsAppFAB() {
          // Apna actual Pakistani WhatsApp number yahan likhein (Baghair + ke, aur 92 se shuru karein)
          const phoneNumber = "923703041266";

          // Jab koi click karega tou yeh default message WhatsApp par type ho jayega
          const message = "Hi Muhammad Bilal Khalid! I have a project idea and would like to discuss it with you.";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

          return (
                    <Link
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              // Fixed positioning: Mobile par thora chota aur Desktop par bara
                              className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
                              aria-label="Chat on WhatsApp"
                    >
                              {/* Official WhatsApp SVG Logo */}
                              <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 md:w-9 md:h-9 relative z-10"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                              >
                                        <path d="M12.031 0C5.395 0 .015 5.38.015 12.016c0 2.122.553 4.195 1.605 6.01L0 24l6.125-1.605a11.95 11.95 0 005.906 1.564h.005c6.634 0 12.013-5.38 12.013-12.015C24.049 5.38 18.666 0 12.031 0zM12.031 21.97h-.005a9.96 9.96 0 01-5.076-1.378l-.364-.216-3.774.99.998-3.682-.237-.377A9.96 9.96 0 012.015 12.016c0-5.525 4.494-10.02 10.016-10.02 5.524 0 10.013 4.495 10.013 10.02 0 5.526-4.489 10.02-10.013 10.02zm5.498-7.513c-.301-.151-1.782-.88-2.059-.98-.276-.1-.478-.151-.678.15-.2.302-.777.98-.953 1.18-.176.202-.353.227-.654.076-1.425-.717-2.616-1.597-3.626-3.308-.176-.301.176-.29.474-.881.1-.2.05-.377-.025-.528-.076-.151-.678-1.632-.928-2.235-.245-.589-.494-.509-.678-.518-.176-.008-.378-.01-.578-.01-.2 0-.528.075-.805.377-.277.302-1.055 1.03-1.055 2.515 0 1.485 1.08 2.92 1.231 3.121.15.201 2.128 3.254 5.155 4.557 2.052.88 2.656.754 3.158.629.503-.126 1.782-.73 2.033-1.433.252-.704.252-1.307.176-1.433-.076-.126-.277-.202-.578-.352z" />
                              </svg>

                              {/* Ping Animation Effect */}
                              <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30"></span>
                    </Link>
          );
}