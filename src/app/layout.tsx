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
  title: "David Kim | Product Designer & UX/UI",
  description:
    "Premium portfolio for David Kim, a UX/UI and Product Designer crafting elegant digital products.",
  keywords: [
    "David Kim",
    "Product Designer",
    "UX/UI",
    "Portfolio",
    "UI Design",
    "UX Design",
  ],
  openGraph: {
    title: "David Kim | Product Designer & UX/UI",
    description:
      "Portfolio showcasing UX/UI, product strategy, and visual systems by David Kim.",
    type: "website",
    url: "https://davidkim.design",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Kim | Product Designer & UX/UI",
    description:
      "Portfolio showcasing UX/UI, product strategy, and visual systems by David Kim.",
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
