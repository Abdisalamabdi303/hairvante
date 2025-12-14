import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, tr, fr, ru, de, ar, nl, it, es, TranslationKeys } from "@/translations";

type Language = "en" | "tr" | "fr" | "ru" | "de" | "ar" | "nl" | "it" | "es";

interface TranslationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationKeys;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations: Record<Language, TranslationKeys> = {
    en,
    tr,
    fr,
    ru,
    de,
    ar,
    nl,
    it,
    es,
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem("language");
        return (saved === "en" || saved === "tr" || saved === "fr" || saved === "ru" || saved === "de" || saved === "ar" || saved === "nl" || saved === "it" || saved === "es") ? saved as Language : "en";
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language]);

    const value: TranslationContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};

export const useTranslation = (): TranslationContextType => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error("useTranslation must be used within a TranslationProvider");
    }
    return context;
};
