"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, ACCOUNT_ITEM } from "./navItems";

const ITEMS = [...NAV_ITEMS, ACCOUNT_ITEM];

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Main"
            className="fixed inset-x-0 bottom-0 z-40 border-t border-foreground/10 bg-panel pb-[env(safe-area-inset-bottom)] desk:hidden"
        >
            <ul className="flex h-14">
                {ITEMS.map(({ href, label, icon: Icon }, i) => {
                    const active = pathname === href;
                    return (
                        <li
                            key={href}
                            className={`flex-1 ${i > 0 ? "border-l border-foreground/15" : ""}`}
                        >
                            <Link
                                href={href}
                                aria-current={active ? "page" : undefined}
                                className={`flex h-full flex-col items-center justify-center gap-1 text-[10px] ${
                                    active
                                        ? "font-semibold text-foreground"
                                        : "text-foreground/60"
                                }`}
                            >
                                <Icon className="h-5 w-5" aria-hidden="true" />
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}