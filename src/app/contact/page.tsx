"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    name: "LinkedIn",
    href: personalInfo.social.linkedin,
    icon: Linkedin,
    handle: "in/davidkim",
  },
  {
    name: "GitHub",
    href: personalInfo.social.github,
    icon: Github,
    handle: "davidkim",
  },
  {
    name: "Twitter / X",
    href: personalInfo.social.twitter,
    icon: Twitter,
    handle: "@davidkim",
  },
  {
    name: "Dribbble",
    href: personalInfo.social.dribbble,
    icon: ({ size, ...props }: { size?: number; className?: string }) => (
      <svg
        width={size ?? 20}
        height={size ?? 20}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z" />
      </svg>
    ),
    handle: "davidkim",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]",
    "text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]",
    "focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent",
    "transition-all duration-200 text-sm"
  );

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 lg:py-32 border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-medium tracking-widest uppercase text-[var(--muted-foreground)] block mb-4">
              Get In Touch
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[var(--foreground)] leading-tight mb-6">
              Let&apos;s work
              <br />
              together.
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-lg">
              Have a project in mind? I&apos;d love to hear about it. Send me a
              message and I&apos;ll get back to you within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-24">
            {/* Form */}
            <FadeIn>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-24"
                >
                  <div
                    className="w-16 h-16 rounded-full bg-[var(--highlight)] flex items-center justify-center mb-6"
                    aria-hidden="true"
                  >
                    <Send size={24} className="text-[#0a0a0a]" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[var(--foreground)] mb-3">
                    Message sent!
                  </h2>
                  <p className="text-[var(--muted-foreground)]">
                    Thanks for reaching out. I&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[var(--foreground)] mb-2"
                      >
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, name: e.target.value }))
                        }
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[var(--foreground)] mb-2"
                      >
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState((s) => ({
                            ...s,
                            email: e.target.value,
                          }))
                        }
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[var(--foreground)] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      autoComplete="off"
                      placeholder="What's this about?"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          subject: e.target.value,
                        }))
                      }
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--foreground)] mb-2"
                    >
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({
                          ...s,
                          message: e.target.value,
                        }))
                      }
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.15} direction="left">
              <div className="space-y-8">
                {/* Contact info */}
                <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4">
                  <h2 className="font-serif text-xl font-bold text-[var(--foreground)]">
                    Contact Info
                  </h2>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail
                      size={16}
                      className="text-[var(--muted-foreground)]"
                      aria-hidden="true"
                    />
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin
                      size={16}
                      className="text-[var(--muted-foreground)]"
                      aria-hidden="true"
                    />
                    <span className="text-[var(--muted-foreground)]">
                      {personalInfo.location}
                    </span>
                  </div>
                  {personalInfo.available && (
                    <div className="flex items-center gap-2 text-sm text-emerald-500">
                      <span
                        className="w-2 h-2 rounded-full bg-emerald-500"
                        aria-hidden="true"
                      />
                      Available for new projects
                    </div>
                  )}
                </div>

                {/* Social links */}
                <div className="space-y-3">
                  <h2 className="font-serif text-xl font-bold text-[var(--foreground)]">
                    Find me online
                  </h2>
                  {socialLinks.map(({ name, href, icon: Icon, handle }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] hover:border-[var(--foreground)] hover:bg-[var(--surface)] transition-all duration-200 group"
                    >
                      <Icon
                        size={18}
                        className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors"
                      />
                      <div>
                        <div className="text-sm font-medium text-[var(--foreground)]">
                          {name}
                        </div>
                        <div className="text-xs text-[var(--muted-foreground)]">
                          {handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
