import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MusicSection from "@/components/MusicSection";
import ReleasesSection from "@/components/ReleasesSection";
import AboutSection from "@/components/AboutSection";
import TourSection from "@/components/TourSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <MusicSection />
      <ReleasesSection />
      <AboutSection />
      <TourSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;