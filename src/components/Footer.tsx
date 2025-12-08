import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { useTranslation } from "@/contexts/TranslationContext";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden bg-foreground py-16 text-background">
      <div className="container relative mx-auto px-4">
        <div className="mb-10 grid gap-10 md:grid-cols-4">
          <div>
            <Logo
              className="h-10 w-auto"
              alt="HairVante Logo"
            />
            <p className="mt-4 text-background/75">
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
            <h4 className="mb-4 font-semibold text-lg text-primary">{t.footer.services.title}</h4>
            <ul className="space-y-3 text-background/80">
              <li>{t.footer.services.fue}</li>
              <li>{t.footer.services.dhi}</li>
              <li>{t.footer.services.beard}</li>
              <li>{t.footer.services.eyebrow}</li>
              <li>{t.footer.services.prp}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg text-primary">{t.footer.contact.title}</h4>
            <div className="space-y-3 text-background/80">
              <a
                href="https://wa.me/905431293599"
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

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
