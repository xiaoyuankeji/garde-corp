import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { MaterialsSection } from "@/components/home/MaterialsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Garde-Corps Inox Sur Mesure | Nord & Lille",
  description: "Fabricant garde-corps inox sur mesure (304/316) à Lille et dans le Nord. Verre, aluminium, pose professionnelle, devis gratuit sous 24h.",
  keywords: [
    "garde-corps inox",
    "garde-corps inox lille",
    "garde-corps inox nord",
    "garde-corps sur mesure",
    "garde-corps verre",
    "garde-corps aluminium",
    "devis garde-corps"
  ],
  openGraph: {
    title: "Garde-Corps Inox Sur Mesure | Nord & Lille",
    description: "Spécialiste garde-corps inox sur mesure à Lille et dans le Nord. Verre, aluminium, pose professionnelle.",
  },
};

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
