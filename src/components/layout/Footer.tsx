import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div>
            <Link
              href="/"
              className="font-serif text-lg font-bold text-[var(--foreground)] hover:opacity-70 transition-opacity"
            >
              David Kim
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] mt-1">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {Object.entries(socialIcons).map(([name, Icon]) => {
              const href =
                personalInfo.social[
                  name.toLowerCase() as keyof typeof personalInfo.social
                ];
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${personalInfo.name} on ${name}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              );
            })}
            <a
              href={personalInfo.social.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${personalInfo.name} on Dribbble`}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-all duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 0 0-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0 1 12 3.475zm-3.633.803a53.896 53.896 0 0 1 3.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 0 1 4.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 0 1-2.19-5.705zM12 20.547a8.482 8.482 0 0 1-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 0 1 1.823 6.475 8.4 8.4 0 0 1-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 0 1-3.655 5.715z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--muted-foreground)]">
          <p>© {year} David Kim. All rights reserved.</p>
          <p>
            Available for freelance work —{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 hover:text-[var(--foreground)] transition-colors"
            >
              Let&apos;s talk
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
