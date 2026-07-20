import type { APIRoute } from 'astro';
import { site } from '@/config/site';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify(
      {
        institution: site.name,
        edition: site.edition,
        repositoryVersion: site.repositoryVersion,
        generatedAt: new Date().toISOString(),
      },
      null,
      2,
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'public, max-age=300',
      },
    },
  );
