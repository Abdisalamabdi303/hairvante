import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import LanguageToggle from "@/components/LanguageToggle";
import { useTranslation } from "@/contexts/TranslationContext";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.results, href: "/results" },
    { name: t.nav.prices, href: "/prices" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/905431293599?text=${message}`, "_blank");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/98 shadow-md backdrop-blur-md py-1.5"
          : "bg-background/95 backdrop-blur-sm py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible on mobile, hidden on home page desktop */}
          <Link
            to="/"
            className={cn(
              "flex items-center transition-transform duration-300",
              isScrolled ? "scale-90" : "scale-100",
              location.pathname === "/" ? "md:hidden" : ""
            )}
          >
            <Logo className="w-full max-w-[100px] md:max-w-[120px]" />
          </Link>

          {/* Spacer for home page desktop to center nav */}
          {location.pathname === "/" && <div className="hidden md:block" />}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-sm" : "text-base",
                  isActive(link.href) ? "text-primary" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <LanguageToggle />
            <Button onClick={handleWhatsAppClick} size={isScrolled ? "sm" : "default"} className="bg-primary hover:bg-primary/90 transition-all duration-300">
              {t.nav.getConsultation}
            </Button>
          </div>

          {/* Mobile menu button and language toggle */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.href)
                    ? "text-primary"
                    : "text-foreground"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={handleWhatsAppClick} size="sm" className="w-fit bg-primary hover:bg-primary/90">
                {t.nav.getConsultation}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
