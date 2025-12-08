import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

import clientBefore from "@/assets/client-before.jpg";
import clientAfter from "@/assets/client-after.jpg";
import client2Before from "@/assets/client2-before.jpg";
import client2After from "@/assets/client2-after.jpg";
import client3Before from "@/assets/client3-before.jpg";
import client3After from "@/assets/client3-after.jpg";

const Results = () => {
  const { t } = useTranslation();

  const transformations = [
    {
      before: clientBefore,
      after: clientAfter,
      name: "Client A",
      grafts: "3,500",
      procedure: "FUE Hair Transplant",
    },
    {
      before: client2Before,
      after: client2After,
      name: "Client B",
      grafts: "4,200",
      procedure: "FUE Hair Transplant",
    },
    {
      before: client3Before,
      after: client3After,
      name: "Client C",
      grafts: "2,800",
      procedure: "Beard Transplant",
    },
  ];

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
            {t.resultsPage.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {t.resultsPage.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12">
            {transformations.map((transformation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-secondary rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Before Image */}
                  <div className="relative">
                    <img
                      src={transformation.before}
                      alt={`${transformation.name} before`}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-foreground/80 text-background px-4 py-2 rounded-full text-sm font-medium">
                      {t.resultsPage.before}
                    </span>
                  </div>
                  {/* After Image */}
                  <div className="relative">
                    <img
                      src={transformation.after}
                      alt={`${transformation.name} after`}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      {t.resultsPage.after}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-wrap gap-4 justify-center">
                  <span className="bg-background text-foreground px-4 py-2 rounded-full text-sm">
                    {transformation.grafts} {t.resultsPage.grafts}
                  </span>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {transformation.procedure}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-foreground"
          >
            {t.resultsPage.ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            {t.resultsPage.ctaDescription}
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            {t.resultsPage.ctaButton}
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Results;
