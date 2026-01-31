import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contactez STICK-IT FRANCE | Fabricant Garde-Corps Nord",
  description: "Coordonnées, plan d'accès et formulaire de contact. Venez visiter notre showroom à Ennevelin (59).",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />
          
          <div className="grid lg:grid-cols-2 gap-12 py-12">
            {/* Info Side */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Contactez-nous</h1>
                <p className="text-xl text-slate-600">
                  Notre équipe est à votre écoute pour concrétiser votre projet de garde-corps.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Par téléphone</h3>
                    <p className="text-slate-500 mb-2">Du lundi au vendredi de 8h à 18h</p>
                    <a href={COMPANY.phoneLink} className="text-2xl font-bold text-orange-600 hover:text-orange-700">
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Par email</h3>
                    <p className="text-slate-500 mb-2">Réponse sous 24h ouvrées</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-lg font-medium text-blue-600 hover:text-blue-700">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Notre Atelier</h3>
                    <p className="text-slate-500 mb-2">Venez voir nos échantillons sur rendez-vous</p>
                    <p className="text-slate-900 font-medium">
                      {COMPANY.address}<br />
                      {COMPANY.postalCode} {COMPANY.city}
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-orange-600 font-bold mt-2 hover:underline"
                    >
                      <Navigation className="h-4 w-4" />
                      Y aller avec GPS
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Side (Placeholder styled) */}
            <div className="bg-slate-200 rounded-3xl overflow-hidden min-h-[400px] relative shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.606789012345!2d3.1585!3d50.5615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDMzJzQxLjQiTiAzwrAwOSczMC42IkU!5e0!3m2!1sfr!2sfr!4v1600000000000!5m2!1sfr!2sfr"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '500px' }} 
                allowFullScreen 
                loading="lazy"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
              
              {/* Floating Card on Map */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Ouvert aujourd&apos;hui</p>
                    <p className="text-sm text-slate-500">{COMPANY.openingHours.weekdays}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="text-center py-12 border-t border-slate-200 mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Une question rapide ?</h2>
            <p className="text-slate-600 mb-6">
              Consultez notre guide complet avant de nous contacter.
            </p>
            <Button variant="outline" asChild>
              <Link href="/guide">
                Consulter la FAQ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
