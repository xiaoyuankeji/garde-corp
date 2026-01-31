import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Phone, CheckCircle, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Aluminium Thermolaqué | Design & Couleurs | Nord",
  description: "Garde-corps en aluminium thermolaqué sur mesure. Léger, résistant et personnalisable (RAL). Fabrication française garantie 10 ans.",
};

const specs = [
  { label: "Matériau", value: "Alliage Aluminium 6060 T6" },
  { label: "Traitement", value: "Thermolaquage Qualicoat" },
  { label: "Coloris", value: "Nuancier RAL (+200 teintes)" },
  { label: "Remplissage", value: "Barreaudage, Tôle perforée, Verre" },
  { label: "Entretien", value: "Nul (autolavant à la pluie)" },
  { label: "Résistance", value: "Conforme NF P01-012" },
  { label: "Garantie", value: "10 ans (structure) / 10 ans (laquage)" },
  { label: "Poids", value: "Léger (~10kg/ml) idéal rénovation" },
];

const faqs = [
  {
    question: "L'aluminium est-il aussi solide que l'acier ?",
    answer: "Oui, pour un usage de garde-corps, l'aluminium est dimensionné pour offrir la même résistance mécanique que l'acier (conforme aux normes de sécurité). L'avantage est qu'il est beaucoup plus léger, ce qui exerce moins de contrainte sur votre structure (balcon ancien par exemple)."
  },
  {
    question: "La peinture va-t-elle s'écailler avec le temps ?",
    answer: "Non. Nous utilisons un procédé de thermolaquage certifié Qualicoat. La poudre est cuite au four à 200°C, ce qui la fusionne avec le métal. C'est le traitement le plus durable existant pour l'extérieur, garanti 10 ans contre le décollement."
  },
  {
    question: "Puis-je avoir la même couleur que mes fenêtres ?",
    answer: "Tout à fait ! Nous pouvons thermolaquer votre garde-corps dans n'importe quel code RAL. Si vos menuiseries sont en Gris Anthracite 7016 (le standard actuel), nous vous fournirons exactement la même teinte pour une harmonie parfaite."
  }
];

export default function GardeCorpsAluminiumPage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Aluminium" 
        description="Garde-corps en aluminium thermolaqué sur mesure."
        category="Garde-corps Aluminium"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { name: "Garde-Corps", href: "/garde-corps" },
            { name: "Aluminium", href: "/garde-corps-aluminium" }
          ]} />
          
          {/* Hero */}
          <section className="py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-200 text-zinc-800 text-sm font-bold mb-6">
                  <Palette className="h-4 w-4" />
                  Design & Couleurs
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Garde-Corps Aluminium
                  <span className="block text-zinc-500 text-2xl md:text-3xl mt-2 font-normal">
                    La Liberté du Style
                  </span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  L&apos;aluminium est le champion de la personnalisation. 
                  Léger, inaltérable et disponible dans toutes les couleurs, 
                  il s&apos;harmonise parfaitement avec vos menuiseries modernes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" className="bg-zinc-700 hover:bg-zinc-800 shadow-zinc-200" asChild>
                    <Link href="/devis-garde-corps" className="gap-2">
                      Devis Alu Gratuit
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
                  src="/images/alu-tole.jpg"
                  alt="Garde-corps aluminium gris anthracite moderne"
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
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">Caractéristiques Alu</h2>
                  <div className="grid md:grid-cols-2 gap-y-4 gap-x-12">
                    {specs.map((spec, idx) => (
                      <div key={idx} className="flex flex-col border-b border-slate-100 pb-4 last:border-0">
                        <span className="text-sm text-slate-500 font-medium mb-1">{spec.label}</span>
                        <span className="text-slate-900 font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-5 bg-zinc-800 p-8 lg:p-12 text-white flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6">Pourquoi l&apos;Aluminium ?</h3>
                  <ul className="space-y-4">
                    {[
                      "Personnalisation totale (couleur RAL)",
                      "Aucun entretien, un coup d'éponge suffit",
                      "Idéal pour la rénovation (poids plume)",
                      "Matériau 100% recyclable",
                      "Rapport qualité/prix excellent"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-zinc-400 flex-shrink-0" />
                        <span className="text-zinc-100">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Colors Grid */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Les Teintes Favorites</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Gris Anthracite", ral: "RAL 7016", color: "bg-[#383E42]" },
                { name: "Blanc Pur", ral: "RAL 9010", color: "bg-[#FFFFFF] border" },
                { name: "Noir Profond", ral: "RAL 9005", color: "bg-[#0E0E10]" },
                { name: "Gris Quartz", ral: "RAL 7039", color: "bg-[#6C6960]" },
              ].map((c, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className={`w-full h-24 rounded-xl ${c.color} mb-4 mx-auto`} />
                  <h3 className="font-bold text-slate-900">{c.name}</h3>
                  <p className="text-slate-500 text-sm">{c.ral}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-500">
              Et plus de 200 autres couleurs disponibles sur demande.
            </p>
          </section>

          {/* Styles Gallery (New Section) */}
          <section className="py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Styles & Personnalisation</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Barreaudage Vertical", 
                  desc: "Le style traditionnel épuré", 
                  img: "/images/inox-barres.jpg" 
                },
                { 
                  title: "Tôle Perforée", 
                  desc: "Design contemporain & intimité", 
                  img: "/images/alu-tole.jpg" 
                },
                { 
                  title: "Vitrage sur Profil Alu", 
                  desc: "Mix Matière moderne", 
                  img: "/images/verre-points.jpg" 
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
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-zinc-600 transition-colors">{style.title}</h3>
                  <p className="text-slate-500 text-sm">{style.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-12">
            <div className="bg-gradient-to-br from-zinc-700 to-slate-800 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-zinc-900/20">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Votre couleur, Votre style
                </h2>
                <p className="text-zinc-200 mb-10 max-w-2xl mx-auto text-lg">
                  Demandez un devis pour un garde-corps aluminium parfaitement assorti à votre façade. 
                  Échantillons de couleurs disponibles lors de la visite technique.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="xl" className="bg-white text-zinc-900 hover:bg-zinc-50 shadow-xl" asChild>
                    <Link href="/devis-garde-corps" className="gap-2">
                      Demander mon Devis
                      <Palette className="h-5 w-5" />
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
