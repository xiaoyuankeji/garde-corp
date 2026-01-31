// Company Information
export const COMPANY = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'STICK-IT FRANCE',
  fullName: 'GROUPE TX INOX / STICK-IT FRANCE',
  phone: process.env.NEXT_PUBLIC_COMPANY_PHONE || '03 20 34 50 30',
  phoneLink: 'tel:+33320345030',
  email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@stickit-france.com',
  address: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Z.A. de la Broye, Rue du Chaufour, 59710 Ennevelin',
  city: 'Ennevelin',
  postalCode: '59710',
  region: 'Nord',
  country: 'France',
  openingHours: {
    weekdays: '8h00 - 18h00',
    saturday: '9h00 - 12h00',
    sunday: 'Fermé'
  }
};

// Materials
export const MATERIALS = [
  { 
    id: 'inox', 
    name: 'Inox', 
    slug: 'garde-corps-inox', 
    description: 'Garde-corps en acier inoxydable',
    image: '/images/inox-cables.jpg'
  },
  { 
    id: 'verre', 
    name: 'Verre', 
    slug: 'garde-corps-verre', 
    description: 'Garde-corps tout verre ou avec poteaux',
    image: '/images/verre-hero.jpg'
  },
  { 
    id: 'aluminium', 
    name: 'Aluminium', 
    slug: 'garde-corps-aluminium', 
    description: 'Garde-corps en aluminium thermolaqué',
    image: '/images/alu-tole.jpg'
  },
  { 
    id: 'mixte', 
    name: 'Mixte', 
    slug: 'garde-corps-sur-mesure', 
    description: 'Combinaisons sur mesure',
    image: '/images/verre-points.jpg'
  }
];

// Use Cases / Scenes
export const USE_CASES = [
  { id: 'balcon', name: 'Balcon', slug: 'garde-corps-balcon', icon: '🏠' },
  { id: 'terrasse', name: 'Terrasse', slug: 'garde-corps-terrasse', icon: '☀️' },
  { id: 'escalier', name: 'Escalier', slug: 'garde-corps-escalier', icon: '🪜' },
  { id: 'piscine', name: 'Piscine', slug: 'garde-corps-piscine', icon: '🏊' },
  { id: 'mezzanine', name: 'Mezzanine', slug: 'garde-corps-mezzanine', icon: '🏗️' }
];

// Installation Types
export const INSTALLATION_TYPES = [
  { id: 'au-sol', name: 'Pose au sol', description: 'Fixation sur le sol de la terrasse/balcon' },
  { id: 'nez-de-dalle', name: 'Nez de dalle', description: 'Fixation en façade de la dalle' },
  { id: 'a-l-anglaise', name: 'À l\'anglaise', description: 'Fixation latérale' }
];

// Navigation
export const NAV_ITEMS = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Garde-corps',
    href: '/garde-corps',
    children: [
      { name: 'Inox', href: '/garde-corps-inox' },
      { name: 'Verre', href: '/garde-corps-verre' },
      { name: 'Aluminium', href: '/garde-corps-aluminium' },
      { name: 'Sur mesure', href: '/garde-corps-sur-mesure' }
    ]
  },
  {
    name: 'Usages',
    href: '#',
    children: [
      { name: 'Balcon', href: '/garde-corps-balcon' },
      { name: 'Terrasse', href: '/garde-corps-terrasse' },
      { name: 'Escalier', href: '/garde-corps-escalier' },
      { name: 'Piscine', href: '/garde-corps-piscine' }
    ]
  },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'Guide & Normes', href: '/guide' },
  { name: 'Devis', href: '/devis-garde-corps' },
  { name: 'Contact', href: '/contact' }
];

// SEO Defaults
export const SEO = {
  siteName: 'Garde-Corps Sur Mesure | STICK-IT FRANCE',
  defaultTitle: 'Garde-Corps Inox, Verre & Aluminium Sur Mesure | Nord & Lille',
  defaultDescription: 'Spécialiste garde-corps sur mesure en inox, verre et aluminium. Devis gratuit pour balcon, terrasse, escalier, piscine. Installation professionnelle Nord & région lilloise.',
  defaultKeywords: ['garde-corps', 'garde corps', 'garde-corps inox', 'garde-corps verre', 'garde-corps aluminium', 'garde-corps sur mesure', 'devis garde-corps', 'prix garde-corps', 'Nord', 'Lille'],
  locale: 'fr_FR',
  type: 'website'
};
