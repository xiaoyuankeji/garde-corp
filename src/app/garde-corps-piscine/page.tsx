import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Piscine Conforme NF P90-306 | Inox 316L, Verre | Nord",
  description: "Garde-corps de sécurité pour piscine conforme à la norme NF P90-306. Inox 316L résistant au chlore, verre trempé. Protégez l'accès à votre piscine.",
  keywords: ["garde-corps piscine", "barrière piscine", "clôture piscine", "sécurité piscine", "norme NF P90-306", "garde-corps piscine inox"],
};

const features = [
  { title: "Norme NF P90-306", description: "Barrière de protection conforme" },
  { title: "Inox 316L", description: "Résistant au chlore et sel" },
  { title: "Hauteur 1,22m", description: "Minimum réglementaire" },
  { title: "Portillon Sécurisé", description: "Fermeture automatique" },
];

const faqs = [
  {
    question: "Un garde-corps piscine est-il obligatoire ?",
    answer: "Depuis 2004, toute piscine enterrée ou semi-enterrée doit être équipée d'un dispositif de sécurité conforme aux normes. La barrière de protection (NF P90-306) est l'une des 4 options possibles avec l'alarme, la couverture et l'abri."
  },
  {
    question: "Quelles sont les exigences de la norme NF P90-306 ?",
    answer: "La barrière doit faire minimum 1,22m de haut, être non escaladable, résister à un effort de 50 daN, et disposer d'un portillon avec fermeture automatique et verrouillage à plus de 1,50m du sol."
  },
  {
    question: "Pourquoi choisir l'inox 316L pour une piscine ?",
    answer: "L'inox 316L contient du molybdène qui le rend résistant au chlore et au sel. C'est le seul grade d'inox adapté aux abords de piscine pour éviter la corrosion et les taches de rouille."
  },
  {
    question: "Le verre est-il adapté pour une clôture piscine ?",
    answer: "Oui, le verre feuilleté trempé est idéal : il offre une vue dégagée sur le bassin, est facile à nettoyer, et permet une surveillance permanente des enfants. Associé à des poteaux inox 316L, c'est une solution durable et esthétique."
  }
];

export default function GardeCorpsPiscinePage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Piscine" 
        description="Barrière de sécurité piscine conforme NF P90-306."
        category="Garde-corps Piscine"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: "Garde-Corps", href: "/garde-corps" },
          { name: "Piscine", href: "/garde-corps-piscine" }
        ]} />
        
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-6">
                🏊 Sécurité Piscine
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Garde-Corps Piscine
                <span className="block text-cyan-500 text-2xl mt-2 font-normal">
                  Conforme Norme NF P90-306
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Protégez l&apos;accès à votre piscine avec une barrière de sécurité conforme. 
                Inox 316L résistant au chlore, verre pour une surveillance optimale.
              </p>
              
              {/* Warning */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
                <div className="flex gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-amber-800">Obligation légale</p>
                    <p className="text-sm text-amber-700">
                      Depuis 2004, toute piscine enterrée doit être équipée d&apos;un dispositif de sécurité homologué.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900">{feature.title}</p>
                      <p className="text-sm text-slate-500">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/devis-garde-corps" className="gap-2">
                    Devis Clôture Piscine
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
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-cyan-100">
              <Image
                src="/images/piscine-hero.jpg"
                alt="Piscine sécurisée avec clôture verre et portillon"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Norme Section */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Norme NF P90-306 : Les Exigences
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">1,22m</div>
                <p className="font-semibold">Hauteur Minimale</p>
                <p className="text-sm text-slate-500">De la barrière de protection</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">50 daN</div>
                <p className="font-semibold">Résistance</p>
                <p className="text-sm text-slate-500">Aux efforts de poussée</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-cyan-500 mb-2">1,50m</div>
                <p className="font-semibold">Verrouillage</p>
                <p className="text-sm text-slate-500">Hauteur mini du système</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Questions sur la Sécurité Piscine
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
          <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Sécurisez Votre Piscine
            </h2>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Obtenez un devis pour une barrière piscine conforme NF P90-306. 
              Inox 316L, verre, portillon sécurisé inclus.
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
