import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Award, PenTool, LayoutTemplate, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export function CTASection() {
  const benefits = [
    { icon: PenTool, text: "Devis 100% Gratuit" },
    { icon: Clock, text: "Réponse sous 24h" },
    { icon: Shield, text: "Garantie Décennale" },
    { icon: LayoutTemplate, text: "Plans 3D offerts" },
    { icon: Award, text: "Pose par Pro" },
    { icon: CheckCircle, text: "Normes Respectées" },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Prêt à concrétiser <br />
                <span className="text-orange-500">votre projet ?</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Ne laissez pas votre sécurité au hasard. Obtenez une estimation précise et des conseils d&apos;experts pour votre garde-corps.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" className="w-full sm:w-auto shadow-orange-500/20 shadow-xl" asChild>
                  <Link href="/devis-garde-corps" className="gap-2">
                    Demander mon devis
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-700 hover:text-white" asChild>
                  <a href={COMPANY.phoneLink}>
                    Appeler le {COMPANY.phone}
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-700/50 p-4 rounded-xl flex items-center gap-3">
                  <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <span className="text-slate-200 font-medium text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
