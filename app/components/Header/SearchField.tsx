"use client";

import { Search } from "lucide-react";
import type { RefObject } from "react";

type Props = {
    value: string;
    onChange: (value: string) => void;
    onEscape?: () => void;
    inputRef?: RefObject<HTMLInputElement | null>;
};

export default function SearchField({ value, onChange, onEscape, inputRef }: Props) {
    return (
        <div className="relative flex w-full items-center">
            <Search
                className="pointer-events-none absolute left-3 h-4 w-4 text-on-band/60"
                aria-hidden="true"
            />
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Escape") onEscape?.();
                }}
                placeholder="Search songs and repertoires"
                aria-label="Search"
                className="h-8 w-full rounded-full bg-on-band/10 pl-9 pr-3 text-base text-on-band placeholder:text-on-band/50 focus:outline-none desk:text-sm"
            />
        </div>
    );
}