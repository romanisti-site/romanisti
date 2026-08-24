import { site } from '@/config/site';

export function canonicalUrl(pathname = '/'): URL {
  return new URL(pathname, site.url);
}

export function observationSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/i, '').replace(/^\/+|\/+$/g, '');
}
