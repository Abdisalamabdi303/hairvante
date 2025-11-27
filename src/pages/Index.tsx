import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Results from "@/components/Results";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero />
      <WhyChoose />
      <Results />
      <Packages />
      <Process />
      <ConsultationForm />
      <Footer />
    </main>
  );
};

export default Index;
