import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Escalier & Main Courante | Inox, Verre | Nord",
  description: "Garde-corps et main courante pour escalier intérieur ou extérieur. Inox, verre, aluminium. Adaptation aux angles et paliers. Devis gratuit.",
  keywords: ["garde-corps escalier", "main courante escalier", "rampe escalier", "garde-corps escalier inox", "main courante inox"],
};

const features = [
  { title: "Main Courante", description: "Obligatoire pour plus de 3 marches" },
  { title: "Angles Adaptés", description: "Sur mesure pour chaque virage" },
  { title: "Intérieur/Extérieur", description: "Solutions pour tous escaliers" },
  { title: "Normes ERP", description: "Conformité accessibilité" },
];

const faqs = [
  {
    question: "Une main courante est-elle obligatoire sur un escalier ?",
    answer: "Oui, une main courante est obligatoire dès que l'escalier comporte plus de 3 marches. Elle doit être continue, à une hauteur comprise entre 0,80m et 1m, et dépasser la première et dernière marche."
  },
  {
    question: "Quelle différence entre garde-corps et main courante ?",
    answer: "La main courante est la partie supérieure que l'on saisit pour se tenir. Le garde-corps est l'ensemble de la barrière de protection. Un garde-corps inclut généralement une main courante à son sommet."
  },
  {
    question: "Comment fixer un garde-corps sur un escalier ?",
    answer: "Selon la configuration : fixation sur les marches, sur la trémie, ou sur le mur latéral. La fixation murale est souvent privilégiée pour libérer l'espace sur les marches."
  }
];

export default function GardeCorpsEscalierPage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Escalier" 
        description="Garde-corps et main courante pour escalier sur mesure."
        category="Garde-corps Escalier"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: "Garde-Corps", href: "/garde-corps" },
          { name: "Escalier", href: "/garde-corps-escalier" }
        ]} />
        
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
                🪜 Usage Escalier
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Garde-Corps Escalier
                <span className="block text-purple-500 text-2xl mt-2 font-normal">
                  Main Courante & Protection
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sécurisez vos escaliers avec des garde-corps et mains courantes sur mesure. 
                Adaptation parfaite aux angles, paliers et virages.
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
                    Devis Garde-Corps Escalier
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
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-purple-100">
              <Image
                src="/images/escalier-ramp.jpg"
                alt="Escalier moderne avec garde-corps design"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Gallery Preview (New Section) */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Solutions pour Escaliers</h2>
          <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Fixation Latérale", 
                  desc: "Gain de place sur la marche", 
                  img: "/images/escalier-side.jpg" 
                },
                { 
                  title: "Rampant Inox", 
                  desc: "Suivi parfait de la pente", 
                  img: "/images/escalier-ramp.jpg" 
                },
                { 
                  title: "Main Courante Murale", 
                  desc: "Sécurité discrète", 
                  img: "/images/inox-barres.jpg" 
                },
              ].map((style, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-md relative">
                    <Image
                      src={style.img}
                      alt={style.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-purple-600 transition-colors">{style.title}</h3>
                  <p className="text-slate-500 text-sm">{style.desc}</p>
                </div>
              ))}
            </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Questions Fréquentes
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
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Sécurisez Vos Escaliers
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Devis gratuit pour votre garde-corps ou main courante d&apos;escalier.
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
