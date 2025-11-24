import { Award, Users, Sparkles, HeadphonesIcon } from "lucide-react";
import clinicImage from "@/assets/clinic-interior.jpg";
import medicalTeamImage from "@/assets/medical-team.jpg";

const WhyChoose = () => {
  const features = [
    {
      icon: Users,
      title: "Experienced Medical Specialists",
      description: "Our surgeons are internationally certified experts with over 15 years of experience exclusively in hair restoration. Each procedure is performed with meticulous attention to detail, ensuring natural-looking results that last a lifetime."
    },
    {
      icon: Sparkles,
      title: "Cutting-Edge Techniques & Technology",
      description: "We utilize the latest FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation) methods with state-of-the-art equipment. Our advanced technology ensures minimal scarring, faster recovery, and maximum graft survival rates."
    },
    {
      icon: Award,
      title: "Personalized Treatment Plans",
      description: "Every patient is unique, and so is our approach. We conduct thorough consultations and hair analysis to design a customized treatment plan tailored to your specific needs, hair type, and aesthetic goals for optimal results."
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Multilingual Patient Support",
      description: "Communication is key to your comfort and peace of mind. Our dedicated patient coordinators provide round-the-clock support in your preferred language, guiding you through every step from initial consultation to post-operative care."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose <span className="text-primary">HAIRVANTE</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            When it comes to your appearance and confidence, you deserve nothing but the best. 
            Here's why thousands of satisfied patients have chosen HairVante for their transformation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
              <img 
                src={clinicImage} 
                alt="Modern HairVante clinic interior with state-of-the-art equipment" 
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
              <img 
                src={medicalTeamImage} 
                alt="Professional HairVante medical team of hair transplant specialists" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Join Thousands of Satisfied Patients
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            With over 10,000 successful procedures and a 98% patient satisfaction rate, HairVante has established itself 
            as Turkey's most trusted name in hair restoration. Our commitment to excellence, combined with our 
            comprehensive care approach, ensures that your journey to natural-looking, permanent results is both 
            comfortable and successful.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Successful Procedures</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Patient Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
