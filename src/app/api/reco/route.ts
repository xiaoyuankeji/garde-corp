import { NextRequest, NextResponse } from "next/server";
import { MATERIALS, USE_CASES, COMPANY } from "@/lib/constants";

interface RecoInput {
  useCase: string;
  material: string;
  installationType?: string;
  estimatedLength?: string;
  zipCode?: string;
}

interface RecoItem {
  type: 'landing' | 'project' | 'guide';
  title: string;
  url: string;
  reason: string;
  score: number;
}

// Page database for matching
const pages = [
  // Material pages
  { slug: 'garde-corps-inox', material: 'inox', useCases: ['balcon', 'terrasse', 'escalier', 'piscine', 'mezzanine'], title: 'Garde-Corps Inox', type: 'landing' as const },
  { slug: 'garde-corps-verre', material: 'verre', useCases: ['balcon', 'terrasse', 'piscine', 'mezzanine'], title: 'Garde-Corps Verre', type: 'landing' as const },
  { slug: 'garde-corps-aluminium', material: 'aluminium', useCases: ['balcon', 'terrasse'], title: 'Garde-Corps Aluminium', type: 'landing' as const },
  { slug: 'garde-corps-sur-mesure', material: 'mixte', useCases: ['balcon', 'terrasse', 'escalier', 'piscine', 'mezzanine'], title: 'Garde-Corps Sur Mesure', type: 'landing' as const },
  
  // Use case pages
  { slug: 'garde-corps-balcon', material: null, useCases: ['balcon'], title: 'Garde-Corps Balcon', type: 'landing' as const },
  { slug: 'garde-corps-terrasse', material: null, useCases: ['terrasse'], title: 'Garde-Corps Terrasse', type: 'landing' as const },
  { slug: 'garde-corps-escalier', material: null, useCases: ['escalier'], title: 'Garde-Corps Escalier', type: 'landing' as const },
  { slug: 'garde-corps-piscine', material: null, useCases: ['piscine'], title: 'Garde-Corps Piscine', type: 'landing' as const },
  
  // Guides
  { slug: 'guide/norme-garde-corps-nf-p01-012', material: null, useCases: [], title: 'Norme NF P01-012', type: 'guide' as const },
  { slug: 'guide/pose-au-sol-vs-nez-de-dalle', material: null, useCases: [], title: 'Pose au Sol vs Nez de Dalle', type: 'guide' as const },
];

function calculateScore(page: typeof pages[0], input: RecoInput): number {
  let score = 0;
  
  // Material match (40 points)
  if (input.material && page.material === input.material) {
    score += 40;
  } else if (input.material && page.material === 'mixte') {
    score += 20; // Sur mesure is always somewhat relevant
  }
  
  // Use case match (40 points)
  if (input.useCase && page.useCases.includes(input.useCase)) {
    score += 40;
  }
  
  // Special cases
  if (input.useCase === 'piscine' && page.slug.includes('piscine')) {
    score += 10; // Bonus for exact piscine match (safety important)
  }
  
  // Local bonus for Nord region (10 points)
  if (input.zipCode && (input.zipCode.startsWith('59') || input.zipCode.startsWith('62'))) {
    score += 10;
  }
  
  return score;
}

function generateReason(page: typeof pages[0], input: RecoInput): string {
  const reasons: string[] = [];
  
  if (page.material && page.material === input.material) {
    const materialName = MATERIALS.find(m => m.id === input.material)?.name || input.material;
    reasons.push(`Matériau ${materialName} adapté à votre choix`);
  }
  
  if (input.useCase && page.useCases.includes(input.useCase)) {
    const useCaseName = USE_CASES.find(uc => uc.id === input.useCase)?.name || input.useCase;
    reasons.push(`Solution pour ${useCaseName.toLowerCase()}`);
  }
  
  if (page.type === 'guide') {
    reasons.push('Guide pratique pour votre projet');
  }
  
  if (reasons.length === 0) {
    reasons.push('Recommandation basée sur votre profil');
  }
  
  return reasons.join(' • ');
}

export async function POST(request: NextRequest) {
  try {
    const body: RecoInput = await request.json();
    const { useCase, material, installationType, estimatedLength, zipCode } = body;

    // Calculate scores for all pages
    const scoredPages: RecoItem[] = pages
      .map(page => ({
        type: page.type,
        title: page.title,
        url: `/${page.slug}`,
        reason: generateReason(page, body),
        score: calculateScore(page, body)
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    // Always add a guide if not present
    const hasGuide = scoredPages.some(p => p.type === 'guide');
    if (!hasGuide && installationType) {
      scoredPages.push({
        type: 'guide',
        title: 'Pose au Sol vs Nez de Dalle',
        url: '/guide/pose-au-sol-vs-nez-de-dalle',
        reason: 'Guide sur les types de pose',
        score: 15
      });
    }

    // Build response
    const response = {
      items: scoredPages.slice(0, 3),
      cta: {
        phone: COMPANY.phone,
        phoneLink: COMPANY.phoneLink,
        devisUrl: '/devis-garde-corps'
      },
      summary: buildSummary(body)
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Reco error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la recommandation" },
      { status: 500 }
    );
  }
}

function buildSummary(input: RecoInput): string {
  const parts: string[] = [];
  
  if (input.useCase) {
    const useCaseName = USE_CASES.find(uc => uc.id === input.useCase)?.name;
    if (useCaseName) parts.push(`garde-corps pour ${useCaseName.toLowerCase()}`);
  }
  
  if (input.material) {
    const materialName = MATERIALS.find(m => m.id === input.material)?.name;
    if (materialName) parts.push(`en ${materialName.toLowerCase()}`);
  }
  
  if (input.estimatedLength) {
    parts.push(`environ ${input.estimatedLength}`);
  }
  
  if (parts.length === 0) {
    return "Projet de garde-corps sur mesure";
  }
  
  return `Votre projet : ${parts.join(' ')}`;
}
