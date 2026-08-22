"use client";

import { useEffect } from "react";

export default function CanvasTint() {
    useEffect(() => {
        const root = document.documentElement;
        let scrolled = false;

        function update() {
            const next = window.scrollY > 0;
            if (next === scrolled) return;
            scrolled = next;
            if (next) root.setAttribute("data-scrolled", "");
            else root.removeAttribute("data-scrolled");
        }

        update();
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
    }, []);

    return null;
}