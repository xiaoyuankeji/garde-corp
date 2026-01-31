import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { COMPANY, MATERIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Balcon Sur Mesure | Inox, Verre, Alu | Nord",
  description: "Garde-corps pour balcon sur mesure : inox, verre ou aluminium. Sécurisez votre balcon avec style. Pose au sol ou nez de dalle. Devis gratuit.",
  keywords: ["garde-corps balcon", "garde corps balcon", "balustrade balcon", "rambarde balcon", "garde-corps balcon inox", "garde-corps balcon verre"],
};

const features = [
  { title: "Hauteur 1m", description: "Conforme à la norme NF P01-012" },
  { title: "Pose au Sol", description: "Fixation sur la surface du balcon" },
  { title: "Nez de Dalle", description: "Fixation en façade de la dalle" },
  { title: "Vue Dégagée", description: "Profitez de votre extérieur" },
];

const faqs = [
  {
    question: "Quelle hauteur pour un garde-corps de balcon ?",
    answer: "La hauteur réglementaire d'un garde-corps de balcon est de 1 mètre minimum lorsque la hauteur de chute dépasse 1 mètre. Cette norme (NF P01-012) est obligatoire pour garantir la sécurité."
  },
  {
    question: "Quelle différence entre pose au sol et nez de dalle ?",
    answer: "La pose au sol fixe le garde-corps sur la surface du balcon (nécessite de l'espace). La pose en nez de dalle fixe le garde-corps sur la tranche de la dalle, libérant l'espace au sol. Le choix dépend de votre configuration."
  },
  {
    question: "Quel matériau choisir pour un balcon ?",
    answer: "Pour un balcon, l'inox et le verre offrent le meilleur rendu esthétique. L'aluminium est une alternative économique. En bord de mer, privilégiez l'inox 316L. Le verre maximise la luminosité."
  }
];

export default function GardeCorpsBalconPage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Balcon" 
        description="Garde-corps pour balcon sur mesure en inox, verre ou aluminium."
        category="Garde-corps Balcon"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: "Garde-Corps", href: "/garde-corps" },
          { name: "Balcon", href: "/garde-corps-balcon" }
        ]} />
        
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                🏠 Usage Balcon
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Garde-Corps Balcon
                <span className="block text-blue-500 text-2xl mt-2 font-normal">
                  Sécurité & Design pour Votre Balcon
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sécurisez votre balcon avec un garde-corps sur mesure. 
                Inox, verre ou aluminium : nous adaptons le design à votre façade.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">{feature.title}</p>
                      <p className="text-sm text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/devis-garde-corps" className="gap-2">
                    Devis Garde-Corps Balcon
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="phone" size="lg" asChild>
                  <a href={COMPANY.phoneLink} className="gap-2">
                    <Phone className="h-5 w-5" />
                    {COMPANY.phone}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/terrasse-hero.jpg"
                alt="Balcon moderne avec garde-corps en verre et inox"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Materials for Balcony */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Matériaux pour Balcon
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {MATERIALS.map((material) => (
              <Link key={material.id} href={`/${material.slug}`}>
                <Card className="h-full card-hover overflow-hidden group">
                  <div className="relative h-48 w-full">
                    <Image
                      src={material.image || ""}
                      alt={`Garde-corps balcon en ${material.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 text-lg group-hover:text-blue-600 transition-colors">
                      {material.name}
                    </h3>
                    <p className="text-sm text-slate-600">{material.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Questions sur les Garde-Corps Balcon
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 border-t">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Sécurisez Votre Balcon
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Obtenez un devis personnalisé pour votre garde-corps de balcon. 
              Mesures, fabrication et pose incluses.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link href="/devis-garde-corps" className="gap-2">
                Demander un Devis Gratuit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
