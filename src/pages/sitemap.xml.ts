import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

export const GET: APIRoute = async () => {
  // If we don't have a known production URL yet, we return 404 or empty so we don't generate invalid sitemaps
  if (!site.url) {
    return new Response('Production URL not configured.', { status: 404 });
  }

  const projects = await getCollection('projects', 
    ({ data }) => data.publicationStatus === 'published' && data.detailPageReady
  );

  const urls = [
    { loc: new URL('/', site.url).href },
    { loc: new URL('/projects/', site.url).href },
  ];

  for (const project of projects) {
    urls.push({
      loc: new URL(`/projects/${project.id}/`, site.url).href,
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(u => `<url><loc>${u.loc}</loc></url>`).join('\n  ')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
