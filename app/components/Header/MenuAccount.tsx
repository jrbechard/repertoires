"use client";

import { ChevronDown } from "lucide-react";
import { usePrefs } from "../Prefs";
import Segmented from "../Segmented";

type Props = { open: boolean; onToggle: () => void };

export default function MenuAccount({ open, onToggle }: Props) {
    const { theme, setTheme, lang, setLang } = usePrefs();

    return (
        <div className="relative hidden desk:block">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                aria-haspopup="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-on-band/15 text-xs font-semibold text-on-band hover:bg-on-band/25"
            >
                JR
            </button>

            {open && (
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
    );
}