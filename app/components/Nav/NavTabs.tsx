"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./navItems";

export default function NavTabs() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Main"
            className="hidden border-b border-foreground/10 desk:block"
        >
            <ul className="mx-auto flex max-w-shell gap-1 px-4">
                {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
                    const active = pathname === href;
                    return (
                        <li key={href}>
                            <Link
                                href={href}
                                aria-current={active ? "page" : undefined}
                                className={`-mb-px flex items-center gap-2 border-b-2 px-3 py-3 text-sm ${
                                    active
                                        ? "border-foreground font-semibold text-foreground"
                                        : "border-transparent text-foreground/70 hover:text-foreground"
                                }`}
                            >
                                <Icon className="h-4 w-4" aria-hidden="true" />
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}