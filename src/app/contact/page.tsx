"use client";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import MarqueeSection from "@/components/sections/contact/MarqueeSection";
import { useContactPageData } from "@/lib/PortfolioContext";

export default function ContactPage() {
          const contactPage = useContactPageData();

          return (
                    <main className="min-h-screen bg-background mt-36">
                              {/* Hero Section */}
                              <ContactHero data={contactPage.hero} />

                              {/* 2-Column Form & Details Section */}
                              <ContactForm info={contactPage.info} />

                              {/* Reused Marquee with Custom Text */}
                              <MarqueeSection text={contactPage.marqueeText} />
                    </main>
          );
}
