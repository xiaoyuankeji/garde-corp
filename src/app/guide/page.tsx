import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Guide Garde-Corps | Normes, Installation, Entretien | STICK-IT",
  description: "Guide complet sur les garde-corps : normes NF P01-012, types de pose, matériaux, entretien. Tout savoir avant votre projet.",
  keywords: ["norme garde-corps", "hauteur garde-corps", "installation garde-corps", "entretien garde-corps", "NF P01-012"],
};

const guides = [
  {
    slug: "norme-garde-corps-nf-p01-012",
    title: "Norme NF P01-012 : Tout Comprendre",
    description: "Hauteur, résistance, espacement : les exigences réglementaires pour vos garde-corps.",
    category: "Normes",
    icon: "📏"
  },
  {
    slug: "pose-au-sol-vs-nez-de-dalle",
    title: "Pose au Sol vs Nez de Dalle",
    description: "Quelle fixation choisir pour votre garde-corps ? Avantages et inconvénients.",
    category: "Installation",
    icon: "🔧"
  },
  {
    slug: "choisir-materiau-garde-corps",
    title: "Quel Matériau Choisir ?",
    description: "Inox, verre, aluminium : comparatif des matériaux pour faire le bon choix.",
    category: "Matériaux",
    icon: "🏗️"
  },
  {
    slug: "entretien-garde-corps-inox",
    title: "Entretenir son Garde-Corps Inox",
    description: "Conseils et produits pour conserver l'éclat de votre garde-corps en inox.",
    category: "Entretien",
    icon: "✨"
  },
  {
    slug: "prix-garde-corps-guide",
    title: "Prix des Garde-Corps : Guide Complet",
    description: "Facteurs de prix, fourchettes indicatives, comment optimiser votre budget.",
    category: "Budget",
    icon: "💰"
  },
  {
    slug: "securite-piscine-norme-nf-p90-306",
    title: "Sécurité Piscine : Norme NF P90-306",
    description: "Obligations légales et solutions pour sécuriser votre piscine.",
    category: "Piscine",
    icon: "🏊"
  },
];

export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ name: "Guide & Normes", href: "/guide" }]} />
      
      <div className="py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Ressources & Conseils
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Guide Garde-Corps
          </h1>
          <p className="text-xl text-slate-600">
            Tout ce que vous devez savoir avant de vous lancer : normes, matériaux, 
            installation, entretien et budget.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guide/${guide.slug}`}>
              <Card className="card-hover group h-full cursor-pointer transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">{guide.icon}</span>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {guide.category}
                  </span>
                  <h2 className="font-bold text-lg mt-2 mb-3 group-hover:text-orange-600 transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-slate-600 text-sm mb-4">
                    {guide.description}
                  </p>
                  <span className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Lire l&apos;article <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick FAQ */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Questions Rapides
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Quelle hauteur pour un garde-corps ?
              </h3>
              <p className="text-slate-600 text-sm">
                1 mètre minimum pour une hauteur de chute supérieure à 1 mètre (norme NF P01-012).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Inox 304 ou 316 ?
              </h3>
              <p className="text-slate-600 text-sm">
                Inox 316L pour les environnements marins ou abords de piscine, 304 pour les autres cas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Quel budget prévoir ?
              </h3>
              <p className="text-slate-600 text-sm">
                Comptez 200-500€/ml selon le matériau et la complexité. Devis gratuit pour un chiffrage précis.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Délai de réalisation ?
              </h3>
              <p className="text-slate-600 text-sm">
                2-4 semaines de fabrication après prise de mesures, puis 1-3 jours d&apos;installation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Besoin de Conseils Personnalisés ?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions 
            et vous guider dans votre choix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/devis-garde-corps" className="gap-2">
                Demander un Devis
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Nous Contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
