import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Logo from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";
import heroSlide6 from "@/assets/hero-slide-6.jpg";
import heroSlide7 from "@/assets/hero-slide-7.jpg";

const heroSlides = [
  heroSlide1,
  heroSlide2,
  heroSlide3,
  heroSlide4,
  heroSlide5,
  heroSlide6,
  heroSlide7,
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/905431293599?text=${message}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] text-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#120c05] to-[#1a1309]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,224,170,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.7),transparent_65%)]" />
      </div>

      {/* Language Toggle - Top Right */}
      <div className="absolute right-4 top-4 z-20 md:right-8 md:top-8">
        <LanguageToggle />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-4 rounded-[32px] border border-white/10 bg-white/5 px-6 py-4 shadow-[0_40px_120px_-60px_rgba(0,0,0,1)] backdrop-blur-xl">
              <div className="relative">
                <div className="absolute inset-0 -z-10 translate-y-1 rounded-full bg-gradient-to-r from-[#f8d88d]/60 to-transparent blur-2xl" />
                <Logo className="w-[230px]" />
              </div>
              <div className="hidden text-left text-xs uppercase tracking-[0.45em] text-white/70 lg:block">
                <p>{t.hero.precisionCraft}</p>
                <p className="text-primary/80">{t.hero.luxuryCare}</p>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.55em] text-primary/80">
              {t.hero.tagline}
            </p>
          </motion.div>

          <motion.h1
            className="font-playfair text-4xl font-semibold text-white md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            className="text-lg text-white/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="group w-full bg-gradient-to-r from-[#f8d88d] via-[#e0b257] to-[#bf8a2b] text-black shadow-[0_20px_60px_-30px_rgba(248,216,141,0.9)] transition-all hover:scale-[1.02] sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              {t.hero.whatsappButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              onClick={() =>
                document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.hero.packagesButton}
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3 text-sm text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              t.hero.features.transfers,
              t.hero.features.accommodation,
              t.hero.features.specialists,
              t.hero.features.guarantee,
            ].map((item, index) => (
              <motion.span
                key={item}
                className="rounded-full border border-white/15 px-4 py-2 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/30 shadow-[0_45px_120px_-50px_rgba(0,0,0,1)]">
            <div className="relative aspect-[4/5] w-full min-h-[420px]">
              {heroSlides.map((slide, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={slide}
                    alt={`Hair transplant result ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.4em] text-white/60">
              <span>{t.hero.beforeAfter}</span>
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all ${index === currentSlide
                      ? "w-8 bg-gradient-to-r from-[#f8d88d] to-[#bf8a2b]"
                      : "w-3 bg-white/20"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
