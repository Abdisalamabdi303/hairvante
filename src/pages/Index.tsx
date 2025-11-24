import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChoose />
      <Packages />
      <Process />
      <ConsultationForm />
      <Footer />
    </main>
  );
};

export default Index;
