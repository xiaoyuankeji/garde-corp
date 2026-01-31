import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { USE_CASES } from "@/lib/constants";

const useCaseDetails = {
  balcon: {
    title: "Garde-Corps Balcon",
    description: "Sécurisez vos balcons sans compromettre l'esthétique de votre façade. Conformité NF P01-012 garantie.",
    image: "/images/alu-tole.jpg",
    features: ["Pose sur dalle ou nez de dalle", "Main courante fine", "Verre ou barreaudage"]
  },
  terrasse: {
    title: "Garde-Corps Terrasse",
    description: "Profitez de votre terrasse en toute sérénité. Idéal pour les terrasses surélevées ou toits-terrasses.",
    image: "/images/terrasse-bois.jpg",
    features: ["Résistant aux intempéries", "Vue panoramique préservée", "Fixation robuste"]
  },
  escalier: {
    title: "Escaliers & Rampes",
    description: "Habillez vos escaliers intérieurs ou extérieurs. Main courante ergonomique et design fluide.",
    image: "/images/escalier-side.jpg",
    features: ["Suivi de pente précis", "Angles articulés", "Sécurité enfants"]
  },
  piscine: {
    title: "Barrières Piscine",
    description: "Protection obligatoire (Norme NF P90-306) avec portillon sécurisé. Inox 316L résistant au chlore.",
    image: "/images/piscine-hero.jpg",
    features: ["Verre sécurit", "Portillon automatique", "Inox marin 316L"]
  },
  mezzanine: {
    title: "Mezzanines & Vide",
    description: "Sécurisez vos espaces intérieurs en hauteur. Apportez de la lumière avec le verre.",
    image: "/images/verre-sol.jpg",
    features: ["Design loft", "Transparence maximale", "Pose latérale possible"]
  }
};

export function UseCasesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Applications</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Une Solution pour Chaque Espace
          </h2>
          <p className="text-lg text-slate-600">
            Que ce soit pour une rénovation ou une construction neuve, 
            nos garde-corps s&apos;adaptent à toutes les configurations techniques.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {USE_CASES.slice(0, 5).map((useCase, index) => {
            const details = useCaseDetails[useCase.id as keyof typeof useCaseDetails];
            // 第一个项目占大格 (2列)
            const isLarge = index === 0;
            
            return (
              <Link
                key={useCase.id}
                href={`/${useCase.slug}`}
                className={`group relative overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${details.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-orange-400 mb-2 block font-medium">{useCase.name}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {details.title}
                    </h3>
                    <p className="text-slate-200 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-lg">
                      {details.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      {details.features.slice(0, 2).map(f => (
                        <span key={f} className="text-xs bg-white/20 backdrop-blur text-white px-2 py-1 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-white font-semibold text-sm">
                      Voir les modèles <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Last Card: CTA */}
          <Link
            href="/devis-garde-corps"
            className="group relative overflow-hidden rounded-3xl bg-orange-500 flex flex-col items-center justify-center text-center p-8 hover:bg-orange-600 transition-colors"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform">
              <span className="text-3xl">📐</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Projet Spécial ?</h3>
            <p className="text-orange-100 mb-6 text-sm">
              Formes courbes, pentes complexes ou design unique...
            </p>
            <span className="bg-white text-orange-600 px-6 py-2 rounded-full font-bold text-sm shadow-lg">
              Demander une étude gratuite
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
