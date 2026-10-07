"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Code, Share2, AtSign, Clock, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { ContactInfo } from "@/lib/types";

interface ContactFormProps {
          info: ContactInfo;
}

export default function ContactForm({ info }: ContactFormProps) {
          const [isSubmitting, setIsSubmitting] = useState(false);

          async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
                    event.preventDefault();
                    setIsSubmitting(true);

                    // 1. Form ka reference pehle hi save kar lein taake baad mein crash na ho
                    const formElement = event.currentTarget;
                    const formData = new FormData(formElement);

                    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

                    if (!accessKey) {
                              toast.error("Form access key is missing. Please check your .env file.");
                              setIsSubmitting(false);
                              return;
                    }

                    formData.append("access_key", accessKey);
                    formData.append("subject", "New Contact from DevPortfolio");
                    formData.append("from_name", "Portfolio Website");

                    try {
                              const response = await fetch("https://api.web3forms.com/submit", {
                                        method: "POST",
                                        body: formData,
                                        headers: {
                                                  Accept: "application/json",
                                        },
                              });

                              const data = await response.json();

                              if (response.ok && data.success) {
                                        toast.success("Message sent successfully! I'll get back to you soon.");
                                        // 2. Ab hum saved reference use kar rahay hain reset ke liye
                                        formElement.reset();
                              } else {
                                        toast.error(data.message || "Failed to send message. Please try again.");
                              }
                    } catch (error) {
                              console.error("Form Submission Error:", error);
                              // Ab yeh block tabhi chalega jab sach mein internet ka masla hoga
                              toast.error("Failed to send message. Please check your internet connection.");
                    } finally {
                              setIsSubmitting(false);
                    }
          }

          return (
                    <section className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto pb-[var(--spacing-section-gap)]">
                              <div className="flex flex-col gap-8 lg:gap-12">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                                                  {/* Left Column: Shadcn Contact Form */}
                                                  <div className="clay-lg flex h-full flex-col p-8 md:p-12">
                                                            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">

                                                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                                <div className="space-y-3 group">
                                                                                          <Label htmlFor="name" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary transition-colors">
                                                                                                    Name
                                                                                          </Label>
                                                                                          <Input
                                                                                                    id="name"
                                                                                                    name="name"
                                                                                                    placeholder="Abdul Wajid"
                                                                                                    type="text"
                                                                                                    required
                                                                                                    className="h-14 px-6 text-[16px]"
                                                                                          />
                                                                                </div>

                                                                                <div className="space-y-3 group">
                                                                                          <Label htmlFor="email" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary transition-colors">
                                                                                                    Email Address
                                                                                          </Label>
                                                                                          <Input
                                                                                                    id="email"
                                                                                                    name="email"
                                                                                                    placeholder="abdul@example.com"
                                                                                                    type="email"
                                                                                                    required
                                                                                                    className="h-14 px-6 text-[16px]"
                                                                                          />
                                                                                </div>
                                                                      </div>

                                                                      {/* Humne user wale subject box ka name "user_subject" kar diya hai
                  taake Web3Forms isay email ka main subject bananay ke bajaye body mein daal de */}
                                                                      <div className="space-y-3 group">
                                                                                <Label htmlFor="user_subject" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary transition-colors">
                                                                                          Subject
                                                                                </Label>
                                                                                <Input
                                                                                          id="user_subject"
                                                                                          name="user_subject"
                                                                                          placeholder="Project Inquiry"
                                                                                          type="text"
                                                                                          required
                                                                                          className="h-14 px-6 text-[16px]"
                                                                                />
                                                                      </div>

                                                                      <div className="space-y-3 group flex-grow flex flex-col">
                                                                                <Label htmlFor="message" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary transition-colors">
                                                                                          Message
                                                                                </Label>
                                                                                <Textarea
                                                                                          id="message"
                                                                                          name="message"
                                                                                          placeholder="Tell me about your project..."
                                                                                          required
                                                                                          className="min-h-[150px] flex-grow resize-none px-6 py-4 text-[16px]"
                                                                                />
                                                                      </div>

                                                                      <Button
                                                                                type="submit"
                                                                                disabled={isSubmitting}
                                                                                className="mt-4 h-14 w-full gap-2 px-10 text-[16px] disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                                                                      >
                                                                                {isSubmitting ? (
                                                                                          <>
                                                                                                    Sending...
                                                                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                                                          </>
                                                                                ) : (
                                                                                          <>
                                                                                                    Send Message
                                                                                                    <ArrowRight className="size-5 transition-transform group-hover/button:translate-x-1" />
                                                                                          </>
                                                                                )}
                                                                      </Button>

                                                            </form>
                                                  </div>

                                                  {/* Right Column: Dark Contact Info */}
                                                  <div className="clay-dark group relative flex h-full flex-col justify-between overflow-hidden rounded-[44px] p-8 md:p-12">
                                                            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[var(--accent-fill)]/10 blur-3xl transition-all group-hover:bg-[var(--accent-fill)]/20"></div>

                                                            <div className="relative z-10">
                                                                      <div className="clay-sm clay-pill mb-8 inline-flex items-center gap-2 px-4 py-2">
                                                                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                                                                <span className="text-[14px] font-semibold text-inverse-on-surface">{info.status}</span>
                                                                      </div>

                                                                      <h2 className="font-display text-[32px] md:text-[40px] font-semibold mb-8 leading-[1.2]">Let&apos;s build something amazing together.</h2>

                                                                      <div className="space-y-8">
                                                                                <div className="flex items-start gap-4">
                                                                                          <div className="clay-sm flex size-12 shrink-0 items-center justify-center rounded-[18px]">
                                                                                                    <Mail className="size-6 text-primary" />
                                                                                          </div>
                                                                                          <div>
                                                                                                    <p className="text-[14px] font-semibold text-inverse-on-surface/60">Email</p>
                                                                                                    <a className="block break-all text-[16px] md:text-[20px] font-bold hover:text-primary transition-colors" href={`mailto:${info.email}`}>{info.email}</a>
                                                                                          </div>
                                                                                </div>

                                                                                <div className="flex items-start gap-4">
                                                                                          <div className="clay-sm flex size-12 shrink-0 items-center justify-center rounded-[18px]">
                                                                                                    <MapPin className="size-6 text-primary" />
                                                                                          </div>
                                                                                          <div>
                                                                                                    <p className="text-[14px] font-semibold text-inverse-on-surface/60">Location</p>
                                                                                                    <p className="text-[18px]">{info.location}</p>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>

                                                            <div className="mt-12 relative z-10">
                                                                      <p className="text-[14px] font-semibold text-inverse-on-surface/60 mb-4">Follow the journey</p>
                                                                      <div className="flex gap-4">
                                                                                <a className="clay-sm clay-hover clay-pill flex size-12 items-center justify-center transition-colors hover:[background-color:var(--accent-fill)] hover:text-[var(--on-accent-fill)]" href="#">
                                                                                          <Code className="w-5 h-5" />
                                                                                </a>
                                                                                <a className="clay-sm clay-hover clay-pill flex size-12 items-center justify-center transition-colors hover:[background-color:var(--accent-fill)] hover:text-[var(--on-accent-fill)]" href="#">
                                                                                          <Share2 className="w-5 h-5" />
                                                                                </a>
                                                                                <a className="clay-sm clay-hover clay-pill flex size-12 items-center justify-center transition-colors hover:[background-color:var(--accent-fill)] hover:text-[var(--on-accent-fill)]" href="#">
                                                                                          <AtSign className="w-5 h-5" />
                                                                                </a>
                                                                      </div>
                                                            </div>
                                                  </div>

                                        </div>

                                        {/* Bottom Row */}
                                        <div className="clay flex w-full flex-col items-center justify-center gap-6 rounded-[32px] p-8 text-center md:flex-row md:p-10 md:text-left">
                                                  <Clock className="w-10 h-10 md:w-12 md:h-12 text-primary shrink-0" />
                                                  <div>
                                                            <p className="text-[16px] md:text-[18px] font-bold text-primary uppercase tracking-widest mb-1">Fast Response</p>
                                                            <p className="text-secondary text-[16px] md:text-[18px]">{info.responseTime}</p>
                                                  </div>
                                        </div>

                              </div>
                    </section>
          );
}