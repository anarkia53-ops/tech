import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PartnersStrip from "@/components/PartnersStrip";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhySection from "@/components/WhySection";
import TechPartnersSection from "@/components/TechPartnersSection";
import SuccessPartnersSection from "@/components/SuccessPartnersSection";
import PresenceSection from "@/components/PresenceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="w-full bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Success Partners Strip */}
        <PartnersStrip />

        {/* About Section */}
        <AboutSection />

        {/* Integrated Solutions */}
        <SolutionsSection />

        {/* Portfolio */}
        <PortfolioSection />

        {/* Why Techno Door */}
        <WhySection />

        {/* Technology Partners */}
        <TechPartnersSection />

        {/* Success Partners */}
        <SuccessPartnersSection />

        {/* Our Presence */}
        <PresenceSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
