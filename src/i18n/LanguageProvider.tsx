import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import {
  LANGUAGE_STORAGE_KEY,
  languageDirection,
  resolveLanguage,
  translations,
  type Dictionary,
  type Lang,
} from "./translations";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  dir: "ltr",
  t: translations.en,
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start in English so server and client render the same markup,
  // then restore the visitor's saved choice right after hydration.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      setLangState(resolveLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)));
    } catch {
      // Storage unavailable: stay in English.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = languageDirection(lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      // Switching still works for this visit without storage.
    }
  }, []);

  const toggleLang = useCallback(() => setLang(lang === "en" ? "ar" : "en"), [lang, setLang]);

  return (
    <LanguageContext.Provider
      value={{ lang, dir: languageDirection(lang), t: translations[lang], setLang, toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
