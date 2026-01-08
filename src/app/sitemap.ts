import { MetadataRoute } from 'next';
import { client, isSanityConfigured } from '@/sanity/lib/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.thelegalchambers.org';
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clients`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/retainers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-team`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/newsreport`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/notedjudgement`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Dynamic pages from Sanity
  const dynamicPages: MetadataRoute.Sitemap = [];

  if (isSanityConfigured()) {
    try {
      // Fetch blogs
      const blogs = await client.fetch(
        `*[_type == "blog" && defined(slug.current)] {
          "slug": slug.current,
          _updatedAt
        }`,
        {},
        { cache: 'no-store' }
      );

      blogs.forEach((blog: any) => {
        dynamicPages.push({
          url: `${baseUrl}/resources/blogs/${blog.slug}`,
          lastModified: blog._updatedAt || currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        });
      });

      // Fetch media
      const media = await client.fetch(
        `*[_type == "media"] {
          _id,
          _updatedAt
        }`,
        {},
        { cache: 'no-store' }
      );

      media.forEach((item: any) => {
        dynamicPages.push({
          url: `${baseUrl}/resources/media/${item._id}`,
          lastModified: item._updatedAt || currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        });
      });

      // Fetch judgements
      const judgements = await client.fetch(
        `*[_type == "judgement"] {
          _id,
          _updatedAt
        }`,
        {},
        { cache: 'no-store' }
      );

      judgements.forEach((judgement: any) => {
        dynamicPages.push({
          url: `${baseUrl}/resources/judgements/${judgement._id}`,
          lastModified: judgement._updatedAt || currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        });
      });
    } catch (error) {
      console.error('Error fetching dynamic content for sitemap:', error);
    }
  }

  return [...staticPages, ...dynamicPages];
}

