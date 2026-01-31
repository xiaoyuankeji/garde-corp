import { Metadata } from "next";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { DevisForm } from "@/components/forms/DevisForm";
import { Phone, Clock, CheckCircle, Shield } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Devis Garde-Corps Gratuit | Réponse sous 24h | Nord & Lille",
  description: "Demandez un devis gratuit pour votre garde-corps sur mesure. Inox, verre, aluminium. Réponse personnalisée sous 24h. Visite technique offerte.",
  keywords: ["devis garde-corps", "devis garde corps", "prix garde-corps", "tarif garde-corps", "devis gratuit garde-corps"],
};

const benefits = [
  { icon: Clock, title: "Réponse sous 24h", description: "Nous vous recontactons rapidement" },
  { icon: CheckCircle, title: "Devis Détaillé", description: "Chiffrage transparent et complet" },
  { icon: Shield, title: "Sans Engagement", description: "Vous restez libre de votre choix" },
];

export default function DevisPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ name: "Devis Gratuit", href: "/devis-garde-corps" }]} />
      
      <div className="py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Demander un Devis
              <span className="block text-orange-500">Gratuit & Sans Engagement</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Décrivez votre projet et recevez un devis personnalisé sous 24h. 
              Notre équipe vous accompagne de A à Z.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <p className="text-slate-300 mb-2">Vous préférez nous appeler ?</p>
              <a 
                href={COMPANY.phoneLink}
                className="flex items-center gap-3 text-2xl font-bold hover:text-orange-400 transition-colors"
              >
                <Phone className="h-8 w-8" />
                {COMPANY.phone}
              </a>
              <p className="text-slate-400 text-sm mt-2">
                Lun-Ven {COMPANY.openingHours.weekdays}
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-xl border p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Contactez-nous pour votre Devis
            </h2>
            <DevisForm />
          </div>
        </div>
      </div>
    </div>
  );
}
