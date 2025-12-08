import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const Prices = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-64 pb-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            {t.pricesPage.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {t.pricesPage.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Packages Component */}
      <Packages />

      <Footer />
    </main>
  );
};

export default Prices;
