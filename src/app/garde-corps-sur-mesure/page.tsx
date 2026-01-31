import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, Phone, CheckCircle, Ruler, PenTool, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Sur Mesure | Conception Personnalisée | Nord",
  description: "Création de garde-corps 100% sur mesure. Formes complexes, mix matériaux, design unique. Bureau d'études intégré.",
};

const steps = [
  { title: "Écoute", desc: "Analyse de vos envies et contraintes" },
  { title: "Relevé", desc: "Prise de mesures laser 3D sur site" },
  { title: "Dessin", desc: "Plans techniques et modélisation" },
  { title: "Fabrication", desc: "Usinage dans notre atelier du Nord" },
  { title: "Pose", desc: "Installation millimétrée chez vous" },
];

export default function GardeCorpsSurMesurePage() {
  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[
            { name: "Garde-Corps", href: "/garde-corps" },
            { name: "Sur Mesure", href: "/garde-corps-sur-mesure" }
          ]} />
          
          {/* Hero */}
          <section className="py-12 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-bold mb-6">
                  <Ruler className="h-4 w-4" />
                  Bureau d&apos;Études Intégré
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Garde-Corps <br />
                  <span className="text-orange-600">100% Sur Mesure</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Votre projet est unique, notre réponse l&apos;est aussi. 
                  Nous concevons des solutions techniques pour les configurations les plus complexes : 
                  escaliers tournants, mezzanines atypiques, rénovations délicates.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg" className="shadow-orange-200" asChild>
                    <Link href="/devis-garde-corps" className="gap-2">
                      Parler à un Expert
                      <Phone className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sur-mesure-hero.jpg"
                  alt="Garde-corps design sur mesure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Notre Processus de Création</h2>
              <p className="text-slate-600">
                De l&apos;idée à la réalisation, nous maîtrisons chaque étape de la chaîne.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-orange-100 z-0 transform translate-y-1/2" />
              
              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-orange-100 flex items-center justify-center font-bold text-orange-600 text-xl mb-4 shadow-sm">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 px-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Custom */}
          <section className="py-12">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Pourquoi choisir le Sur Mesure ?</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                        <BrainCircuit className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Précision Technique</h3>
                        <p className="text-slate-600 text-sm">Adaptation millimétrique aux pentes, angles et irrégularités des murs existants.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                        <PenTool className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Liberté Créative</h3>
                        <p className="text-slate-600 text-sm">Mélangez les matériaux : bois et inox, verre et pierre... Créez une pièce unique.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                        <CheckCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">Sécurité Optimisée</h3>
                        <p className="text-slate-600 text-sm">Chaque fixation est calculée selon le support (béton, bois, brique) pour une solidité maximale.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mt-8">
                      <Image 
                        src="/images/inox-cables.jpg" 
                        alt="Détail finition sur mesure"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                      <Image 
                        src="/images/inox-hero.jpg" 
                        alt="Intégration architecturale"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vous avez les plans ? Nous avons la solution.
              </h2>
              <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
                Envoyez-nous vos croquis, photos ou plans d&apos;architecte. 
                Nous étudierons votre projet gratuitement.
              </p>
              <Button variant="cta" size="xl" className="shadow-orange-500/20" asChild>
                <Link href="/devis-garde-corps" className="gap-2">
                  Soumettre mon Projet
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
