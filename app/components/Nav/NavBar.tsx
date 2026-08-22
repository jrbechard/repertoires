"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, ACCOUNT_ITEM } from "./navItems";
import Avatar from "../Avatar";

function linkClass(active: boolean) {
    return `flex h-full flex-col items-center justify-center gap-1 border-t-2 text-[10px] ${
        active
            ? "border-foreground font-semibold text-foreground"
            : "border-transparent text-foreground/60"
    }`;
}

export default function NavBar() {
    const pathname = usePathname();
    const accountActive = pathname === ACCOUNT_ITEM.href;

    return (
        <nav
            aria-label="Main"
            className="fixed inset-x-0 bottom-0 z-40 border-t border-foreground/10 bg-panel pb-[env(safe-area-inset-bottom)] desk:hidden"
        >
            <ul className="flex h-14">
                {NAV_ITEMS.map(({ href, label, icon: Icon }, i) => {
                    const active = pathname === href;
                    return (
                        <li
                            key={href}
                            className={`flex-1 ${i > 0 ? "border-l border-foreground/15" : ""}`}
                        >
                            <Link
                                href={href}
                                aria-current={active ? "page" : undefined}
                                className={linkClass(active)}
                            >
                                <Icon className="h-5 w-5" aria-hidden="true" />
                                {label}
                            </Link>
                        </li>
                    );
                })}

                <li className="flex-1 border-l border-foreground/15">
                    <Link
                        href={ACCOUNT_ITEM.href}
                        aria-current={accountActive ? "page" : undefined}
                        className={linkClass(accountActive)}
                    >
                        <Avatar
                            className={`h-5 w-5 bg-foreground/15 text-[8px] text-foreground ${
                                accountActive ? "" : "opacity-60"
                            }`}
                        />
                        {ACCOUNT_ITEM.label}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}