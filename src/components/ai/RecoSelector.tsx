"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Phone, Sparkles, CheckCircle, Loader2 } from "lucide-react";
import { USE_CASES, MATERIALS, INSTALLATION_TYPES, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Step = 'useCase' | 'material' | 'installation' | 'length' | 'zipCode' | 'results';

interface RecoItem {
  type: string;
  title: string;
  url: string;
  reason: string;
}

interface RecoResult {
  items: RecoItem[];
  cta: {
    phone: string;
    phoneLink: string;
    devisUrl: string;
  };
  summary: string;
}

export function RecoSelector() {
  const [step, setStep] = useState<Step>('useCase');
  const [selections, setSelections] = useState({
    useCase: '',
    material: '',
    installation: '',
    length: '',
    zipCode: ''
  });
  const [results, setResults] = useState<RecoResult | null>(null);
  const [loading, setLoading] = useState(false);

  const steps: Step[] = ['useCase', 'material', 'installation', 'length', 'zipCode', 'results'];
  const currentStepIndex = steps.indexOf(step);

  const goNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      if (steps[nextIndex] === 'results') {
        fetchRecommendations();
      } else {
        setStep(steps[nextIndex]);
      }
    }
  };

  const goBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setStep(steps[prevIndex]);
    }
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/reco', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          useCase: selections.useCase,
          material: selections.material,
          installationType: selections.installation,
          estimatedLength: selections.length,
          zipCode: selections.zipCode
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        setResults(data);
        setStep('results');
        
        // Track event
        fetch('/api/events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'ai_reco_used', meta: selections })
        }).catch(() => {});
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setStep('useCase');
    setSelections({ useCase: '', material: '', installation: '', length: '', zipCode: '' });
    setResults(null);
  };

  const renderStep = () => {
    switch (step) {
      case 'useCase':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">1. Type de projet</h3>
            <p className="text-slate-600 mb-6">Où souhaitez-vous installer votre garde-corps ?</p>
            <div className="grid grid-cols-2 gap-3">
              {USE_CASES.map((uc) => (
                <button
                  key={uc.id}
                  onClick={() => {
                    setSelections({ ...selections, useCase: uc.id });
                    goNext();
                  }}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all hover:border-orange-500",
                    selections.useCase === uc.id ? "border-orange-500 bg-orange-50" : "border-slate-200"
                  )}
                >
                  <span className="text-2xl block mb-2">{uc.icon}</span>
                  <span className="font-semibold">{uc.name}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 'material':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">2. Matériau préféré</h3>
            <p className="text-slate-600 mb-6">Quel matériau vous attire ?</p>
            <div className="grid grid-cols-2 gap-3">
              {MATERIALS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelections({ ...selections, material: m.id });
                    goNext();
                  }}
                  className={cn(
                    "p-4 rounded-xl border-2 text-left transition-all hover:border-orange-500",
                    selections.material === m.id ? "border-orange-500 bg-orange-50" : "border-slate-200"
                  )}
                >
                  <span className="font-semibold">{m.name}</span>
                  <span className="text-sm text-slate-500 block mt-1">{m.description}</span>
                </button>
              ))}
              <button
                onClick={() => {
                  setSelections({ ...selections, material: 'ne-sait-pas' });
                  goNext();
                }}
                className={cn(
                  "p-4 rounded-xl border-2 text-left transition-all hover:border-orange-500",
                  selections.material === 'ne-sait-pas' ? "border-orange-500 bg-orange-50" : "border-slate-200"
                )}
              >
                <span className="font-semibold">Je ne sais pas</span>
                <span className="text-sm text-slate-500 block mt-1">Conseillez-moi</span>
              </button>
            </div>
          </div>
        );

      case 'installation':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">3. Type de pose</h3>
            <p className="text-slate-600 mb-6">Comment souhaitez-vous fixer le garde-corps ?</p>
            <div className="space-y-3">
              {INSTALLATION_TYPES.map((it) => (
                <button
                  key={it.id}
                  onClick={() => {
                    setSelections({ ...selections, installation: it.id });
                    goNext();
                  }}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 text-left transition-all hover:border-orange-500",
                    selections.installation === it.id ? "border-orange-500 bg-orange-50" : "border-slate-200"
                  )}
                >
                  <span className="font-semibold">{it.name}</span>
                  <span className="text-sm text-slate-500 block mt-1">{it.description}</span>
                </button>
              ))}
              <button
                onClick={() => {
                  setSelections({ ...selections, installation: '' });
                  goNext();
                }}
                className="w-full p-4 rounded-xl border-2 text-left transition-all hover:border-orange-500 border-slate-200"
              >
                <span className="font-semibold">Je ne sais pas</span>
                <span className="text-sm text-slate-500 block mt-1">On me conseillera</span>
              </button>
            </div>
          </div>
        );

      case 'length':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">4. Longueur estimée</h3>
            <p className="text-slate-600 mb-6">Quelle est la longueur approximative ? (optionnel)</p>
            <Input
              placeholder="Ex: 5 mètres"
              value={selections.length}
              onChange={(e) => setSelections({ ...selections, length: e.target.value })}
              className="mb-4"
            />
            <Button onClick={goNext} className="w-full">
              Continuer
            </Button>
          </div>
        );

      case 'zipCode':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">5. Votre localisation</h3>
            <p className="text-slate-600 mb-6">Votre code postal (pour vérifier notre zone d&apos;intervention)</p>
            <Input
              placeholder="59000"
              value={selections.zipCode}
              onChange={(e) => setSelections({ ...selections, zipCode: e.target.value })}
              className="mb-4"
            />
            <Button 
              onClick={goNext} 
              variant="cta" 
              className="w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Analyse en cours...
                </>
              ) : (
                <>
                  Voir mes recommandations
                  <Sparkles className="h-5 w-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        );

      case 'results':
        if (!results) return null;
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Nos Recommandations</h3>
            </div>
            <p className="text-slate-600 mb-6">{results.summary}</p>
            
            <div className="space-y-3 mb-6">
              {results.items.map((item, index) => (
                <Link key={index} href={item.url}>
                  <Card className="card-hover">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-slate-500">{item.reason}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-xl p-4 mb-4">
              <p className="font-semibold text-emerald-800 mb-2">Prêt à avancer ?</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="phone" size="lg" className="flex-1" asChild>
                  <a href={results.cta.phoneLink}>
                    <Phone className="h-5 w-5 mr-2" />
                    {results.cta.phone}
                  </a>
                </Button>
                <Button variant="cta" size="lg" className="flex-1" asChild>
                  <Link href={results.cta.devisUrl}>
                    Devis Gratuit
                  </Link>
                </Button>
              </div>
            </div>

            <button onClick={reset} className="text-sm text-slate-500 hover:text-slate-700">
              ← Recommencer
            </button>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border p-6 md:p-8">
      {/* Progress */}
      {step !== 'results' && (
        <div className="flex gap-1 mb-6">
          {steps.slice(0, -1).map((s, i) => (
            <div
              key={s}
              className={cn(
                "h-1 flex-1 rounded-full transition-colors",
                i <= currentStepIndex ? "bg-orange-500" : "bg-slate-200"
              )}
            />
          ))}
        </div>
      )}

      {/* Content */}
      {renderStep()}

      {/* Navigation */}
      {step !== 'results' && currentStepIndex > 0 && step !== 'useCase' && (
        <button
          onClick={goBack}
          className="flex items-center gap-1 text-slate-500 hover:text-slate-700 mt-4"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </button>
      )}
    </div>
  );
}
