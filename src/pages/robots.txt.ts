import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  let robotsTxt = `User-agent: *
Allow: /
Disallow: /dev/
`;

  if (site.url) {
    robotsTxt += `\nSitemap: ${new URL('/sitemap.xml', site.url).href}\n`;
  }

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
