/** Resolve site-local destinations against Astro's configured base path. */
export function withBase(path: string): string {
  const base = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
  return `${base}${path.replace(/^\/+/, '')}`;
}
