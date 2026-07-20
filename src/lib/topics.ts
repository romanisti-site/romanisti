import type { CollectionEntry } from 'astro:content';
import { getPublishedObservations } from '@/lib/content';

export type ObservationEntry = CollectionEntry<'observations'>;

export interface TopicRecord {
  slug: string;
  label: string;
  count: number;
  entries: ObservationEntry[];
}

export function topicSlug(value: string): string {
  return value
    .normalize('NFKD')
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function topicLabel(value: string): string {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map(
      (part) =>
        part.charAt(0).toLocaleUpperCase() + part.slice(1),
    )
    .join(' ');
}

export async function getTopics(): Promise<TopicRecord[]> {
  const observations = await getPublishedObservations();
  const groups = new Map<string, ObservationEntry[]>();

  for (const entry of observations) {
    for (const topic of entry.data.topics) {
      const slug = topicSlug(topic);
      const entries = groups.get(slug) ?? [];
      entries.push(entry);
      groups.set(slug, entries);
    }
  }

  return [...groups.entries()]
    .map(([slug, entries]): TopicRecord => ({
      slug,
      label: topicLabel(slug),
      count: entries.length,
      entries,
    }))
    .sort((left, right) =>
      left.label.localeCompare(right.label),
    );
}
