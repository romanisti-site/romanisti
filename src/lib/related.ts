import type { CollectionEntry } from 'astro:content';
import { getPublishedObservations } from '@/lib/content';

export async function getRelatedObservations(
  current: CollectionEntry<'observations'>,
  limit = 3,
): Promise<CollectionEntry<'observations'>[]> {
  const entries = await getPublishedObservations();
  const currentTopics = new Set(current.data.topics);

  return entries
    .filter((entry) => entry.id !== current.id)
    .map((entry) => ({
      entry,
      score: entry.data.topics.reduce(
        (total, topic) => total + (currentTopics.has(topic) ? 1 : 0),
        0,
      ),
    }))
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return right.entry.data.publishedAt.getTime() - left.entry.data.publishedAt.getTime();
    })
    .slice(0, limit)
    .map(({ entry }) => entry);
}
