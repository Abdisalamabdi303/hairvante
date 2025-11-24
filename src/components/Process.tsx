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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Hair Restoration <span className="text-primary">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From consultation to final results, we guide you through every step of your transformation 
            with expert care and unwavering support.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                      <CardTitle className="text-2xl font-playfair">{step.title}</CardTitle>
                    </div>
                    <span className="text-sm text-primary font-semibold">{step.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed pl-[72px]">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Our patient coordinators are available 24/7 to answer your questions and schedule your free consultation. 
              Take the first step towards regaining your confidence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905438611089" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact via WhatsApp
              </a>
              <button 
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg transition-all"
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
