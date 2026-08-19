import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Repertoires",
  description: "A chord and lyrics app for songwriters and musicians",
  keywords: ["chords", "lyrics", "songwriting", "music", "musicians"],
  authors: [{ name: "Calico & Co" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
