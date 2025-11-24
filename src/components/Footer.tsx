import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-dark text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Logo className="h-12 w-auto mb-4" alt="HairVante Logo" />
            <p className="text-background/80 mb-4">
              Turkey's premier destination for world-class hair restoration. 
              Restoring confidence through excellence in hair transplant surgery.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#packages" className="text-background/80 hover:text-primary transition-colors">
                  Packages & Pricing
                </a>
              </li>
              <li>
                <a href="#consultation" className="text-background/80 hover:text-primary transition-colors">
                  Free Consultation
                </a>
              </li>
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Contact Information</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/905438611089" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +90 543 861 10 89
              </a>
              <a 
                href="mailto:info@hairvante.com" 
                className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@hairvante.com
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Istanbul, Turkey - Premier Medical Tourism Hub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} HairVante. All rights reserved. | Expert Hair Restoration in Turkey
          </p>
          <p className="text-background/60 text-sm mt-2">
            Professional medical hair transplant services with international quality standards
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
