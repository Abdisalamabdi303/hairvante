import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";
import clientBefore from "@/assets/client-before.jpg";
import clientTreatment from "@/assets/client-treatment.jpg";
import clientAfter from "@/assets/client-after.jpg";
import client2Before from "@/assets/client2-before.jpg";
import client2Treatment from "@/assets/client2-treatment.jpg";
import client2After from "@/assets/client2-after.jpg";
import client3Before from "@/assets/client3-before.jpg";
import client3Treatment from "@/assets/client3-treatment.jpg";
import client3After from "@/assets/client3-after.jpg";

const Results = () => {
  const { t } = useTranslation();
  const transformations = [
    {
      before: clientBefore,
      treatment: clientTreatment,
      after: clientAfter,
      name: "Client 1",
      procedure: t.results.transformations.case1.procedure,
      grafts: t.results.transformations.case1.grafts,
    },
    {
      before: client2Before,
      treatment: client2Treatment,
      after: client2After,
      name: "Client 2",
      procedure: t.results.transformations.case2.procedure,
      grafts: t.results.transformations.case2.grafts,
    },
    {
      before: client3Before,
      treatment: client3Treatment,
      after: client3After,
      name: "Client 3",
      procedure: t.results.transformations.case3.procedure,
      grafts: t.results.transformations.case3.grafts,
    },
  ];

  return (
    <section id="results" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090604] via-[#050505] to-[#0a0806]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,216,140,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-primary/80">{t.results.subtitle}</p>
          <h2 className="font-playfair text-4xl text-white md:text-5xl">
            {t.results.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            {t.results.description}
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_45px_120px_-60px_rgba(0,0,0,1)]">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/treatment-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-sm font-semibold text-white">{t.results.videoCaption}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 space-y-24">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Before/After Split Layout */}
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Before - Larger */}
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_35px_100px_-50px_rgba(0,0,0,1)]">
                    <img
                      src={transformation.before}
                      alt={`${transformation.name} before treatment`}
                      className="h-[500px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-500/90 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                        <span>{t.results.beforeLabel}</span>
                      </div>
                      <p className="text-base text-white/90">{t.results.beforeDescription}</p>
                    </div>
                  </div>
                </motion.div>

                {/* After - Larger */}
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_35px_100px_-50px_rgba(0,0,0,1)]">
                    <img
                      src={transformation.after}
                      alt={`${transformation.name} after treatment`}
                      className="h-[500px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                        <span>{t.results.afterLabel}</span>
                      </div>
                      <p className="text-base text-white/90">{t.results.afterDescription}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Treatment Process & Details */}
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Treatment Image */}
                <motion.div
                  className="lg:col-span-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_30px_80px_-45px_rgba(0,0,0,1)]">
                    <img
                      src={transformation.treatment}
                      alt={`${transformation.name} during treatment`}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="mb-2 inline-block rounded-full bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur-sm">
                        {t.results.treatmentLabel}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Procedure Details */}
                <motion.div
                  className="lg:col-span-2 flex flex-col justify-center space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{transformation.procedure}</h3>
                      <p className="text-primary">{transformation.grafts}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-white/70">
                    <p className="text-sm">{t.results.treatmentDescription1}</p>
                    <p className="text-sm">{t.results.treatmentDescription2}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
