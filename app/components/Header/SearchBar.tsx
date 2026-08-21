"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
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
            <SearchField
                value={value}
                onChange={onChange}
                onEscape={onClose}
                inputRef={inputRef}
            />
            <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="-m-2 flex rounded-full p-2 text-on-band hover:bg-on-band/10"
            >
                <X className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
        </div>
    );
}