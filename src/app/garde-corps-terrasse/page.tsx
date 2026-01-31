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
  title: "Garde-Corps Terrasse Sur Mesure | Inox, Verre, Alu | Nord",
  description: "Garde-corps pour terrasse sur mesure. Sécurisez votre terrasse en hauteur avec un garde-corps design en inox, verre ou aluminium. Devis gratuit.",
  keywords: ["garde-corps terrasse", "garde corps terrasse", "balustrade terrasse", "rambarde terrasse", "garde-corps terrasse bois"],
};

const faqs = [
  {
    question: "Un garde-corps est-il obligatoire sur une terrasse ?",
    answer: "Oui, un garde-corps est obligatoire dès que la hauteur de chute dépasse 1 mètre. C'est le cas pour la plupart des terrasses en étage ou surélevées. La hauteur minimale du garde-corps doit être de 1 mètre."
  },
  {
    question: "Quel garde-corps pour une terrasse en bois ?",
    answer: "Pour une terrasse en bois, l'inox ou l'aluminium s'intègrent parfaitement. Le verre apporte de la modernité et préserve la luminosité. Nous adaptons les fixations à la structure de votre terrasse."
  },
  {
    question: "Peut-on installer un garde-corps sur une terrasse existante ?",
    answer: "Oui, nous intervenons sur les terrasses existantes. Une visite technique permet d'évaluer la structure et de définir le meilleur mode de fixation (au sol ou latéral selon les cas)."
  }
];

export default function GardeCoorpsTerassePage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Terrasse" 
        description="Garde-corps pour terrasse sur mesure. Protection et design."
        category="Garde-corps Terrasse"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: "Garde-Corps", href: "/garde-corps" },
          { name: "Terrasse", href: "/garde-corps-terrasse" }
        ]} />
        
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                ☀️ Usage Terrasse
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Garde-Corps Terrasse
                <span className="block text-emerald-500 text-2xl mt-2 font-normal">
                  Profitez de Votre Extérieur en Sécurité
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Sécurisez votre terrasse avec un garde-corps esthétique. 
                Solutions sur mesure pour terrasses en bois, béton ou sur pilotis.
              </p>
              
              <div className="space-y-3 mb-8">
                {["Adaptation à tous types de terrasses", "Vue dégagée préservée", "Matériaux résistants aux intempéries", "Pose professionnelle garantie"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/devis-garde-corps" className="gap-2">
                    Devis Garde-Corps Terrasse
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
                alt="Terrasse avec garde-corps verre et vue dégagée"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Gallery Section (New) */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Inspirations Terrasse</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Terrasse Bois",
                desc: "Harmonie naturelle",
                img: "/images/terrasse-bois.jpg"
              },
              {
                title: "Toit Terrasse",
                desc: "Vue imprenable",
                img: "/images/terrasse-toit.jpg"
              },
              {
                title: "Terrasse Piscine",
                desc: "Sécurité maximale",
                img: "/images/terrasse-piscine.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-200 text-sm">{item.desc}</p>
                </div>
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
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Sécurisez Votre Terrasse
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Devis gratuit pour votre garde-corps de terrasse. 
              Nous nous adaptons à votre configuration.
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
