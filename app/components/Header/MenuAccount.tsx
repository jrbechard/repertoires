"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePrefs } from "../Prefs";
import Segmented from "../Segmented";
import Avatar from "../Avatar";
import { CURRENT_USER } from "../../lib/user";

type Props = { open: boolean; onToggle: () => void; onClose: () => void };

export default function MenuAccount({ open, onToggle, onClose }: Props) {
    const { theme, setTheme, lang, setLang } = usePrefs();

    return (
        <div className="relative hidden desk:block">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                aria-haspopup="true"
                aria-label="Account"
                className="group flex rounded-full"
            >
                <Avatar className="h-8 w-8 bg-on-band/15 text-xs text-on-band group-hover:bg-on-band/25" />
            </button>

            {open && (
                <div className="absolute right-0 top-11 w-72 rounded-lg border border-foreground/10 bg-panel p-2 shadow-lg">
                    <Link
                        href="/account"
                        onClick={onClose}
                        className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-foreground/5"
                    >
                        <Avatar className="h-12 w-12 bg-foreground/15 text-base text-foreground" />
                        <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold text-foreground">
                                {CURRENT_USER.name}
                            </span>
                            <span className="block truncate text-sm text-foreground/60">
                                @{CURRENT_USER.handle}
                            </span>
                        </span>
                        <ChevronRight
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-foreground/40"
                        />
                    </Link>

                    <hr className="my-2 border-foreground/10" />

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