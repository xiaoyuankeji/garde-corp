"use client";

import React, { useState, useEffect } from "react";
import { Phone, X, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCallClick = () => {
    // Track event
    if (typeof window !== 'undefined') {
      fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'call_click', meta: { page: window.location.pathname } })
      }).catch(() => {});
    }
  };

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t shadow-lg safe-area-pb">
        <div className="grid grid-cols-2 divide-x">
          <a
            href={COMPANY.phoneLink}
            onClick={handleCallClick}
            className="flex items-center justify-center gap-2 py-4 text-emerald-600 font-semibold hover:bg-emerald-50 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Appeler
          </a>
          <a
            href="/devis-garde-corps"
            className="flex items-center justify-center gap-2 py-4 text-orange-600 font-semibold hover:bg-orange-50 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Devis Gratuit
          </a>
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 hidden lg:block transition-all duration-300",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        {isExpanded ? (
          <div className="bg-white rounded-2xl shadow-2xl border p-4 w-72 animate-in fade-in zoom-in-95">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-900">Besoin d&apos;aide ?</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>
            
            <div className="space-y-3">
              <a
                href={COMPANY.phoneLink}
                onClick={handleCallClick}
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors group"
              >
                <div className="p-2 bg-emerald-500 rounded-lg text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-emerald-700">{COMPANY.phone}</p>
                  <p className="text-xs text-emerald-600">Lun-Ven 8h-18h</p>
                </div>
              </a>
              
              <a
                href="/devis-garde-corps"
                className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors"
              >
                <div className="p-2 bg-orange-500 rounded-lg text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-orange-700">Devis en ligne</p>
                  <p className="text-xs text-orange-600">Réponse sous 24h</p>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsExpanded(true)}
            className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-4 rounded-full shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
          >
            <Phone className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">{COMPANY.phone}</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
            </span>
          </button>
        )}
      </div>
    </>
  );
}
