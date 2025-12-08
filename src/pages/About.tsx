import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Users, Heart, Shield } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import doctorsImage from "@/assets/doctors.jpeg";
import clinicImage from "@/assets/clinic-interior.jpg";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description,
    },
    {
      icon: Users,
      title: t.about.values.patientCare.title,
      description: t.about.values.patientCare.description,
    },
    {
      icon: Heart,
      title: t.about.values.compassion.title,
      description: t.about.values.compassion.description,
    },
    {
      icon: Shield,
      title: t.about.values.trust.title,
      description: t.about.values.trust.description,
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
            {t.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t.about.story.title}</h2>
            <p className="text-muted-foreground mb-4">{t.about.story.p1}</p>
            <p className="text-muted-foreground">{t.about.story.p2}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img src={clinicImage} alt="Our Clinic" className="w-full h-80 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
          >
            <img src={doctorsImage} alt="Our Medical Team" className="w-full h-80 object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold mb-6 text-foreground">{t.about.team.title}</h2>
            <p className="text-muted-foreground mb-4">{t.about.team.p1}</p>
            <p className="text-muted-foreground">{t.about.team.p2}</p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-foreground"
          >
            {t.about.valuesTitle}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-secondary"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DHI Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              DHI Hair Transplant Technique
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Direct Hair Implantation (DHI) is the most advanced hair transplantation technique, offering natural results with minimal invasiveness and faster recovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">What is DHI?</h3>
              <p className="text-muted-foreground mb-4">
                DHI (Direct Hair Implantation) is a revolutionary technique that uses a specialized Choi Implanter Pen to extract and implant hair follicles directly without the need for pre-made channels.
              </p>
              <p className="text-muted-foreground">
                This advanced method ensures higher graft survival rates, more precise control over angle and depth, and creates a denser, more natural-looking result.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose DHI?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">No scalpel or stitches required</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Minimal bleeding and faster healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Higher graft survival rate (95%+)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Precise control over hair direction and angle</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">No need to shave entire head</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Shorter recovery time</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our DHI Expertise</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
              At HairVante, our team of certified surgeons has performed thousands of successful DHI procedures. We combine the precision of DHI technique with sapphire blades for the ultimate hair restoration experience, ensuring natural-looking results that last a lifetime.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">A+</p>
                <p className="text-sm text-muted-foreground">DHI Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Expert Team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
