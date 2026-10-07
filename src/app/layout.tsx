import type { Metadata } from "next";
import { Fredoka, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFAB from "@/components/shared/WhatsAppFAB"; // WhatsApp FAB import kar liya
import { Toaster } from "sonner";
import { PortfolioProvider } from "@/lib/PortfolioContext";
import ThemeProvider from "@/components/shared/ThemeProvider";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${fredoka.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <PortfolioProvider>
            <Navbar />

            {children}

            <Footer />

            {/* Global WhatsApp Button: Har page par nazar aayega */}
            <WhatsAppFAB />
            <Toaster position="bottom-right" richColors />
          </PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}