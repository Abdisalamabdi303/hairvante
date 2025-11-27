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
    <section className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080503] via-[#050505] to-[#0c0805]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,216,140,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.55em] text-primary/80">Hairvante Difference</p>
          <h2 className="font-playfair text-4xl font-bold text-white md:text-5xl">
            Why Choose <span className="text-primary">HairVante</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            When it comes to your confidence, you deserve a clinic that blends surgical excellence with concierge-level care.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:border-primary/40"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-white/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {[clinicImage, medicalTeamImage].map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_35px_120px_-50px_rgba(0,0,0,1)]"
              >
                <img
                  src={image}
                  alt={index === 0 ? "Modern HairVante clinic interior" : "HairVante medical team"}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-10 text-center shadow-[0_35px_120px_-60px_rgba(0,0,0,1)]">
          <h3 className="font-playfair text-3xl text-white md:text-4xl">Join Thousands of Satisfied Patients</h3>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
            With more than a decade of refinement, HairVante unites medical mastery with hospitality so your entire journey
            feels effortless.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { label: "Successful Procedures", value: "10,000+" },
              { label: "Patient Satisfaction", value: "98%" },
              { label: "Years of Excellence", value: "15+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
