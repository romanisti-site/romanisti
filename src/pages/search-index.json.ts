import type { APIRoute } from 'astro';
import { createSearchIndex } from '@/lib/search';

export const GET: APIRoute = async () => {
  const records = await createSearchIndex();

  return new Response(JSON.stringify(records), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
