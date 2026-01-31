import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Phone, CheckCircle, Sun, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Verre Sur Mesure | Tout Verre & Profil | Nord",
  description: "Garde-corps en verre feuilleté trempé. Transparence totale, sécurité maximale. Idéal balcon, terrasse, piscine. Devis gratuit.",
};

const specs = [
  { label: "Type de Verre", value: "Feuilleté Trempé (Sécurit)" },
  { label: "Épaisseurs", value: "88.2 (16.76mm) à 1212.2 (25.52mm)" },
  { label: "Fixation", value: "Profil sol (U), Pinces, Points" },
  { label: "Transparence", value: "Clair, Extra-Clair, Dépoli, Fumé" },
  { label: "Main courante", value: "Optionnelle (Inox ou Bois)" },
  { label: "Résistance", value: "1KN à 3KN (Lieux publics)" },
  { label: "Norme", value: "NF P01-012" },
  { label: "Garantie", value: "10 ans" },
];

const faqs = [
  {
    question: "Le verre est-il assez solide pour un garde-corps ?",
    answer: "Oui, c'est même l'un des remplissages les plus sûrs. Nous utilisons du verre feuilleté trempé : deux feuilles de verre trempé (5x plus résistant) collées par des films PVB. En cas de choc extrême, le verre étoilé reste en place, empêchant toute chute."
  },
  {
    question: "Est-ce difficile à nettoyer ?",
    answer: "Contrairement aux idées reçues, le verre extérieur se salit moins vite grâce à la pluie. Un nettoyage 2 à 3 fois par an avec de l'eau et une raclette suffit. Nous proposons aussi une option 'traitement nano' auto-nettoyant."
  },
  {
    question: "Peut-on l'installer en bord de mer ?",
    answer: "C'est le matériau idéal pour le bord de mer ! Le verre est insensible au sel et aux embruns, contrairement au métal qui peut s'oxyder. Il faut juste prévoir des fixations en Inox 316L ou Aluminium anodisé."
  }
];

export default function GardeCorpsVerrePage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Verre" 
        description="Garde-corps en verre feuilleté trempé sur mesure."
        category="Garde-corps Verre"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { name: "Garde-Corps", href: "/garde-corps" },
            { name: "Verre", href: "/garde-corps-verre" }
          ]} />
          
          {/* Hero */}
          <section className="py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-800 text-sm font-bold mb-6">
                  <Sun className="h-4 w-4" />
                  Luminosité & Design
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Garde-Corps Verre
                  <span className="block text-sky-600 text-2xl md:text-3xl mt-2 font-normal">
                    La Transparence Absolue
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Sublimez votre vue et inondez votre intérieur de lumière. 
                  Le garde-corps en verre offre une sécurité maximale sans aucun obstacle visuel. 
                  Le choix préferé des architectes contemporains.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" className="bg-sky-600 hover:bg-sky-700 shadow-sky-200" asChild>
                    <Link href="/devis-garde-corps" className="gap-2">
                      Devis Verre Gratuit
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
                  src="/images/verre-hero.jpg"
                  alt="Garde-corps verre terrasse"
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Fiche Technique</h2>
                  <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                    {specs.map((spec, idx) => (
                      <div key={idx} className="flex flex-col border-b border-slate-100 pb-4 last:border-0">
                        <span className="text-sm text-slate-500 font-medium mb-1">{spec.label}</span>
                        <span className="text-slate-900 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 bg-sky-900 p-8 lg:p-12 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Les atouts du Verre</h3>
                  <ul className="space-y-4">
                    {[
                      "Vue panoramique préservée à 100%",
                      "Apport de lumière naturelle maximal",
                      "Barrière efficace contre le vent",
                      "Aucun point d'appui pour l'escalade (sécurité enfant)",
                      "Design ultra-moderne et valorisant"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-sky-400 flex-shrink-0" />
                        <span className="text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Systems Grid */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Nos Systèmes de Fixation</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Profil de Sol (U)", desc: "Le plus épuré. Le verre semble sortir du sol.", img: "/images/verre-sol.jpg" },
                { title: "Pinces & Poteaux", desc: "Style marin. Poteaux inox avec pinces à verre.", img: "/images/verre-points.jpg" },
                { title: "Points de Fixation", desc: "Fixation latérale par entretoises (boutons).", img: "/images/verre-points.jpg" },
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
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-sky-600 transition-colors">{style.title}</h3>
                  <p className="text-slate-500 text-sm">{style.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-12">
            <div className="bg-gradient-to-br from-sky-800 to-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-sky-900/20">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Envie de clarté ?
                </h2>
                <p className="text-sky-100 mb-10 max-w-2xl mx-auto text-lg">
                  Contactez-nous pour étudier la faisabilité de votre projet verre. 
                  Nos techniciens calculent l&apos;épaisseur nécessaire pour votre sécurité.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl" className="bg-white text-sky-900 hover:bg-sky-50 shadow-xl" asChild>
                    <Link href="/devis-garde-corps" className="gap-2">
                      Demander un Devis Verre
                      <Maximize className="h-5 w-5" />
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
