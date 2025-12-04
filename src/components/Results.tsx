import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";
import clientBefore from "@/assets/client-before.jpg";
import clientAfter from "@/assets/client-after.jpg";
import client2Before from "@/assets/client2-before.jpg";
import client2After from "@/assets/client2-after.jpg";
import client3Before from "@/assets/client3-before.jpg";
import client3After from "@/assets/client3-after.jpg";
import client4Before from "@/assets/client4-before.jpg";
import client4After from "@/assets/client4-after.jpg";
import client5Before from "@/assets/client5-before.jpg";
import client5After from "@/assets/client5-after.jpg";

const Results = () => {
  const { t } = useTranslation();
  const transformations = [
    {
      before: clientBefore,
      after: clientAfter,
      name: "Client 1",
    },
    {
      before: client2Before,
      after: client2After,
      name: "Client 2",
    },
    {
      before: client3Before,
      after: client3After,
      name: "Client 3",
    },
    {
      before: client4Before,
      after: client4After,
      name: "Client 4",
    },
    {
      before: client5Before,
      after: client5After,
      name: "Client 5",
    },
  ];

  return (
    <section id="results" className="relative isolate overflow-hidden py-24 bg-secondary">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-primary">{t.results.subtitle}</p>
          <h2 className="font-playfair text-4xl text-foreground md:text-5xl">
            {t.results.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t.results.description}
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          className="mx-auto mt-16 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/treatment-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-sm font-semibold text-white">{t.results.videoCaption}</p>
            </div>
          </div>
        </motion.div>

        {/* Before/After Grid - Paired Layout */}
        <div className="mt-16 space-y-8 mx-auto max-w-2xl">
          {transformations.map((transformation, index) => (
            <motion.div
              key={index}
              className="grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Before */}
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-md">
                <div className="aspect-[9/16] w-full">
                  <img
                    src={transformation.before}
                    alt={`${transformation.name} before treatment`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-red-500 px-4 py-1.5 text-sm font-semibold text-white">
                    {t.results.beforeLabel}
                  </span>
                </div>
              </div>

              {/* After */}
              <div className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-md">
                <div className="aspect-[9/16] w-full">
                  <img
                    src={transformation.after}
                    alt={`${transformation.name} after treatment`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-white">
                    {t.results.afterLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
