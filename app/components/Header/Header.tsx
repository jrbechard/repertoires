"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import MenuInstrument from "./MenuInstrument";
import MenuNotifications from "./MenuNotifications";
import MenuAccount from "./MenuAccount";
import SearchBar from "./SearchBar";
import SearchField from "./SearchField";

type Menu = "instrument" | "notifications" | "account" | null;

export default function Header() {
    const [openMenu, setOpenMenu] = useState<Menu>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const navRef = useRef<HTMLElement>(null);
    const searchButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!openMenu) return;

        function onPointerDown(e: PointerEvent) {
            if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
        }
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setOpenMenu(null);
        }

        document.addEventListener("pointerdown", onPointerDown, true);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown, true);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [openMenu]);

    function toggle(menu: Exclude<Menu, null>) {
        setOpenMenu((m) => (m === menu ? null : menu));
    }

    function openSearch() {
        setOpenMenu(null);
        setSearchOpen(true);
    }

    function closeSearch() {
        setSearchOpen(false);
        searchButtonRef.current?.focus();
    }

    if (searchOpen) {
        return (
            <header className="flex items-center bg-band px-4 py-4 desk:hidden">
                <SearchBar value={query} onChange={setQuery} onClose={closeSearch} />
            </header>
        );
    }

    return (
    <header
        ref={navRef}
        className="relative flex items-center gap-4 bg-band px-4 py-4"
    >
            <Link href="/" className="flex items-center -m-2 p-2">
                <Logo className="h-8 w-auto" />
            </Link>

            <MenuInstrument
                open={openMenu === "instrument"}
                onToggle={() => toggle("instrument")}
                onClose={() => setOpenMenu(null)}
            />

            <div className="absolute left-1/2 hidden w-full max-w-md -translate-x-1/2 desk:block">
                <SearchField value={query} onChange={setQuery} />
            </div>

            <div className="ml-auto flex items-center gap-1 desk:gap-3">
                <MenuNotifications
                    open={openMenu === "notifications"}
                    onToggle={() => toggle("notifications")}
                />

                <button
                    ref={searchButtonRef}
                    type="button"
                    onClick={openSearch}
                    aria-label="Search"
                    className="mr-1 flex h-8 w-8 items-center justify-center rounded-full text-on-band hover:bg-on-band/10 desk:hidden"
                >
                    <Search className="h-4.5 w-4.5" aria-hidden="true" />
                </button>

                <MenuAccount
                    open={openMenu === "account"}
                    onToggle={() => toggle("account")}
                    onClose={() => setOpenMenu(null)}
                />
            </div>
        </header>
    );
}