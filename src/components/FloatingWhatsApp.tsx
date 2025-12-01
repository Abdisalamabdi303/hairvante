import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const FloatingWhatsApp = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/905431293599?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25d366] to-[#1ebe57] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(37,211,102,0.8)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={t.common.whatsapp}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{t.common.whatsapp}</span>
    </motion.button>
  );
};

export default FloatingWhatsApp;


