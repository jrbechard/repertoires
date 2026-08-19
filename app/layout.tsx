import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="mx-auto w-full max-w-[660px] px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
