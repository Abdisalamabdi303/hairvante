import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Microscope, Scissors, Home, CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Free Consultation & Assessment",
      description: "Begin your journey with a comprehensive online consultation. Our specialists analyze your hair condition, discuss your expectations, and create a personalized treatment plan. We'll answer all your questions and provide a detailed cost breakdown with no hidden fees.",
      duration: "30-45 minutes"
    },
    {
      icon: Microscope,
      title: "Pre-Operative Preparation",
      description: "Upon arrival in Turkey, you'll undergo thorough blood tests and scalp analysis at our state-of-the-art facility. Our medical team reviews your health status, finalizes the treatment strategy, and ensures you're fully prepared and comfortable for the procedure.",
      duration: "1-2 hours"
    },
    {
      icon: Scissors,
      title: "Hair Transplant Procedure",
      description: "Using advanced FUE or DHI techniques, our expert surgeons carefully extract healthy follicles and implant them in the recipient areas. The procedure is performed under local anesthesia with minimal discomfort. You can relax, watch TV, or listen to music throughout the process.",
      duration: "6-8 hours"
    },
    {
      icon: Home,
      title: "Recovery & Aftercare",
      description: "After the procedure, we provide detailed aftercare instructions and your premium care kit. You'll rest comfortably in your hotel with 24/7 medical support available. The first wash is performed at our clinic the next day by our specialized team to ensure proper healing.",
      duration: "3-5 days stay"
    },
    {
      icon: CheckCircle2,
      title: "Follow-Up & Results",
      description: "Your journey doesn't end when you return home. We provide 12 months of follow-up consultations via video calls, monitoring your progress at key milestones. Full results are typically visible within 12-18 months as your new hair grows naturally and permanently.",
      duration: "12-18 months"
    }
  ];

  return (
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080604] via-[#050505] to-[#080604]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,216,140,0.09),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary/80">Process</p>
          <h2 className="font-playfair text-4xl text-white md:text-5xl">
            Your Hair Restoration <span className="text-primary">Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
            Every milestone is choreographed for ease—from the first consultation to the final follow-up.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="rounded-[28px] border border-white/10 bg-white/5 text-white shadow-[0_35px_120px_-60px_rgba(0,0,0,1)]"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <CardTitle className="font-playfair text-2xl text-white">{step.title}</CardTitle>
                    </div>
                    <span className="text-sm font-semibold text-primary">{step.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="pl-[72px] text-white/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_-60px_rgba(0,0,0,1)]">
            <h3 className="font-playfair text-3xl text-white md:text-4xl">Ready to Start Your Transformation?</h3>
            <p className="mx-auto mt-4 max-w-3xl text-white/70">
              Our patient coordinators are available 24/7 to answer your questions and schedule your free consultation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/905438611089"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f8d88d] to-[#b8802a] px-10 py-3 text-sm font-semibold text-black shadow-[0_25px_80px_-40px_rgba(248,216,141,1)] transition hover:scale-105"
              >
                Contact via WhatsApp
              </a>
              <button
                onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Request Free Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
