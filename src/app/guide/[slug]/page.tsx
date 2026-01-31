import { notFound } from "next/navigation";
import { guidesData } from "@/lib/guide-data";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = guidesData[params.slug];
  if (!guide) return { title: "Article non trouvé" };
  
  return {
    title: `${guide.title} | Guide Garde-Corps`,
    description: guide.description,
  };
}

export function generateStaticParams() {
  return Object.keys(guidesData).map((slug) => ({
    slug,
  }));
}

export default function GuideArticlePage({ params }: Props) {
  const guide = guidesData[params.slug];

  if (!guide) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { name: "Guide & Normes", href: "/guide" },
          { name: guide.title, href: `/guide/${guide.slug}` },
        ]}
      />

      <div className="max-w-4xl mx-auto py-8">
        <Button variant="ghost" asChild className="mb-8 hover:bg-slate-100">
          <Link href="/guide" className="gap-2 text-slate-600">
            <ArrowLeft className="h-4 w-4" />
            Retour au guide
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-sm border p-8 md:p-12">
          {/* Header Article */}
          <header className="mb-10 pb-10 border-b">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
                <Tag className="h-3.5 w-3.5" />
                {guide.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {guide.date}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {guide.author}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {guide.title}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              {guide.description}
            </p>
          </header>

          {/* Content */}
          <div 
            className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-bold prose-headings:text-slate-900 
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-6 prose-ul:space-y-2
              prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-6 prose-ol:space-y-2
              prose-li:text-slate-700
              prose-strong:text-slate-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: guide.content }} 
          />
        </article>

        {/* CTA Footer */}
        <div className="mt-12 bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Besoin d&apos;aide pour votre projet ?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Nos experts sont là pour vous conseiller sur les normes et le choix des matériaux adaptés à votre configuration.
          </p>
          <Button variant="default" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
            <Link href="/devis-garde-corps">
              Demander mon devis gratuit
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
