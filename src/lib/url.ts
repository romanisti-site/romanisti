import { site } from '@/config/site';

export function canonicalUrl(pathname = '/'): URL {
  return new URL(pathname, site.url);
}
