"use client";

import { useState, useEffect, useRef } from "react";
import { Bell, Search } from "lucide-react";
import Link from "next/link";
import Logo from "../Logo";
import MenuInstrument from "./MenuInstrument";
import MenuAccount from "./MenuAccount";

type Menu = "instrument" | "account" | null;

export default function Header() {
    const [openMenu, setOpenMenu] = useState<Menu>(null);
    const navRef = useRef<HTMLDivElement>(null);

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

    return (
        <header className="flex items-center justify-between bg-band px-4 py-4">
            <Link href="/" className="flex items-center -m-2 p-2">
                <Logo className="h-8 w-auto" />
            </Link>

            <div className="flex items-center gap-4" ref={navRef}>
                <MenuInstrument
                    open={openMenu === "instrument"}
                    onToggle={() => toggle("instrument")}
                    onClose={() => setOpenMenu(null)}
                />

                <button
                    type="button"
                    aria-label="Notifications"
                    className="-m-2 rounded-full p-2 text-on-band hover:bg-on-band/10"
                >
                    <Bell className="h-4.5 w-4.5" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    aria-label="Search"
                    className="-m-2 rounded-full p-2 text-on-band hover:bg-on-band/10"
                >
                    <Search className="h-4.5 w-4.5" aria-hidden="true" />
                </button>

                <MenuAccount
                    open={openMenu === "account"}
                    onToggle={() => toggle("account")}
                />
            </div>
        </header>
    );
}