import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFAB from "@/components/shared/WhatsAppFAB"; // WhatsApp FAB import kar liya
import { Toaster } from "sonner";
import { PortfolioProvider } from "@/lib/PortfolioContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Muhammad Bilal - Full-Stack Developer",
  description: "High-performance software engineering portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins bg-background text-on-background antialiased relative">
        <PortfolioProvider>
          <Navbar />

          {children}

          <Footer />

          {/* Global WhatsApp Button: Har page par nazar aayega */}
          <WhatsAppFAB />
          <Toaster position="bottom-right" richColors />
        </PortfolioProvider>
      </body>
    </html>
  );
}