"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Vos garde-corps respectent-ils les normes françaises ?",
    answer: "Absolument. Tous nos garde-corps sont conçus pour respecter strictement la norme NF P01-012 (dimensions et résistance) et NF P01-013 (essais). Pour les piscines, nos barrières sont conformes à la norme NF P90-306. Nous fournissons les certificats de conformité sur demande."
  },
  {
    question: "Quelle est la différence entre l'Inox 304 et 316 ?",
    answer: "L'Inox 304 est destiné à un usage intérieur ou extérieur sain (loin de la mer et de la pollution). L'Inox 316 (ou 316L) contient du molybdène, ce qui le rend beaucoup plus résistant à la corrosion. Nous recommandons IMPÉRATIVEMENT l'Inox 316 pour les projets situés à moins de 50km des côtes ou aux abords de piscine."
  },
  {
    question: "Proposez-vous l'installation ou seulement la livraison ?",
    answer: "Nous proposons les deux ! 1) Formule 'Clé en main' : nous prenons les mesures, fabriquons et nos équipes installent chez vous (Nord et Hauts-de-France). 2) Formule 'Kit prêt-à-poser' : nous fabriquons sur mesure selon vos plans et vous livrons le kit complet avec notice de montage détaillée."
  },
  {
    question: "Quel est le délai moyen pour un projet ?",
    answer: "Comptez 2 à 3 semaines pour la fabrication après validation des plans techniques. Pour l'installation, nous fixons une date selon votre disponibilité. En période de forte demande (printemps/été), les délais peuvent s'allonger légèrement, d'où l'importance d'anticiper."
  },
  {
    question: "Le verre est-il solide ? Y a-t-il un risque de casse ?",
    answer: "Nous utilisons exclusivement du verre feuilleté trempé (ex: 44.2 ou 55.2). Il est 5 fois plus résistant qu'un verre classique. En cas de choc extrême, le verre peut se fissurer mais reste maintenu par le film PVB (comme un pare-brise de voiture), empêchant tout risque de chute ou de coupure."
  },
  {
    question: "Comment entretenir mon garde-corps ?",
    answer: "Inox : un simple chiffon doux avec un produit nettoyant inox ou de l'eau savonneuse 1 à 2 fois par an. Verre : produit à vitres classique. Aluminium : eau savonneuse. Jamais de produits chlorés ou d'éponges abrasives sur l'inox !"
  }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <FAQJsonLd faqs={faqs} />
      
      {/* Decorative background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Questions Fréquentes
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Un projet de garde-corps soulève souvent des questions techniques et réglementaires. 
                Voici les réponses aux interrogations les plus courantes de nos clients.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4 text-slate-900 font-bold">
                  <HelpCircle className="text-orange-500" />
                  Besoin d&apos;aide supplémentaire ?
                </div>
                <p className="text-sm text-slate-500 mb-4">
                  Nos experts sont disponibles pour étudier votre cas particulier.
                </p>
                <Link 
                  href="/contact"
                  className="text-orange-600 font-semibold text-sm flex items-center hover:gap-2 transition-all"
                >
                  Contacter un technicien <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-slate-100 rounded-xl px-2 shadow-sm data-[state=open]:border-orange-200 data-[state=open]:ring-1 data-[state=open]:ring-orange-100 transition-all"
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline hover:text-orange-600 text-left font-semibold text-slate-900 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-slate-600 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
