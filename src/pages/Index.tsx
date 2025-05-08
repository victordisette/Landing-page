import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import ForYouSection from "@/components/sections/ForYouSection";
import ContactSection from "@/components/sections/ContactSection";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <BenefitsSection />
        <HowItWorksSection />
        <PricingSection />
        <ForYouSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
