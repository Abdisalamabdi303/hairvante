import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/905438611089", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(38, 38, 38, 0.9), rgba(38, 38, 38, 0.6)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-background">
            <span className="text-primary">Hair</span>Vante
          </h1>
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
