import { Bell, Search} from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-black px-4 py-3">

            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white font-bold text-black">
                R
            </div>

            <div className="flex items-center gap-4">
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold text-white">
                    GUITAR
                </span>
                <Bell className="h-4.5 w-4.5 text-white" />
                <Search className="h-4.5 w-4.5 text-white" />
            </div>

        </header>
    );
}