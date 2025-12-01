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
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080604] via-[#050505] to-[#080604]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,216,140,0.09),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-primary/80">{t.process.subtitle}</p>
          <h2 className="font-playfair text-4xl text-white md:text-5xl">
            {t.process.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
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
              <Card className="rounded-[28px] border border-white/10 bg-white/5 text-white shadow-[0_35px_120px_-60px_rgba(0,0,0,1)]">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                          {index + 1}
                        </span>
                        <CardTitle className="font-playfair text-2xl text-white">{step.title}</CardTitle>
                      </div>
                      <span className="text-sm font-semibold text-primary">{step.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="pl-[72px] text-white/70">{step.description}</p>
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
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_-60px_rgba(0,0,0,1)]">
            <h3 className="font-playfair text-3xl text-white md:text-4xl">{t.consultation.title}</h3>
            <p className="mx-auto mt-4 max-w-3xl text-white/70">
              {t.consultation.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/905438611089"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f8d88d] to-[#b8802a] px-10 py-3 text-sm font-semibold text-black shadow-[0_25px_80px_-40px_rgba(248,216,141,1)] transition hover:scale-105"
              >
                {t.hero.whatsappButton}
              </a>
              <button
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
