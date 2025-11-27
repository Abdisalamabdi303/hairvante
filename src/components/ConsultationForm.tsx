import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `New Consultation Request from HairVante Website:%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AAge: ${formData.age}%0APreferred Travel Window: ${formData.preferredTravelWindow || "Not specified"}%0A%0AClient Goal:%0A${formData.message || "Not provided"}%0A%0AMedical Background:%0AMedical Conditions: ${formData.medicalConditions || "None"}%0AMedications/Supplements: ${formData.medications || "None"}%0AAllergies: ${formData.allergies || "None"}%0APrevious Procedures: ${formData.previousProcedures || "None"}%0ASmoking: ${formData.smokingStatus || "Not provided"}%0AAlcohol Use: ${formData.alcoholUse || "Not provided"}`;
    
    window.open(`https://wa.me/905438611089?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Consultation Request Sent!",
      description: "Our team will contact you shortly via WhatsApp.",
    });
    
    setFormData(initialFormState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="consultation" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080604] via-[#050505] to-[#080604]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,216,140,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary/80">Consultation</p>
          <h2 className="font-playfair text-4xl text-white md:text-5xl">
            Get Your Free <span className="text-primary">Hair Analysis</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
            Share your goals and medical history—we’ll respond with a personalized plan within 24 hours.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Card className="rounded-[28px] border border-white/10 bg-white/5 text-white shadow-[0_35px_120px_-60px_rgba(0,0,0,1)]">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-white">Request Your Free Consultation</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form below and our patient coordinators will contact you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      required
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="30"
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-6 rounded-[20px] border border-white/15 bg-black/30 p-4">
                  <p className="text-sm uppercase tracking-[0.4em] text-white/60">Treatment Goals</p>
                  <div className="space-y-2">
                    <Label htmlFor="message">What would you like to achieve?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your hair loss pattern, timeline, and expectations..."
                      rows={4}
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTravelWindow">Preferred travel window</Label>
                    <Input
                      id="preferredTravelWindow"
                      name="preferredTravelWindow"
                      value={formData.preferredTravelWindow}
                      onChange={handleChange}
                      placeholder="e.g. 5-12 July or Flexible"
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div className="space-y-4 rounded-[20px] border border-white/15 bg-black/30 p-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-white/60">Medical background</p>
                    <p className="text-xs text-white/50">Shared in confidence—helps our surgeons tailor a safe treatment plan.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medicalConditions">Existing medical conditions *</Label>
                    <Textarea
                      id="medicalConditions"
                      name="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={handleChange}
                      placeholder="Include heart conditions, diabetes, autoimmune disorders, etc."
                      rows={3}
                      required
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="medications">Current medications or supplements *</Label>
                    <Textarea
                      id="medications"
                      name="medications"
                      value={formData.medications}
                      onChange={handleChange}
                      placeholder="List prescribed meds, over-the-counter supplements, and dosage if known."
                      rows={3}
                      required
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="allergies">Known allergies</Label>
                    <Textarea
                      id="allergies"
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      placeholder="Medication, latex, or anesthesia reactions."
                      rows={2}
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousProcedures">Previous surgeries or hair procedures</Label>
                    <Textarea
                      id="previousProcedures"
                      name="previousProcedures"
                      value={formData.previousProcedures}
                      onChange={handleChange}
                      placeholder="Mention any transplant, scalp procedures, or major surgeries."
                      rows={2}
                      className="border-white/20 bg-black/40 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="smokingStatus">Do you smoke?</Label>
                      <select
                        id="smokingStatus"
                        name="smokingStatus"
                        value={formData.smokingStatus}
                        onChange={handleChange}
                        className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select</option>
                        <option value="No">No</option>
                        <option value="Occasionally">Occasionally</option>
                        <option value="Daily">Daily</option>
                        <option value="Former smoker">Former smoker</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alcoholUse">Alcohol consumption</Label>
                      <select
                        id="alcoholUse"
                        name="alcoholUse"
                        value={formData.alcoholUse}
                        onChange={handleChange}
                        className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select</option>
                        <option value="Never">Never</option>
                        <option value="Social">Social</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Frequent">Frequent</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#f8d88d] to-[#b8802a] text-black shadow-[0_25px_80px_-40px_rgba(248,216,141,1)] hover:scale-[1.02]"
                >
                  Send Consultation Request
                </Button>

                <p className="text-center text-sm text-white/60">
                  By submitting this form, you agree to be contacted by HairVante via WhatsApp, email, or phone.
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {[
              {
                icon: Phone,
                title: "WhatsApp Support",
                description: "Available 24/7 for instant answers",
                content: (
                  <>
                    <a
                      href="https://wa.me/905438611089"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-primary hover:underline"
                    >
                      +90 543 861 10 89
                    </a>
                    <p className="mt-2 text-white/70">
                      Get immediate responses from our multilingual coordinators.
                    </p>
                  </>
                ),
              },
              {
                icon: Mail,
                title: "Email Consultation",
                description: "Detailed responses within 24 hours",
                content: (
                  <>
                    <a href="mailto:info@hairvante.com" className="text-lg font-semibold text-primary hover:underline">
                      info@hairvante.com
                    </a>
                    <p className="mt-2 text-white/70">
                      Send photos for preliminary analysis and receive a tailored proposal.
                    </p>
                  </>
                ),
              },
              {
                icon: MessageSquare,
                title: "What to Expect",
                description: "Our consultation process",
                content: (
                  <div className="space-y-3 text-white/70">
                    {["Free hair analysis with photos", "Personalized treatment plan", "Detailed cost breakdown", "Get every question answered"].map(
                      (step, idx) => (
                        <div key={step} className="flex items-start gap-2">
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                            {idx + 1}
                          </div>
                          <p className="text-sm">{step}</p>
                        </div>
                      ),
                    )}
                  </div>
                ),
              },
            ].map((card) => (
              <Card
                key={card.title}
                className="rounded-[24px] border border-white/10 bg-white/5 text-white shadow-[0_25px_80px_-60px_rgba(0,0,0,1)]"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <card.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{card.title}</CardTitle>
                      <CardDescription className="text-white/70">{card.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>{card.content}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
