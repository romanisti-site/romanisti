import type { CollectionEntry } from 'astro:content';
import { getPublishedObservations } from '@/lib/content';
export interface ArchiveGroup { year: number; entries: CollectionEntry<'observations'>[]; }
export async function getObservationArchive(): Promise<ArchiveGroup[]> {
  const observations = await getPublishedObservations();
  const groups = new Map<number, CollectionEntry<'observations'>[]>();
  for (const entry of observations) {
    const year = entry.data.publishedAt.getUTCFullYear();
    const group = groups.get(year) ?? [];
    group.push(entry);
    groups.set(year, group);
  }
  return [...groups.entries()].map(([year, entries]) => ({year,entries})).sort((a,b)=>b.year-a.year);
}
