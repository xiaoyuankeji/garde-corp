import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Nos Réalisations Garde-Corps | Portfolio | STICK-IT FRANCE",
  description: "Découvrez nos dernières installations de garde-corps dans le Nord et la Belgique. Inox, verre, aluminium : la qualité en images.",
};

const projects = [
  {
    id: 1,
    title: "Terrasse Suspendue Panoramique",
    location: "Bondues (59)",
    category: "Verre",
    image: "/images/verre-hero.jpg",
    tags: ["Extérieur", "Verre", "Profil Sol"]
  },
  {
    id: 2,
    title: "Escalier Design Industriel",
    location: "Lille Centre (59)",
    category: "Inox",
    image: "/images/escalier-side.jpg",
    tags: ["Intérieur", "Inox Brossé", "Câbles"]
  },
  {
    id: 3,
    title: "Sécurisation Piscine Moderne",
    location: "Le Touquet (59)",
    category: "Mixte",
    image: "/images/terrasse-piscine.jpg",
    tags: ["Piscine", "Verre", "Portillon"]
  },
  {
    id: 4,
    title: "Rénovation Balcon Appartement",
    location: "Marcq-en-Baroeul (59)",
    category: "Aluminium",
    image: "/images/alu-tole.jpg",
    tags: ["Rénovation", "Alu Gris 7016", "Tôle Perforée"]
  },
  {
    id: 5,
    title: "Mezzanine Loft Contemporain",
    location: "Roubaix (59)",
    category: "Inox",
    image: "/images/verre-sol.jpg",
    tags: ["Intérieur", "Verre", "Poteaux Inox"]
  },
  {
    id: 6,
    title: "Rampe d'Accès PMR",
    location: "Villeneuve d'Ascq (59)",
    category: "Inox",
    image: "/images/inox-barres.jpg",
    tags: ["ERP", "Accessibilité", "Main courante"]
  }
];

export default function RealisationsPage() {
  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ name: "Réalisations", href: "/realisations" }]} />
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto py-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Nos Réalisations</h1>
            <p className="text-xl text-slate-600">
              Découvrez la qualité de notre travail à travers nos derniers chantiers. 
              Chaque projet est unique et réalisé sur mesure dans nos ateliers.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-white/90 text-slate-900 hover:bg-white backdrop-blur shadow-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-orange-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Inspiré par ces projets ?
            </h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">
              Nous pouvons réaliser le même niveau de finition chez vous. 
              Parlez-nous de votre projet.
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-orange-50" asChild>
              <Link href="/devis-garde-corps" className="gap-2">
                Obtenir mon devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
