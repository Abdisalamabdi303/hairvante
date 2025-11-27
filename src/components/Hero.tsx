import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Logo from "@/components/Logo";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/905438611089", "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] text-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#120c05] to-[#1a1309]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,224,170,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.7),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-20 pt-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-4 rounded-[32px] border border-white/10 bg-white/5 px-6 py-4 shadow-[0_40px_120px_-60px_rgba(0,0,0,1)] backdrop-blur-xl">
              <div className="relative">
                <div className="absolute inset-0 -z-10 translate-y-1 rounded-full bg-gradient-to-r from-[#f8d88d]/60 to-transparent blur-2xl" />
                <Logo className="w-[230px]" />
              </div>
              <div className="hidden text-left text-xs uppercase tracking-[0.45em] text-white/70 lg:block">
                <p>Precision Craft</p>
                <p className="text-primary/80">Luxury Care</p>
              </div>
            </div>
            <p className="text-xs uppercase tracking-[0.55em] text-primary/80">
              Bespoke Hair Restoration • Istanbul
            </p>
          </div>

          <h1 className="font-playfair text-4xl font-semibold text-white md:text-5xl">
            Natural-looking hair restoration paired with five-star care.
          </h1>

          <p className="text-lg text-white/80 md:text-xl">
            From personalized graft planning to luxury recovery suites, every detail of the HairVante
            journey is designed to restore confidence with elegance and comfort.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group w-full bg-gradient-to-r from-[#f8d88d] via-[#e0b257] to-[#bf8a2b] text-black shadow-[0_20px_60px_-30px_rgba(248,216,141,0.9)] transition-all hover:scale-[1.02] sm:w-auto"
              onClick={handleWhatsAppClick}
            >
              <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              WhatsApp Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              onClick={() =>
                document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Packages
            </Button>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {[
              "Chauffeured airport transfers",
              "Boutique accommodation partners",
              "Dedicated post-op specialists",
              "Lifetime graft guarantee",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-4 py-2 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/30 shadow-[0_45px_120px_-50px_rgba(0,0,0,1)]">
            <div className="relative aspect-[4/5] w-full min-h-[420px]">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={slide}
                    alt={`Hair transplant result ${index + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.4em] text-white/60">
              <span>Before • After</span>
              <div className="flex gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-gradient-to-r from-[#f8d88d] to-[#bf8a2b]"
                        : "w-3 bg-white/20"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
