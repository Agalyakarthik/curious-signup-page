import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Index;
