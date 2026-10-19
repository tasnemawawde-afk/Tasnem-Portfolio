import type { MetadataRoute } from 'next';
import { SITE_URL } from '../content/site';
import { SITE_PAGES } from '../content/sections';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...SITE_PAGES.map((page) => ({
      url: `${SITE_URL}${page.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
