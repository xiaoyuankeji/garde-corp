import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://garde-corps.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    '',
    '/garde-corps',
    '/garde-corps-inox',
    '/garde-corps-verre',
    '/garde-corps-aluminium',
    '/garde-corps-sur-mesure',
    '/garde-corps-balcon',
    '/garde-corps-terrasse',
    '/garde-corps-escalier',
    '/garde-corps-piscine',
    '/realisations',
    '/guide',
    '/devis-garde-corps',
    '/contact',
  ];

  const staticSitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : path.includes('devis') ? 0.9 : 0.8,
  }));

  // In production, you would also fetch dynamic pages from database
  // const pages = await Page.find({ published: true }).lean();
  // const projects = await Project.find({ published: true }).lean();

  return staticSitemap;
}
