"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Bar - 始终显示，深色背景显专业 */}
      <div className="bg-slate-900 text-slate-300 py-2.5 text-xs font-medium tracking-wide z-[60] relative">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <span className="hidden sm:block opacity-80">Fabrication française &bull; Garantie 10 ans</span>
          <a 
            href={COMPANY.phoneLink}
            className="flex items-center gap-2 hover:text-white transition-colors ml-auto sm:ml-0"
          >
            <Phone className="h-3.5 w-3.5 text-orange-500" />
            <span className="text-white font-bold tracking-wider">{COMPANY.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Header - 滚动时变磨砂 */}
      <header 
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          scrolled ? "glass border-slate-200/50 py-2" : "bg-white/50 backdrop-blur-sm py-4 border-slate-100"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-900 leading-none tracking-tight group-hover:text-orange-600 transition-colors">STICK-IT</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Garde-Corps</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2.5 text-sm font-semibold rounded-full transition-all flex items-center gap-1.5",
                      isActive(item.href)
                        ? "text-orange-600 bg-orange-50"
                        : "text-slate-600 hover:text-orange-600 hover:bg-slate-50"
                    )}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                      <div className="w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={cn(
                              "block px-4 py-3 text-sm font-medium rounded-xl transition-colors",
                              isActive(child.href)
                                ? "text-orange-600 bg-orange-50"
                                : "text-slate-600 hover:text-orange-600 hover:bg-slate-50"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="cta" className="rounded-full shadow-orange-200 shadow-lg hover:shadow-orange-300 hover:scale-105 transition-all duration-300 font-bold" asChild>
                <Link href="/devis-garde-corps">
                  Devis Gratuit
                </Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2.5 rounded-full bg-slate-100 text-slate-900 active:bg-slate-200 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-[100px] px-6 animate-in slide-in-from-top-10 fade-in duration-200 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-2 last:border-0">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between py-3 text-lg font-bold",
                    isActive(item.href) ? "text-orange-600" : "text-slate-900"
                  )}
                  onClick={() => !item.children && setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-3 pb-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "text-base font-medium",
                          isActive(child.href) ? "text-orange-600" : "text-slate-500"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-8 pb-10">
            <Button variant="cta" size="lg" className="w-full rounded-xl text-lg shadow-xl shadow-orange-200" asChild>
              <Link href="/devis-garde-corps">
                Demander mon devis
              </Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
