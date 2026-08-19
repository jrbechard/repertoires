import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ThemeScript from "./components/ThemeScript";
import { PrefsProvider } from "./components/Prefs";

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">
        <PrefsProvider>
          <Header />
          <main className="mx-auto w-full max-w-shell px-4 py-6">
            {children}
          </main>
        </PrefsProvider>
      </body>
    </html>
  );
}
