import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import NavTabs from "./components/Nav/NavTabs";
import NavBar from "./components/Nav/NavBar";
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

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
        <body className="flex min-h-screen flex-col pb-[calc(3.5rem+env(safe-area-inset-bottom))] desk:pb-0">
          <PrefsProvider>
            <CanvasTint />
            <Header />
            <NavTabs />
            <main className="mx-auto w-full max-w-shell flex-1 px-4 py-6">
              {children}
            </main>
            <Footer />
            <NavBar />
          </PrefsProvider>
        </body>
    </html>
  );
}
