import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ShieldCheck } from "lucide-react";
import { COMPANY, MATERIALS, USE_CASES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Bar: Trust Indicators */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-orange-500 h-5 w-5" />
              <span>Garantie Décennale incluse</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-lg">🇫🇷</span>
              <span>Fabrication 100% Française</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
              <span>Conforme Normes NF P01-012</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Company Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">STICK-IT FRANCE</h3>
              <p className="text-sm text-slate-400">Groupe TX INOX</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Spécialiste du garde-corps sur mesure en Inox, Verre et Aluminium depuis plus de 20 ans. 
              Nous accompagnons particuliers et professionnels dans leurs projets de sécurisation, 
              de la conception à l&apos;installation.
            </p>
            <div className="space-y-4 pt-4">
              <a href={COMPANY.phoneLink} className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-bold text-lg">{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mt-1">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-white">Siège & Atelier :</p>
                  <p className="text-sm text-slate-400">{COMPANY.address}</p>
                  <p className="text-sm text-slate-400">{COMPANY.postalCode} {COMPANY.city}, {COMPANY.country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Products (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-bold mb-6">Nos Produits</h3>
            <ul className="space-y-3 text-sm">
              {MATERIALS.map((m) => (
                <li key={m.id}>
                  <Link href={`/${m.slug}`} className="hover:text-orange-400 transition-colors">
                    Garde-corps {m.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/garde-corps-balcon" className="hover:text-orange-400 transition-colors">Pour Balcon</Link></li>
              <li><Link href="/garde-corps-terrasse" className="hover:text-orange-400 transition-colors">Pour Terrasse</Link></li>
              <li><Link href="/garde-corps-escalier" className="hover:text-orange-400 transition-colors">Pour Escalier</Link></li>
              <li><Link href="/garde-corps-piscine" className="hover:text-orange-400 transition-colors">Clôture Piscine</Link></li>
            </ul>
          </div>

          {/* Useful Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Informations</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/realisations" className="hover:text-orange-400 transition-colors">Nos Réalisations</Link></li>
              <li><Link href="/guide" className="hover:text-orange-400 transition-colors">Guide & Normes</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact / Plan</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-orange-400 transition-colors">Mentions Légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-orange-400 transition-colors">Confidentialité</Link></li>
              <li><Link href="/cgv" className="hover:text-orange-400 transition-colors">CGV</Link></li>
            </ul>
          </div>

          {/* Opening Hours (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Horaires</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Lun - Ven</span>
                <span className="text-white">{COMPANY.openingHours.weekdays}</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi</span>
                <span className="text-white">{COMPANY.openingHours.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-orange-500">Fermé</span>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} GROUPE TX INOX. Tous droits réservés.</p>
          <p>Site réalisé par STICK-IT Digital</p>
        </div>
      </div>
    </footer>
  );
}
