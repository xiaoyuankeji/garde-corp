import { HeroSection } from "@/components/home/HeroSection";
import { MaterialsSection } from "@/components/home/MaterialsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MaterialsSection />
      <UseCasesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
