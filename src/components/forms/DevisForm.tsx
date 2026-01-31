"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Camera, Ruler, MapPin, Check, Copy } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DevisForm() {
  const [copied, setCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const mailSubject = encodeURIComponent("Demande de Devis - Projet Garde-Corps");
  const mailBody = encodeURIComponent(
`Bonjour,

Je souhaite obtenir un devis pour mon projet de garde-corps.

Voici mes coordonnées :
- Nom : 
- Téléphone : 
- Ville / Code Postal : 

Détails du projet :
- Type (Escalier, Terrasse, Balcon...) : 
- Matériau souhaité (Inox, Verre...) : 
- Dimensions approximatives : 

Cordialement,`
  );

  const handleMainAction = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Auto-copy for convenience
    navigator.clipboard.writeText(COMPANY.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }).catch(() => {});

    // Try to open mail client
    window.location.href = `mailto:${COMPANY.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const copyEmail = () => {
      navigator.clipboard.writeText(COMPANY.email).then(() => {
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 2000);
      });
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-slate-700">
        <p className="mb-4 text-lg font-medium text-slate-900">
          Mode Statique : Contact Direct
        </p>
        <p>
          Pour simplifier le traitement de votre demande et nous permettre d'analyser vos photos/plans, merci de nous contacter directement par email.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="font-semibold text-slate-900 flex items-center gap-2">
          <Mail className="h-5 w-5 text-orange-600" />
          Informations utiles à inclure :
        </h3>
        
        <ul className="grid gap-4 sm:grid-cols-2">
          <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
            <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <strong className="block text-slate-900">Coordonnées</strong>
              <span className="text-sm text-slate-500">Nom, téléphone et ville du chantier.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
            <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
              <Ruler className="h-5 w-5" />
            </div>
            <div>
              <strong className="block text-slate-900">Projet</strong>
              <span className="text-sm text-slate-500">Type, dimensions approx. ou croquis.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
            <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
              <Camera className="h-5 w-5" />
            </div>
            <div>
              <strong className="block text-slate-900">Photos</strong>
              <span className="text-sm text-slate-500">Photos de l'existant (recommandé).</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="pt-4 flex flex-col gap-4">
        {/* Main CTA */}
        <Button 
          size="lg" 
          onClick={handleMainAction}
          className={cn(
            "w-full text-lg h-14 transition-all duration-300 shadow-md",
            copied 
              ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
              : "bg-orange-600 hover:bg-orange-700 text-white"
          )}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-5 w-5" />
              Email copié ! Ouverture...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-5 w-5" />
              Envoyer ma demande par Email
            </>
          )}
        </Button>
        
        {/* Secondary copy action */}
        <div className="text-center">
            <button 
                onClick={copyEmail}
                className="text-sm text-slate-500 hover:text-orange-600 transition-colors flex items-center justify-center gap-2 mx-auto py-1 px-3 rounded-full hover:bg-slate-50"
                type="button"
                title="Cliquer pour copier l'email"
            >
                Ou écrivez à : <span className="font-medium text-slate-700">{COMPANY.email}</span>
                {emailCopied ? (
                    <Check className="h-3 w-3 text-emerald-600" />
                ) : (
                    <Copy className="h-3 w-3" />
                )}
            </button>
            {emailCopied && <span className="text-xs text-emerald-600 block mt-1">Copié !</span>}
        </div>
        
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink-0 mx-4 text-slate-400 text-sm">OU PAR TÉLÉPHONE</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

        <Button variant="outline" size="lg" className="w-full text-lg h-14 border-2 hover:bg-slate-50" asChild>
          <a href={COMPANY.phoneLink}>
            <Phone className="mr-2 h-5 w-5 text-slate-700" />
            <span className="text-slate-700">Appeler le {COMPANY.phone}</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
