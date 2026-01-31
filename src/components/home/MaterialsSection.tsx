import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MATERIALS } from "@/lib/constants";

const materialDetails = {
  inox: {
    subtitle: "Robuste & Intemporel",
    imageSrc: "/images/inox-cables.jpg",
    color: "text-slate-600"
  },
  verre: {
    subtitle: "Transparence Totale",
    imageSrc: "/images/verre-hero.jpg",
    color: "text-sky-600"
  },
  aluminium: {
    subtitle: "Design & Couleurs",
    imageSrc: "/images/alu-tole.jpg",
    color: "text-zinc-600"
  },
  mixte: {
    subtitle: "Création Unique",
    imageSrc: "/images/verre-points.jpg",
    color: "text-orange-600"
  }
};

export function MaterialsSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">Nos Matériaux</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            L&apos;Excellence du Choix
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nous sélectionnons rigoureusement nos matériaux pour garantir sécurité, 
            durabilité et esthétique à votre habitat, notamment pour les garde-corps inox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MATERIALS.map((material) => {
            const details = materialDetails[material.id as keyof typeof materialDetails];
            return (
              <Link key={material.id} href={`/${material.slug}`} className="group">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 border border-slate-100">
                  {/* Image Area */}
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={details.imageSrc}
                      alt={`Garde-corps ${material.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                      <ArrowRight className={`h-5 w-5 ${details.color}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className={`text-xs font-bold uppercase tracking-wider ${details.color} opacity-70`}>
                        {details.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1 group-hover:text-orange-600 transition-colors">
                        {material.name}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {material.description}
                    </p>
                    
                    <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
