import { Award, Users, Sparkles, HeadphonesIcon } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";
import medicalTeamImage from "@/assets/doctors.jpeg";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const WhyChoose = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: Users,
      title: t.whyChoose.features.expertise.title,
      description: t.whyChoose.features.expertise.description
    },
    {
      icon: Sparkles,
      title: t.whyChoose.features.technology.title,
      description: t.whyChoose.features.technology.description
    },
    {
      icon: Award,
      title: t.whyChoose.features.luxury.title,
      description: t.whyChoose.features.luxury.description
    },
    {
      icon: HeadphonesIcon,
      title: t.whyChoose.features.support.title,
      description: t.whyChoose.features.support.description
    }
  ];

  const stats = [
    { label: t.whyChoose.statsBlock.stats.procedures, value: "10,000+" },
    { label: t.whyChoose.statsBlock.stats.satisfaction, value: "98%" },
    { label: t.whyChoose.statsBlock.stats.years, value: "15+" },
  ];

  return (
    <section className="relative isolate overflow-hidden py-24 bg-background">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.55em] text-primary">{t.whyChoose.subtitle}</p>
          <h2 className="font-playfair text-4xl font-bold text-foreground md:text-5xl">
            {t.whyChoose.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            {t.whyChoose.description}
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-primary/40 hover:shadow-md"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {[clinicImage, medicalTeamImage].map((image, index) => (
              <motion.div
                key={index}
                className="relative h-64 overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image}
                  alt={index === 0 ? "Modern HairVante clinic interior" : "HairVante medical team"}
                  className="h-full w-full object-cover object-center"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="rounded-2xl border border-border bg-secondary p-10 text-center shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-playfair text-3xl text-foreground md:text-4xl">{t.whyChoose.statsBlock.title}</h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {t.whyChoose.statsBlock.description}
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
