import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#070606] via-[#050505] to-[#0b0b0b] py-16 text-background">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,217,144,0.12),transparent_55%)]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mb-10 grid gap-10 md:grid-cols-3">
          <div>
            <Logo
              className="h-10 w-auto"
              alt="HairVante Logo"
            />
            <p className="text-background/75">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg text-primary">{t.footer.quickLinks.title}</h4>
            <ul className="space-y-3 text-background/80">
              <li>
                <a
                  href="#packages"
                  className="transition-colors hover:text-primary"
                >
                  {t.footer.quickLinks.packages}
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="transition-colors hover:text-primary"
                >
                  {t.footer.quickLinks.contact}
                </a>
              </li>
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="transition-colors hover:text-primary"
                >
                  {t.footer.quickLinks.about}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg text-primary">{t.footer.contact.title}</h4>
            <div className="space-y-3 text-background/80">
              <a
                href="https://wa.me/905438611089"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {t.footer.contact.phone}
              </a>
              <a
                href="mailto:info@hairvante.com"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {t.footer.contact.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span>{t.footer.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-background/60">
          <p>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
