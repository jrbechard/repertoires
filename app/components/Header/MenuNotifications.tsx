"use client";

import { Bell } from "lucide-react";

type Props = { open: boolean; onToggle: () => void };

export default function MenuNotifications({ open, onToggle }: Props) {
    return (
        <div className="relative">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                aria-haspopup="true"
                aria-label="Notifications"
                className="-m-2 rounded-full p-2 text-on-band hover:bg-on-band/10"
            >
                <Bell className="h-4.5 w-4.5" aria-hidden="true" />
            </button>

            {open && (
                <div className="absolute right-0 top-11 w-72 rounded-lg border border-foreground/10 bg-panel p-2 shadow-lg">
                    <div className="px-2 py-1 text-sm font-semibold text-foreground">
                        Notifications
                    </div>
                    <p className="px-2 py-4 text-left text-sm text-foreground/60">
                        Nothing yet. Repertoires you follow will show up here.
                    </p>
                </div>
            )}
        </div>
    );
}