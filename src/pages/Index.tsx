import NavigationBar from "@/components/portfolio/NavigationBar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import CareerHighlights from "@/components/portfolio/CareerHighlights";
import BuildingNow from "@/components/portfolio/BuildingNow";
import WorkProducts from "@/components/portfolio/WorkProducts";
import Testimonials from "@/components/portfolio/Testimonials";
import Publications from "@/components/portfolio/Publications";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      <main>
        <HeroSection />
        <BuildingNow />
        <AboutSection />
        <CareerHighlights />
        <WorkProducts />
        <Testimonials />
        <Publications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
