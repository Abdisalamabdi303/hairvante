import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Microscope, Scissors, Home, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const Process = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Calendar,
      title: t.process.steps.consultation.title,
      description: t.process.steps.consultation.description,
      duration: t.process.steps.consultation.duration,
    },
    {
      icon: Microscope,
      title: t.process.steps.preparation.title,
      description: t.process.steps.preparation.description,
      duration: t.process.steps.preparation.duration,
    },
    {
      icon: Scissors,
      title: t.process.steps.procedure.title,
      description: t.process.steps.procedure.description,
      duration: t.process.steps.procedure.duration,
    },
    {
      icon: Home,
      title: t.process.steps.recovery.title,
      description: t.process.steps.recovery.description,
      duration: t.process.steps.recovery.duration,
    },
    {
      icon: CheckCircle2,
      title: t.process.steps.followUp.title,
      description: t.process.steps.followUp.description,
      duration: t.process.steps.followUp.duration,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden py-24 bg-secondary">
      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-primary">{t.process.subtitle}</p>
          <h2 className="font-playfair text-4xl text-foreground md:text-5xl">
            {t.process.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {t.process.description}
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="rounded-xl border border-border bg-card shadow-md">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                          {index + 1}
                        </span>
                        <CardTitle className="font-playfair text-2xl text-foreground">{step.title}</CardTitle>
                      </div>
                      <span className="text-sm font-semibold text-primary">{step.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="pl-[72px] text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <h3 className="font-playfair text-3xl text-foreground md:text-4xl">{t.consultation.title}</h3>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
              {t.consultation.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/905438611089"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:scale-105"
              >
                {t.hero.whatsappButton}
              </a>
              <button
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-10 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
              >
                {t.consultation.form.submitButton}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
