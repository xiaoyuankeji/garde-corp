import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { MATERIALS, USE_CASES, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Garde-Corps Sur Mesure en Inox, Verre et Aluminium | Nord & Lille",
  description: "Découvrez notre gamme complète de garde-corps sur mesure : inox, verre, aluminium. Fabrication française, installation professionnelle, garantie 10 ans. Devis gratuit sous 24h.",
  keywords: ["garde-corps", "garde corps", "garde-corps sur mesure", "garde-corps inox", "garde-corps verre", "garde-corps aluminium", "Nord", "Lille"],
  openGraph: {
    title: "Garde-Corps Sur Mesure | Inox, Verre, Aluminium",
    description: "Spécialiste du garde-corps sur mesure. Fabrication française, garantie 10 ans.",
  },
};

const features = [
  {
    title: "Fabrication Française",
    description: "Tous nos garde-corps sont conçus et fabriqués dans notre atelier du Nord.",
    icon: "🏭"
  },
  {
    title: "Sur Mesure",
    description: "Chaque projet est unique. Nous adaptons nos solutions à vos contraintes.",
    icon: "📐"
  },
  {
    title: "Installation Pro",
    description: "Nos équipes qualifiées assurent une pose soignée et conforme aux normes.",
    icon: "🔧"
  },
  {
    title: "Garantie 10 Ans",
    description: "Nous garantissons la qualité de nos produits et de notre travail.",
    icon: "🛡️"
  }
];

const faqs = [
  {
    question: "Quels types de garde-corps proposez-vous ?",
    answer: "Nous proposons des garde-corps en inox (acier inoxydable 304 ou 316), en verre feuilleté trempé, en aluminium thermolaqué, ainsi que des combinaisons sur mesure associant plusieurs matériaux."
  },
  {
    question: "Vos garde-corps sont-ils conformes aux normes ?",
    answer: "Oui, tous nos garde-corps respectent la norme NF P01-012 relative aux dimensions et à la résistance des garde-corps. Pour les piscines, nous respectons également la norme NF P90-306."
  },
  {
    question: "Intervenez-vous pour la pose ?",
    answer: "Oui, nous assurons la fabrication ET l'installation de vos garde-corps. Nos équipes de poseurs qualifiés interviennent dans tout le Nord et la région lilloise."
  }
];

const materialImages: Record<string, string> = {
  inox: "/images/inox-cables.jpg",
  verre: "/images/verre-hero.jpg",
  aluminium: "/images/alu-tole.jpg",
  mixte: "/images/verre-points.jpg",
};

export default function GardeCorpsPage() {
  return (
    <>
      <ProductJsonLd 
        name="Garde-Corps Sur Mesure" 
        description="Garde-corps en inox, verre et aluminium. Fabrication française sur mesure."
        category="Garde-corps"
      />
      <FAQJsonLd faqs={faqs} />
      
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[{ name: "Garde-Corps", href: "/garde-corps" }]} />
        
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Garde-Corps Sur Mesure
                <span className="block text-orange-500 mt-2">Inox • Verre • Aluminium</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Spécialiste du garde-corps depuis plus de 20 ans, nous concevons et installons 
                des solutions sur mesure pour sécuriser vos balcons, terrasses, escaliers et piscines.
                Notre expertise en garde-corps inox est reconnue dans le Nord et à Lille.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="cta" size="lg" asChild>
                  <Link href="/devis-garde-corps" className="gap-2">
                    Demander un Devis
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

              <div className="flex flex-wrap gap-4">
                {["Devis gratuit", "Fabrication française", "Garantie 10 ans"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/inox-hero.jpg"
                alt="Garde-corps moderne sur mesure"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 border-t">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center">
                <CardContent className="p-6">
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Materials Section */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Nos Garde-Corps par Matériau
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MATERIALS.map((material) => (
              <Link key={material.id} href={`/${material.slug}`}>
                <Card className="h-full card-hover group overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={materialImages[material.id] || "/images/inox-cables.jpg"}
                      alt={`Garde-corps ${material.name}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                      Garde-Corps {material.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">{material.description}</p>
                    <span className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Garde-Corps par Application
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {USE_CASES.map((useCase) => (
              <Link key={useCase.id} href={`/${useCase.slug}`}>
                <Card className="h-full card-hover group text-center">
                  <CardContent className="p-6">
                    <span className="text-4xl mb-3 block">{useCase.icon}</span>
                    <h3 className="font-bold group-hover:text-orange-600 transition-colors">
                      {useCase.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 border-t">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Pourquoi Choisir un Garde-Corps Sur Mesure ?</h2>
            <p>
              Un garde-corps sur mesure s&apos;adapte parfaitement à votre environnement et à vos contraintes 
              techniques. Contrairement aux solutions standard, il garantit une intégration esthétique 
              optimale et une conformité totale aux normes de sécurité.
            </p>
            
            <h3>Les Avantages du Sur Mesure</h3>
            <ul>
              <li><strong>Adaptation parfaite</strong> : dimensions exactes, formes complexes, pentes</li>
              <li><strong>Choix des matériaux</strong> : inox, verre, aluminium ou combinaisons</li>
              <li><strong>Personnalisation</strong> : couleurs RAL, types de remplissage, finitions</li>
              <li><strong>Conformité garantie</strong> : respect des normes NF P01-012</li>
            </ul>

            <h3>Notre Processus</h3>
            <ol>
              <li><strong>Étude de projet</strong> : analyse de vos besoins et contraintes</li>
              <li><strong>Visite technique</strong> : prise de mesures précises sur site</li>
              <li><strong>Devis détaillé</strong> : chiffrage transparent sous 48h</li>
              <li><strong>Fabrication</strong> : production dans notre atelier du Nord</li>
              <li><strong>Installation</strong> : pose professionnelle par nos équipes</li>
            </ol>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 border-t">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Questions Fréquentes
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

        {/* CTA Section */}
        <section className="py-12 border-t">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un devis gratuit et personnalisé. 
              Notre équipe vous répond sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link href="/devis-garde-corps" className="gap-2">
                  Demander un Devis Gratuit
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
        </section>
      </div>
    </>
  );
}
