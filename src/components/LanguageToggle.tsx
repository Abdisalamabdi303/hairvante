import { useTranslation } from "@/contexts/TranslationContext";
import { Languages, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const LanguageToggle = () => {
    const { language, setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", label: "English", flag: "🇬🇧" },
        { code: "tr", label: "Türkçe", flag: "🇹🇷" },
        { code: "fr", label: "Français", flag: "🇫🇷" },
        { code: "ru", label: "Русский", flag: "🇷🇺" },
        { code: "de", label: "Deutsch", flag: "🇩🇪" },
        { code: "ar", label: "العربية", flag: "🇸🇦" },
        { code: "nl", label: "Nederlands", flag: "🇳🇱" },
        { code: "it", label: "Italiano", flag: "🇮🇹" },
        { code: "es", label: "Español", flag: "🇪🇸" },
    ] as const;

    const currentLang = languages.find(lang => lang.code === language) || languages[0];

    const handleLanguageSelect = (langCode: typeof languages[number]["code"]) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Select language"
            >
                <Languages className="h-4 w-4 text-primary transition-transform group-hover:rotate-12" />
                <span className="text-sm font-medium text-white flex items-center gap-1.5">
                    <span>{currentLang.flag}</span>
                    <span>{currentLang.code.toUpperCase()}</span>
                </span>
                <ChevronDown className={`h-3 w-3 text-white transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-2 z-50 min-w-[160px] overflow-hidden rounded-lg border border-white/10 bg-black/95 backdrop-blur-md shadow-xl"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLanguageSelect(lang.code)}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${language === lang.code
                                        ? "bg-primary/20 text-primary font-semibold"
                                        : "text-white hover:bg-white/10"
                                        }`}
                                >
                                    <span className="text-lg">{lang.flag}</span>
                                    <span>{lang.label}</span>
                                    {language === lang.code && (
                                        <span className="ml-auto text-primary">✓</span>
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageToggle;
