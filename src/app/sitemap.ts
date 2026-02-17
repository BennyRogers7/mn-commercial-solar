import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mncommercialsolar.com';

  const locations = [
    'minneapolis',
    'st-paul',
    'bloomington',
    'plymouth',
    'eagan',
    'woodbury',
    'maple-grove',
    'brooklyn-park',
    'st-louis-park',
    'edina',
    'roseville',
    'maplewood',
    'golden-valley',
    'shakopee',
    'wayzata',
    'chaska',
  ];

  const industries = [
    'warehouses',
    'manufacturing',
    'retail',
    'multi-family',
    'office-buildings',
    'healthcare',
    'hospitality',
    'agriculture',
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];

  const locationPages = locations.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const industryPages = industries.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...locationPages, ...industryPages];
}
