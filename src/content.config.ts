import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
  title: z.string().max(70).optional(),
  description: z.string().max(170).optional(),
  image: z.string().optional(),
  noindex: z.boolean().default(false),
});

const observations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/observations' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(220),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Romanisti'),
    language: z.enum(['en', 'it']).default('en'),
    status: z.enum(['draft', 'published']).default('draft'),
    topics: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    seo: seoSchema.optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().nonnegative().default(0),
    language: z.enum(['en', 'it']).default('en'),
    seo: seoSchema.optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
  }),
});

export const collections = { observations, pages, authors };
