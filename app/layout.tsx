import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import NavTabs from "./components/Nav/NavTabs";
import Footer from "./components/Footer";
import ThemeScript from "./components/ThemeScript";
import CanvasTint from "./components/CanvasTint";
import { PrefsProvider } from "./components/Prefs";

const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
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
      <body className="min-h-screen flex flex-col">
        <PrefsProvider>
          <CanvasTint />
          <Header />
          <NavTabs />
          <main className="mx-auto w-full max-w-shell flex-1 px-4 py-6">
            {children}
          </main>
          <Footer />
        </PrefsProvider>
      </body>
    </html>
  );
}
