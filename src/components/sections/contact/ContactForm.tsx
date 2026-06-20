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
                                                  <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-outline-variant/30 hover:shadow-[0px_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                                                            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">

                                                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                                <div className="space-y-3 group">
                                                                                          <Label htmlFor="name" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary-container transition-colors">
                                                                                                    Name
                                                                                          </Label>
                                                                                          <Input
                                                                                                    id="name"
                                                                                                    name="name"
                                                                                                    placeholder="Abdul Wajid"
                                                                                                    type="text"
                                                                                                    required
                                                                                                    className="px-6 py-6 rounded-xl border-secondary-container bg-surface focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-0 transition-all placeholder:text-tertiary-container text-[16px]"
                                                                                          />
                                                                                </div>

                                                                                <div className="space-y-3 group">
                                                                                          <Label htmlFor="email" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary-container transition-colors">
                                                                                                    Email Address
                                                                                          </Label>
                                                                                          <Input
                                                                                                    id="email"
                                                                                                    name="email"
                                                                                                    placeholder="abdul@example.com"
                                                                                                    type="email"
                                                                                                    required
                                                                                                    className="px-6 py-6 rounded-xl border-secondary-container bg-surface focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-0 transition-all placeholder:text-tertiary-container text-[16px]"
                                                                                          />
                                                                                </div>
                                                                      </div>

                                                                      {/* Humne user wale subject box ka name "user_subject" kar diya hai
                  taake Web3Forms isay email ka main subject bananay ke bajaye body mein daal de */}
                                                                      <div className="space-y-3 group">
                                                                                <Label htmlFor="user_subject" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary-container transition-colors">
                                                                                          Subject
                                                                                </Label>
                                                                                <Input
                                                                                          id="user_subject"
                                                                                          name="user_subject"
                                                                                          placeholder="Project Inquiry"
                                                                                          type="text"
                                                                                          required
                                                                                          className="px-6 py-6 rounded-xl border-secondary-container bg-surface focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-0 transition-all placeholder:text-tertiary-container text-[16px]"
                                                                                />
                                                                      </div>

                                                                      <div className="space-y-3 group flex-grow flex flex-col">
                                                                                <Label htmlFor="message" className="text-[14px] font-semibold text-secondary group-focus-within:text-primary-container transition-colors">
                                                                                          Message
                                                                                </Label>
                                                                                <Textarea
                                                                                          id="message"
                                                                                          name="message"
                                                                                          placeholder="Tell me about your project..."
                                                                                          required
                                                                                          className="flex-grow min-h-[150px] px-6 py-4 rounded-xl border-secondary-container bg-surface focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-0 transition-all placeholder:text-tertiary-container resize-none text-[16px]"
                                                                                />
                                                                      </div>

                                                                      <Button
                                                                                type="submit"
                                                                                disabled={isSubmitting}
                                                                                className="group w-full md:w-auto bg-primary-container text-on-primary-container px-10 h-[56px] rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 hover:bg-primary-container/90 hover:shadow-lg transition-all duration-300 mt-4 text-[16px] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                                                                      >
                                                                                {isSubmitting ? (
                                                                                          <>
                                                                                                    Sending...
                                                                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                                                          </>
                                                                                ) : (
                                                                                          <>
                                                                                                    Send Message
                                                                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                                                                          </>
                                                                                )}
                                                                      </Button>

                                                            </form>
                                                  </div>

                                                  {/* Right Column: Dark Contact Info */}
                                                  <div className="bg-inverse-surface text-surface rounded-[24px] p-8 md:p-12 shadow-xl flex flex-col justify-between h-full relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                                                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl group-hover:bg-primary-container/20 transition-all"></div>

                                                            <div className="relative z-10">
                                                                      <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/5">
                                                                                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                                                                                <span className="text-[14px] font-semibold text-surface-bright">{info.status}</span>
                                                                      </div>

                                                                      <h2 className="text-[32px] md:text-[40px] font-bold mb-8 leading-[1.2]">Let's build something amazing together.</h2>

                                                                      <div className="space-y-8">
                                                                                <div className="flex items-start gap-4">
                                                                                          <div className="bg-primary-container/20 p-3 rounded-xl">
                                                                                                    <Mail className="w-6 h-6 text-primary-container" />
                                                                                          </div>
                                                                                          <div>
                                                                                                    <p className="text-[14px] font-semibold text-secondary-fixed-dim">Email</p>
                                                                                                    <a className="text-[20px] md:text-[24px] font-bold hover:text-primary-container transition-colors" href={`mailto:${info.email}`}>{info.email}</a>
                                                                                          </div>
                                                                                </div>

                                                                                <div className="flex items-start gap-4">
                                                                                          <div className="bg-primary-container/20 p-3 rounded-xl">
                                                                                                    <MapPin className="w-6 h-6 text-primary-container" />
                                                                                          </div>
                                                                                          <div>
                                                                                                    <p className="text-[14px] font-semibold text-secondary-fixed-dim">Location</p>
                                                                                                    <p className="text-[18px]">{info.location}</p>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>

                                                            <div className="mt-12 relative z-10">
                                                                      <p className="text-[14px] font-semibold text-secondary-fixed-dim mb-4">Follow the journey</p>
                                                                      <div className="flex gap-4">
                                                                                <a className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all duration-300" href="#">
                                                                                          <Code className="w-5 h-5" />
                                                                                </a>
                                                                                <a className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all duration-300" href="#">
                                                                                          <Share2 className="w-5 h-5" />
                                                                                </a>
                                                                                <a className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-all duration-300" href="#">
                                                                                          <AtSign className="w-5 h-5" />
                                                                                </a>
                                                                      </div>
                                                            </div>
                                                  </div>

                                        </div>

                                        {/* Bottom Row */}
                                        <div className="bg-surface-container-high rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left w-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-surface-variant/30">
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