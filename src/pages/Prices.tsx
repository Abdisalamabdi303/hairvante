import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";

const Prices = () => {
  const { t } = useTranslation();

  const packages = [
    {
      name: t.pricesPage.packages.essential.name,
      price: "€2,490",
      description: t.pricesPage.packages.essential.description,
      features: [
        t.pricesPage.packages.essential.features.f1,
        t.pricesPage.packages.essential.features.f2,
        t.pricesPage.packages.essential.features.f3,
        t.pricesPage.packages.essential.features.f4,
        t.pricesPage.packages.essential.features.f5,
      ],
      popular: false,
    },
    {
      name: t.pricesPage.packages.premium.name,
      price: "€3,490",
      description: t.pricesPage.packages.premium.description,
      features: [
        t.pricesPage.packages.premium.features.f1,
        t.pricesPage.packages.premium.features.f2,
        t.pricesPage.packages.premium.features.f3,
        t.pricesPage.packages.premium.features.f4,
        t.pricesPage.packages.premium.features.f5,
        t.pricesPage.packages.premium.features.f6,
      ],
      popular: true,
    },
    {
      name: t.pricesPage.packages.vip.name,
      price: "€4,990",
      description: t.pricesPage.packages.vip.description,
      features: [
        t.pricesPage.packages.vip.features.f1,
        t.pricesPage.packages.vip.features.f2,
        t.pricesPage.packages.vip.features.f3,
        t.pricesPage.packages.vip.features.f4,
        t.pricesPage.packages.vip.features.f5,
        t.pricesPage.packages.vip.features.f6,
        t.pricesPage.packages.vip.features.f7,
      ],
      popular: false,
    },
  ];

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/905551234567?text=Hello, I'm interested in learning more about your packages.",
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 bg-secondary">
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

      {/* Packages Grid */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground shadow-xl scale-105"
                    : "bg-secondary text-foreground"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-medium">
                    {t.pricesPage.mostPopular}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className={`text-sm mb-4 ${pkg.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
                <div className="text-4xl font-bold mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.popular ? "text-primary-foreground" : "text-primary"}`} />
                      <span className={`text-sm ${pkg.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleWhatsAppClick}
                  className={`w-full ${
                    pkg.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.pricesPage.getQuote}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-foreground"
          >
            {t.pricesPage.includesTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            {t.pricesPage.includesDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              t.pricesPage.includes.airport,
              t.pricesPage.includes.hotel,
              t.pricesPage.includes.medication,
              t.pricesPage.includes.followup,
            ].map((item, index) => (
              <span
                key={index}
                className="bg-background text-foreground px-4 py-2 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Prices;
