import React from "react";
import { COMPANY } from "@/lib/constants";

interface LocalBusinessProps {
  name?: string;
  description?: string;
  image?: string;
}

export function LocalBusinessJsonLd({ name, description, image }: LocalBusinessProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://garde-corps.fr/#organization",
    name: name || COMPANY.fullName,
    description: description || "Spécialiste garde-corps sur mesure en inox, verre et aluminium dans le Nord.",
    image: image || "https://garde-corps.fr/images/logo.png",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Z.A. de la Broye, Rue du Chaufour",
      addressLocality: COMPANY.city,
      postalCode: COMPANY.postalCode,
      addressRegion: COMPANY.region,
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.5615",
      longitude: "3.1585"
    },
    url: "https://garde-corps.fr",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00"
      }
    ],
    priceRange: "€€",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "50.5615",
        longitude: "3.1585"
      },
      geoRadius: "100000"
    },
    sameAs: []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQProps {
  faqs: { question: string; answer: string }[];
}

export function FAQJsonLd({ faqs }: FAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://garde-corps.fr${item.href}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ProductProps {
  name: string;
  description: string;
  image?: string;
  category?: string;
}

export function ProductJsonLd({ name, description, image, category }: ProductProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image || "https://garde-corps.fr/images/default-product.jpg",
    category: category || "Garde-corps",
    brand: {
      "@type": "Brand",
      name: COMPANY.name
    },
    manufacturer: {
      "@type": "Organization",
      name: COMPANY.fullName
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        "@type": "Organization",
        name: COMPANY.fullName
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
