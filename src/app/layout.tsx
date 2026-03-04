import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import en from "../../locales/en.json";
import { I18nProvider } from "@/i18n/I18nProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidkim.design"),
  title: en.meta.title,
  description: en.meta.description,
  keywords: en.meta.keywords,
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    type: "website",
    url: "https://davidkim.design",
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.title,
    description: en.meta.description,
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
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
