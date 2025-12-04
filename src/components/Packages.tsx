import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const Packages = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/905431293599?text=${message}`, "_blank");
  };

  const features = [
    { title: t.packages.features.accommodation.title, description: t.packages.features.accommodation.description },
    { title: t.packages.features.transfer.title, description: t.packages.features.transfer.description },
    { title: t.packages.features.aftercare.title, description: t.packages.features.aftercare.description },
    { title: t.packages.features.team.title, description: t.packages.features.team.description },
    { title: t.packages.features.support.title, description: t.packages.features.support.description },
    { title: t.packages.features.guarantee.title, description: t.packages.features.guarantee.description },
    { title: t.packages.features.bloodTests.title, description: t.packages.features.bloodTests.description },
    { title: t.packages.features.followUps.title, description: t.packages.features.followUps.description },
  ];

  const bonuses = [
    { title: t.packages.bonuses.mesotherapy.title, copy: t.packages.bonuses.mesotherapy.description },
    { title: t.packages.bonuses.prp.title, copy: t.packages.bonuses.prp.description },
  ];

  return (
    <section id="packages" className="relative isolate overflow-hidden py-24 bg-background">
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-primary">{t.packages.subtitle}</p>
          <h2 className="font-playfair text-4xl text-foreground md:text-5xl">
            {t.packages.title} <span className="text-primary">{t.packages.titleHighlight}</span> {t.packages.titleEnd}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {t.packages.description}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <div className="bg-primary p-8 text-center text-primary-foreground">
              <CardTitle className="font-playfair text-4xl font-bold md:text-5xl">{t.packages.price}</CardTitle>
              <CardDescription className="text-base text-primary-foreground/80">
                {t.packages.priceDescription}
              </CardDescription>
            </div>

            <CardHeader className="text-center pb-4">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">{t.packages.limitedOffer}</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-10 pb-10">
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl border border-border bg-secondary px-4 py-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6 rounded-xl border border-border bg-secondary p-6">
                <div className="flex items-start gap-3">
                  <Gift className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-playfair text-2xl text-foreground">{t.packages.bonuses.title}</h4>
                    <p className="text-muted-foreground">
                      {t.packages.bonuses.description}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {bonuses.map((bonus) => (
                    <div key={bonus.title} className="rounded-xl border border-border bg-card p-4">
                      <h5 className="font-semibold text-foreground">{bonus.title}</h5>
                      <p className="text-sm text-muted-foreground">{bonus.copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-primary px-12 py-6 text-primary-foreground shadow-lg transition hover:scale-105"
                  onClick={handleWhatsAppClick}
                >
                  {t.packages.ctaButton}
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t.packages.ctaDescription}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
