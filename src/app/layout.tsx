import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include weights you need
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gabriel sha",
  icons: {
    icon: "/g.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-warm text-charcoal dark:bg-charcoal-800 dark:text-offwhite`}
      >
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
