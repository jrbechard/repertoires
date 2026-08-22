"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import SearchField from "./SearchField";

type Props = {
    value: string;
    onChange: (value: string) => void;
    onClose: () => void;
};

export default function SearchBar({ value, onChange, onClose }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="flex w-full items-center gap-2">
            <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="-ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-on-band hover:bg-on-band/10"
            >
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <SearchField
                value={value}
                onChange={onChange}
                onEscape={onClose}
                inputRef={inputRef}
            />
        </div>
    );
}