"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60 scale-105 animate-fade-in"
          style={{ 
            backgroundImage: 'url("/images/verre-hero.jpg")',
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            Spécialiste Garde-Corps Nord & Lille
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Sécurisez vos espaces avec <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
              Élégance & Style
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Fabricant installateur de garde-corps sur mesure en Inox, Verre et Aluminium. 
            Transformez votre balcon, terrasse ou escalier dès aujourd&apos;hui.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="xl" 
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 text-lg font-bold shadow-lg shadow-orange-500/30 hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/devis-garde-corps" className="flex items-center gap-2">
                Devis Gratuit Express
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 hover:text-white rounded-full px-8 text-lg"
              asChild
            >
              <Link href="/realisations">
                Voir nos réalisations
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Star, label: "Note Google", value: "4.9/5" },
              { icon: ShieldCheck, label: "Garantie", value: "10 Ans" },
              { icon: Clock, label: "Devis sous", value: "24H" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-orange-400 mb-1">
                  <item.icon className="h-5 w-5" />
                  <span className="font-bold text-white text-lg">{item.value}</span>
                </div>
                <span className="text-sm text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
      </div>
    </section>
  );
}
