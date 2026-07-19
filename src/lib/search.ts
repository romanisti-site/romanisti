import { getPublishedObservations } from '@/lib/content';
import { getLibraryEntries } from '@/lib/library';

export interface SearchRecord {
  title: string;
  description: string;
  href: string;
  type: 'observation' | 'library';
  topics: string[];
}

export async function createSearchIndex(): Promise<SearchRecord[]> {
  const [observations, library] = await Promise.all([
    getPublishedObservations(),
    getLibraryEntries(),
  ]);

  return [
    ...observations.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      href: `/observations/${entry.id}/`,
      type: 'observation' as const,
      topics: entry.data.topics,
    })),
    ...library.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      href: `/library/${entry.id}/`,
      type: 'library' as const,
      topics: [entry.data.category, entry.data.status],
    })),
  ];
}
