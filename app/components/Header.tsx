"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, Search, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { usePrefs } from "./Prefs";
import Segmented from "./Segmented";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme, lang, setLang } = usePrefs();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!menuOpen) return;

        function onPointerDown(e: PointerEvent) {
            if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
        }
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setMenuOpen(false);
        }

        document.addEventListener("pointerdown", onPointerDown, true);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown, true);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [menuOpen]);

    return (
        <header className="flex items-center justify-between bg-band px-4 py-4">
            <Link href="/" className="flex items-center -m-2 p-2">
                <Logo className="h-8 w-auto" />
            </Link>

            <div className="flex items-center gap-4">
                <span className="rounded-full border border-on-band/30 px-3 py-1 text-xs font-semibold text-on-band">
                    GUITAR
                </span>
                <button
                    type="button"
                    aria-label="Notifications"
                    className="-m-2 rounded-full p-2 text-on-band hover:bg-on-band/15"
                >
                    <Bell className="h-4.5 w-4.5" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    aria-label="Search"
                    className="-m-2 rounded-full p-2 text-on-band hover:bg-on-band/15"
                >
                    <Search className="h-4.5 w-4.5" aria-hidden="true" />
                </button>

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-haspopup="true"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-on-band/15 text-xs font-semibold text-on-band hover:bg-on-band/25"
                    >
                        JR
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 top-11 w-72 rounded-lg border border-foreground/10 bg-panel p-2 shadow-lg">
                            <div className="flex items-center justify-between px-2 py-2">
                                <span className="text-sm text-foreground">Language</span>
                                <div className="relative h-7 w-40">
                                    <select
                                        value={lang}
                                        onChange={(e) => setLang(e.target.value as "en" | "fr")}
                                        aria-label="Language"
                                        className="h-7 w-full appearance-none rounded border border-foreground/20 bg-panel pl-1.5 pr-6 text-xs text-foreground"
                                    >
                                        <option value="en" className="bg-panel text-foreground">EN</option>
                                        <option value="fr" className="bg-panel text-foreground">FR</option>
                                    </select>
                                    <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/60" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between px-2 py-2">
                                <span className="text-sm text-foreground">Theme</span>
                                <Segmented
                                    ariaLabel="Theme"
                                    value={theme}
                                    onChange={setTheme}
                                    options={[
                                        { value: "auto", label: "Auto" },
                                        { value: "light", label: "Light" },
                                        { value: "dark", label: "Dark" },
                                    ] as const}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}