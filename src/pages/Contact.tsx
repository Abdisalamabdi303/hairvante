import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.location.title,
      details: t.contact.location.details,
    },
    {
      icon: Phone,
      title: t.contact.phone.title,
      details: "+90 543 129 35 99",
    },
    {
      icon: Mail,
      title: t.contact.email.title,
      details: "info@hairvante.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@hairvante",
      link: "https://www.instagram.com/hairvante?igsh=NTZ2dGR6enJvbWdy"
    },
    {
      icon: Clock,
      title: t.contact.hours.title,
      details: t.contact.hours.details,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-64 pb-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Wrapper = info.link ? 'a' : 'div';
              const props = info.link ? {
                href: info.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "block text-center p-6 rounded-xl bg-secondary transition-transform hover:scale-105 cursor-pointer"
              } : {
                className: "text-center p-6 rounded-xl bg-secondary"
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Wrapper {...props}>
                    <info.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-foreground">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.details}</p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm />

      <Footer />
    </main>
  );
};

export default Contact;
