import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://davidkim.design"),
  title: {
    default: "David Kim — UX/UI & Product Designer",
    template: "%s | David Kim",
  },
  description:
    "David Kim is a UX/UI and Product Designer based in San Francisco, crafting digital experiences that blend beauty with purpose.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Product Designer",
    "San Francisco",
    "Portfolio",
    "Design Systems",
    "Figma",
  ],
  authors: [{ name: "David Kim" }],
  creator: "David Kim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidkim.design",
    siteName: "David Kim",
    title: "David Kim — UX/UI & Product Designer",
    description:
      "UX/UI and Product Designer based in San Francisco, crafting digital experiences that blend beauty with purpose.",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Kim — UX/UI & Product Designer",
    description:
      "UX/UI and Product Designer based in San Francisco, crafting digital experiences that blend beauty with purpose.",
    creator: "@davidkim",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <PageTransition>
            <main id="main-content">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
