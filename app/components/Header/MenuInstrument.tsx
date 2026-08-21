"use client";

import { ChevronDown, Check } from "lucide-react";
import { usePrefs } from "../Prefs";

const INSTRUMENTS = [
    { value: "guitar", label: "Guitar" },
    { value: "bass", label: "Bass" },
    { value: "ukulele", label: "Ukulele" },
    { value: "piano", label: "Piano" },
] as const;

type Props = { open: boolean; onToggle: () => void; onClose: () => void };

export default function MenuInstrument({ open, onToggle, onClose }: Props) {
    const { instrument, setInstrument } = usePrefs();

    return (
        <div className="relative">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                aria-haspopup="true"
                className="flex items-center gap-1 rounded-full border border-on-band/30 py-1 pl-3 pr-2 text-xs font-semibold uppercase text-on-band hover:bg-on-band/10"
            >
                {instrument}
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            {open && (
                <div className="absolute right-0 top-9 w-40 rounded-lg border border-foreground/10 bg-panel p-1 shadow-lg">
                    {INSTRUMENTS.map((opt) => (
                        <button
                            key={opt.value}
                            type="button"
                            onClick={() => {
                                setInstrument(opt.value);
                                onClose();
                            }}
                            aria-pressed={instrument === opt.value}
                            className="flex w-full items-center justify-between rounded px-3 py-2 text-left text-sm text-foreground hover:bg-foreground/10"
                        >
                            {opt.label}
                            {instrument === opt.value && (
                                <Check className="h-4 w-4" aria-hidden="true" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}