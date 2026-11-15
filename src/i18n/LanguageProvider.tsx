import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import { translations, type Dictionary, type Lang } from "./translations";

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Lang = "en";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLang(): Lang | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "ar" || value === "en" ? value : null;
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with the default so server and client render the same markup,
  // then switch to the stored choice right after hydration.
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = readStoredLang();
    if (stored && stored !== DEFAULT_LANG) setLangState(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode etc.) — language still switches for this visit.
    }
  }, []);

  const toggleLang = useCallback(() => setLang(lang === "en" ? "ar" : "en"), [lang, setLang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir: lang === "ar" ? "rtl" : "ltr",
        t: translations[lang],
        setLang,
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
