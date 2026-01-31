import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbJsonLd } from "./JsonLd";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Accueil", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbJsonLd items={allItems} />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-slate-400 mx-2" />
              )}
              {index === allItems.length - 1 ? (
                <span className="text-slate-600 font-medium">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-orange-600 transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="h-4 w-4" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
