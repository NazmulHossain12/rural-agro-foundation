import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactCounter } from "@/components/home/ImpactCounter";
import { IntroSection } from "@/components/home/IntroSection";
import { FocusAreas } from "@/components/home/FocusAreas";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ImpactCounter />
      <IntroSection />
      <FocusAreas />
      <CTASection />
    </Layout>
  );
};

export default Index;
