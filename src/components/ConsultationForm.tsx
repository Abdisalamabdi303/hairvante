import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  age: "",
  message: "",
  medicalConditions: "",
  medications: "",
  allergies: "",
  previousProcedures: "",
  smokingStatus: "",
  alcoholUse: "",
  preferredTravelWindow: "",
};

const ConsultationForm = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const template = t.consultation.whatsappTemplate;
    const fmt = (value: string, fallback = template.notProvided) => value || fallback;
    const whatsappMessage =
      `${template.intro}:%0A%0A` +
      `${template.name}: ${fmt(formData.name)}%0A` +
      `${template.email}: ${fmt(formData.email)}%0A` +
      `${template.phone}: ${fmt(formData.phone)}%0A` +
      `${template.age}: ${fmt(formData.age)}%0A` +
      `${template.travel}: ${fmt(formData.preferredTravelWindow, template.notSpecified)}%0A%0A` +
      `${template.clientGoal}:%0A${fmt(formData.message)}%0A%0A` +
      `${template.medicalBackground}:%0A` +
      `${template.medicalConditions}: ${fmt(formData.medicalConditions, template.none)}%0A` +
      `${template.medications}: ${fmt(formData.medications, template.none)}%0A` +
      `${template.allergies}: ${fmt(formData.allergies, template.none)}%0A` +
      `${template.previousProcedures}: ${fmt(formData.previousProcedures, template.none)}%0A` +
      `${template.smoking}: ${fmt(formData.smokingStatus)}%0A` +
      `${template.alcohol}: ${fmt(formData.alcoholUse)}`;

    window.open(`https://wa.me/905431293599?text=${whatsappMessage}`, "_blank");

    toast({
      title: t.consultation.success,
      description: t.consultation.successNote,
    });

    setFormData(initialFormState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const cards = [
    {
      icon: Phone,
      title: t.consultation.cards.whatsapp.title,
      description: t.consultation.cards.whatsapp.description,
      content: (
        <>
          <a
            href={`https://wa.me/905431293599?text=${encodeURIComponent(t.common.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-primary hover:underline"
          >
            +90 543 129 35 99
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{t.consultation.cards.whatsapp.note}</p>
        </>
      ),
    },
    {
      icon: Mail,
      title: t.consultation.cards.email.title,
      description: t.consultation.cards.email.description,
      content: (
        <>
          <a href="mailto:info@hairvante.com" className="text-lg font-semibold text-primary hover:underline">
            info@hairvante.com
          </a>
          <p className="mt-2 text-sm text-muted-foreground">{t.consultation.cards.email.note}</p>
        </>
      ),
    },
    {
      icon: MessageSquare,
      title: t.consultation.cards.expect.title,
      description: t.consultation.cards.expect.description,
      content: (
        <div className="space-y-2 text-muted-foreground">
          {t.consultation.cards.expect.steps.map((step, idx) => (
            <div key={step} className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                {idx + 1}
              </div>
              <p className="text-sm">{step}</p>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const goals = t.consultation.sections.goals;
  const medical = t.consultation.sections.medical;

  return (
    <section id="consultation" className="relative isolate overflow-hidden py-24 bg-background">
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary">{t.consultation.subtitle}</p>
          <h2 className="font-playfair text-4xl text-foreground md:text-5xl">
            {t.consultation.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            {t.consultation.description}
          </p>
        </div>

        <div className="mt-16 space-y-10">
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="rounded-xl border border-border bg-card shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-foreground">{card.title}</CardTitle>
                        <CardDescription className="text-xs text-muted-foreground">{card.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>{card.content}</CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="rounded-xl border border-border bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair text-3xl text-foreground">{t.consultation.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t.consultation.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.consultation.form.name.label} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.consultation.form.name.placeholder}
                      required
                      className="border-border bg-background text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t.consultation.form.email.label} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.consultation.form.email.placeholder}
                      required
                      className="border-border bg-background text-foreground"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.consultation.form.phone.label} *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.consultation.form.phone.placeholder}
                        required
                        className="border-border bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">{t.consultation.form.age.label}</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder={t.consultation.form.age.placeholder}
                        className="border-border bg-background text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-6 rounded-xl border border-border bg-secondary p-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">{goals.title}</p>
                    <div className="space-y-2">
                      <Label htmlFor="message">{goals.questionLabel}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={goals.questionPlaceholder}
                        rows={4}
                        className="border-border bg-background text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTravelWindow">{goals.travelLabel}</Label>
                      <Input
                        id="preferredTravelWindow"
                        name="preferredTravelWindow"
                        value={formData.preferredTravelWindow}
                        onChange={handleChange}
                        placeholder={goals.travelPlaceholder}
                        className="border-border bg-background text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 rounded-xl border border-border bg-secondary p-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">{medical.title}</p>
                      <p className="text-xs text-muted-foreground">{medical.description}</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medicalConditions">{medical.conditionsLabel}</Label>
                      <Textarea
                        id="medicalConditions"
                        name="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={handleChange}
                        placeholder={medical.conditionsPlaceholder}
                        rows={3}
                        required
                        className="border-border bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medications">{medical.medicationsLabel}</Label>
                      <Textarea
                        id="medications"
                        name="medications"
                        value={formData.medications}
                        onChange={handleChange}
                        placeholder={medical.medicationsPlaceholder}
                        rows={3}
                        required
                        className="border-border bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="allergies">{medical.allergiesLabel}</Label>
                      <Textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder={medical.allergiesPlaceholder}
                        rows={2}
                        className="border-border bg-background text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="previousProcedures">{medical.proceduresLabel}</Label>
                      <Textarea
                        id="previousProcedures"
                        name="previousProcedures"
                        value={formData.previousProcedures}
                        onChange={handleChange}
                        placeholder={medical.proceduresPlaceholder}
                        rows={2}
                        className="border-border bg-background text-foreground"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="smokingStatus">{medical.smokingLabel}</Label>
                        <select
                          id="smokingStatus"
                          name="smokingStatus"
                          value={formData.smokingStatus}
                          onChange={handleChange}
                          className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">{medical.smokingOptions.select}</option>
                          <option value="No">{medical.smokingOptions.no}</option>
                          <option value="Occasionally">{medical.smokingOptions.occasional}</option>
                          <option value="Daily">{medical.smokingOptions.daily}</option>
                          <option value="Former smoker">{medical.smokingOptions.former}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="alcoholUse">{medical.alcoholLabel}</Label>
                        <select
                          id="alcoholUse"
                          name="alcoholUse"
                          value={formData.alcoholUse}
                          onChange={handleChange}
                          className="w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">{medical.alcoholOptions.select}</option>
                          <option value="Never">{medical.alcoholOptions.never}</option>
                          <option value="Social">{medical.alcoholOptions.social}</option>
                          <option value="Weekly">{medical.alcoholOptions.weekly}</option>
                          <option value="Frequent">{medical.alcoholOptions.frequent}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground shadow-lg hover:scale-[1.02]"
                  >
                    {t.consultation.form.submitButton}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    {t.consultation.disclaimer}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
