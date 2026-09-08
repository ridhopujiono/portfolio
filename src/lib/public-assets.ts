// Build-time helpers: import from Astro frontmatter, never from browser scripts.
import { closeSync, openSync, readSync, realpathSync, statSync } from 'node:fs';
import { resolve, sep } from 'node:path';
import type { SiteData } from '../data/site';
import { withBase } from './urls';

/** Show a CV only for an existing local PDF inside the project's public directory. */
export function getPublicCvUrl(cvPath: string | null): string | null {
  if (!cvPath) return null;

  let file: number | undefined;
  try {
    const path = decodeURIComponent(cvPath.trim());
    if (!/^\/(?!\/)[^?#]+\.pdf$/i.test(path) || /[\\\u0000-\u001f]/.test(path)) return null;
    const segments = path.slice(1).split('/');
    if (segments.some(segment => !segment || segment === '.' || segment === '..')) return null;

    const publicDirectory = realpathSync(resolve('public'));
    const destination = realpathSync(resolve(publicDirectory, ...segments));
    if (!destination.startsWith(`${publicDirectory}${sep}`) || !statSync(destination).isFile()) return null;

    file = openSync(destination, 'r');
    const signature = Buffer.alloc(5);
    if (readSync(file, signature, 0, signature.length, 0) !== 5 || signature.toString('ascii') !== '%PDF-') return null;
    return withBase(segments.map(segment => encodeURIComponent(segment)).join('/'));
  } catch {
    // Missing, unreadable, or malformed optional files must not produce a broken CTA.
    return null;
  } finally {
    if (file !== undefined) closeSync(file);
  }
}

export interface PublicSocialLink {
  label: 'GitHub' | 'LinkedIn' | 'Instagram' | 'Threads' | 'Email' | 'WhatsApp';
  href: string;
}

export function getPublicSocialLinks(site: SiteData): PublicSocialLink[] {
  const candidates: [PublicSocialLink['label'], string | null][] = [
    ['GitHub', site.socialLinks.github],
    ['LinkedIn', site.socialLinks.linkedin],
    ['Instagram', site.socialLinks.instagram],
    ['Threads', site.socialLinks.threads],
    ['Email', site.contactEmail ? `mailto:${site.contactEmail}` : null],
    ['WhatsApp', site.whatsappNumber ? `https://wa.me/${site.whatsappNumber}` : null],
  ];

  return candidates.flatMap(([label, value]) => {
    if (!value?.trim()) return [];
    try {
      const url = new URL(value);
      if (!['https:', 'http:', 'mailto:', 'whatsapp:'].includes(url.protocol) || url.username || url.password) return [];
      return [{ label, href: url.href }];
    } catch {
      return [];
    }
  });
}
