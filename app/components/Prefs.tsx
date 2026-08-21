"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Instrument = "guitar" | "bass" | "ukulele" | "piano";
type Theme = "light" | "dark" | "auto";
type Lang = "en" | "fr";

type PrefsValue = {
  instrument: Instrument;
  setInstrument: (i: Instrument) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  lang: Lang;
  setLang: (l: Lang) => void;
};

const PrefsContext = createContext<PrefsValue | null>(null);

export function PrefsProvider({ children }: { children: React.ReactNode }) {
  const [instrument, setInstrumentState] = useState<Instrument>("guitar");
  const [theme, setThemeState] = useState<Theme>("auto");
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const i = localStorage.getItem("instrument");
      if (i === "guitar" || i === "bass" || i === "ukulele" || i === "piano") setInstrumentState(i);
      const t = localStorage.getItem("theme");
      if (t === "light" || t === "dark" || t === "auto") setThemeState(t);
      const l = localStorage.getItem("lang");
      if (l === "en" || l === "fr") setLangState(l);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setInstrument(i: Instrument) {
    setInstrumentState(i);
    try {
      localStorage.setItem("instrument", i);
    } catch {}
  }

  function setTheme(t: Theme) {
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch {}
    const root = document.documentElement;
    if (t === "auto") root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", t);
  }

  function setLang(l: Lang) {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  }

  return (
    <PrefsContext.Provider value={{ instrument, setInstrument, theme, setTheme, lang, setLang }}>
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside PrefsProvider");
  return ctx;
}