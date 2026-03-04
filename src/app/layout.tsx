import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidkim.design"),
  title: "David Kim | UX/UI Designer",
  description:
    "Portfólio de David Kim, UX/UI Designer com experiência em branding, design digital e produtos.",
  keywords: [
    "David Kim",
    "UX/UI Designer",
    "UX/UI",
    "Portfolio",
    "UI Design",
    "UX Design",
  ],
  openGraph: {
    title: "David Kim | UX/UI Designer",
    description:
      "Portfólio com foco em UX/UI, branding e design digital por David Kim.",
    type: "website",
    url: "https://davidkim.design",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Kim | UX/UI Designer",
    description:
      "Portfólio com foco em UX/UI, branding e design digital por David Kim.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
