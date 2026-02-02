import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import MissionSection from "@/components/landing/MissionSection";
import WhoWeServeSection from "@/components/landing/WhoWeServeSection";
import ProgramsSection from "@/components/landing/ProgramsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WhoWeServeSection />
      <ProgramsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
