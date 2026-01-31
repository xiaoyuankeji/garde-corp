import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Phone, CheckCircle, Award, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Inox Sur Mesure | Acier Inoxydable 304/316 | Nord",
  description: "Garde-corps en inox sur mesure : acier inoxydable 304 ou 316 pour environnements marins. Design moderne, durabilité exceptionnelle. Devis gratuit, fabrication française.",
  keywords: [
    "garde-corps inox",
    "garde-corps inox 316",
    "garde-corps inox 304",
    "garde-corps inox lille",
    "garde-corps inox nord",
    "garde-corps inox sur mesure"
  ],
};

const specs = [
  { label: "Matériau", value: "Acier Inoxydable (Inox)" },
  { label: "Nuances", value: "AISI 304 (Intérieur) ou 316L (Extérieur/Marin)" },
  { label: "Finitions", value: "Brossé (Mat), Poli Miroir (Brillant)" },
  { label: "Diamètre tubes", value: "42.4 mm (Standard) ou 48.3 mm" },
  { label: "Remplissage", value: "Câbles, Barres, Verre, Tôle" },
  { label: "Type de pose", value: "À la française (sol) ou à l'anglaise (latéral)" },
  { label: "Norme", value: "NF P01-012" },
  { label: "Garantie", value: "10 ans (Anti-corrosion)" },
];

const faqs = [
  {
    question: "Quelle est la différence entre l'inox 304 et 316 ?",
    answer: "L'inox 304 est le plus courant, idéal pour les environnements intérieurs et extérieurs standards. L'inox 316L contient du molybdène qui lui confère une meilleure résistance à la corrosion, indispensable pour les environnements marins (bord de mer) ou les piscines."
  },
  {
    question: "Quelles finitions sont disponibles pour l'inox ?",
    answer: "Nous proposons plusieurs finitions : brossé (le plus courant, aspect mat moderne), poli miroir (brillant, plus salissant), satiné, et même des finitions colorées par traitement PVD (or, noir, bronze)."
  },
  {
    question: "L'inox rouille-t-il ?",
    answer: "L'acier inoxydable est très résistant à la corrosion mais n'est pas totalement inoxydable. Des traces de rouille peuvent apparaître en cas de contact prolongé avec des particules de fer ou en environnement très agressif. Un entretien régulier et le choix du bon grade (316L en bord de mer) préviennent ce problème."
  }
];

export default function GardeCorpsInoxPage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Inox" 
        description="Garde-corps en acier inoxydable 304 ou 316 sur mesure."
        category="Garde-corps Inox"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { name: "Garde-Corps", href: "/garde-corps" },
            { name: "Inox", href: "/garde-corps-inox" }
          ]} />
          
          {/* Hero */}
          <section className="py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-bold mb-6">
                  <Award className="h-4 w-4" />
                  Le Choix Durable
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Garde-Corps Inox
                  <span className="block text-slate-500 text-2xl md:text-3xl mt-2 font-normal">
                    L&apos;Élégance Intemporelle
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  L&apos;acier inoxydable est le matériau roi du garde-corps moderne. 
                  Il allie une robustesse à toute épreuve à une esthétique épurée qui 
                  ne se démode jamais. Idéal pour l&apos;intérieur comme l&apos;extérieur.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" asChild>
                    <Link href="/devis-garde-corps" className="gap-2">
                      Devis Inox Gratuit
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
              
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/inox-hero.jpg"
                  alt="Garde-corps inox moderne"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Specs Table */}
          <section className="py-12">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Caractéristiques Techniques</h2>
                  <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                    {specs.map((spec, idx) => (
                      <div key={idx} className="flex flex-col border-b border-slate-100 pb-4 last:border-0">
                        <span className="text-sm text-slate-500 font-medium mb-1">{spec.label}</span>
                        <span className="text-slate-900 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 bg-slate-900 p-8 lg:p-12 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Pourquoi choisir l&apos;Inox ?</h3>
                  <ul className="space-y-4">
                    {[
                      "Ne nécessite aucun entretien (ou presque)",
                      "Résistance mécanique exceptionnelle",
                      "S'adapte à tous les styles (bois, pierre, béton)",
                      "100% recyclable et écologique",
                      "Investissement durable (+30 ans)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Styles de Remplissage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Inox + Câbles", desc: "Aérien et économique", img: "/images/inox-cables.jpg" },
                { title: "Inox + Verre", desc: "Transparence et sécurité", img: "/images/inox-verre.jpg" },
                { title: "Inox + Barres", desc: "Classique et robuste", img: "/images/inox-barres.jpg" },
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
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">{style.title}</h3>
                  <p className="text-slate-500 text-sm">{style.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Votre projet en Inox commence ici
                </h2>
                <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                  Obtenez un devis précis incluant la fabrication sur mesure et la livraison. 
                  Nos experts valident la faisabilité technique de votre projet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl" className="shadow-xl shadow-orange-500/20" asChild>
                    <Link href="/devis-garde-corps" className="gap-2">
                      Configurer mon Garde-Corps
                      <Settings className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
