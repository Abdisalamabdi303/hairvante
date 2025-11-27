import { useState, useEffect } from "react";
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
    <section className="relative min-h-screen flex items-center bg-[#262626] overflow-hidden">
      {/* Right Side Slideshow */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 lg:w-3/5">
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
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#262626] via-[#262626]/80 to-transparent" />
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-primary w-6" 
                : "bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-8">
            <Logo className="h-20 md:h-28 w-auto" />
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl font-semibold mb-6 text-background">
            Restore Your Confidence with World-Class Hair Restoration
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-background/90 leading-relaxed">
            Experience the transformation you deserve with Turkey's premier hair transplant specialists. 
            Our all-inclusive packages combine cutting-edge FUE and DHI techniques with luxury accommodation, 
            ensuring your journey to natural-looking, permanent results is seamless and comfortable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] transition-all hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/0.6)] hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-background text-background hover:bg-background hover:text-foreground font-semibold text-lg px-8 py-6 transition-all"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
