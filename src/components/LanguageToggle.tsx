import { useTranslation } from "@/contexts/TranslationContext";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

const LanguageToggle = () => {
    const { language, setLanguage, t } = useTranslation();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "tr" : "en");
    };

    const tooltip =
        language === "en" ? t.languageToggle.toTurkish : t.languageToggle.toEnglish;

    return (
        <motion.button
            onClick={toggleLanguage}
            className="group relative flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle language"
        >
            <Languages className="h-4 w-4 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-sm font-medium text-white">
                {language === "en" ? "EN" : "TR"}
            </span>

            <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-black/90 px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {tooltip}
            </div>
        </motion.button>
    );
};

export default LanguageToggle;
