"use client";

import { useState } from "react";
import { Bell, Search } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState("en");

  return (
    <header className="flex items-center justify-between bg-black px-3 py-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white font-bold text-black">
        R
      </div>

      <div className="flex items-center gap-4">
        <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white">
          GUITAR
        </span>
        <Bell className="h-4.5 w-4.5 text-white" />
        <Search className="h-4.5 w-4.5 text-white" />

        <div className="relative">
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-white"
          >
            JR
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-11 w-48 rounded-lg bg-white p-2 shadow-lg">
              <div className="flex items-center justify-between px-2 py-2">
                <span className="text-sm text-black">Language</span>
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  className="rounded border border-gray-300 px-1 py-0.5 text-sm text-black"
                >
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
              </div>

              <div className="flex items-center justify-between px-2 py-2">
                <span className="text-sm text-black">Theme</span>
                <button
                  onClick={() =>
                    setTheme((t) => (t === "light" ? "dark" : "light"))
                  }
                  className="rounded border border-gray-300 px-2 py-0.5 text-sm text-black"
                >
                  {theme === "light" ? "Light" : "Dark"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}