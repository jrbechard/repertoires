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
            <ul className="flex justify-center px-4">
                {NAV_ITEMS.map(({ href, label, icon: Icon }, i) => {
                    const active = pathname === href;
                    return (
                        <li
                            key={href}
                            className={`border-l border-foreground/15 ${
                                i === NAV_ITEMS.length - 1 ? "border-r" : ""
                            }`}
                        >
                            <Link
                                href={href}
                                aria-current={active ? "page" : undefined}
                                // Width is (shell - 2rem) / 3 so the first tab's left edge lands flush
                                // with the content column, which is max-w-shell with px-4.
                                className={`-mb-px flex w-[calc((var(--shell)-2rem)/3)] items-center justify-center gap-2 border-b-2 px-3 py-3 text-sm ${
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