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
  const [observations, libraryEntries] = await Promise.all([
    getPublishedObservations(),
    getLibraryEntries(),
  ]);

  const observationRecords: SearchRecord[] = observations.map(
    (entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      href: `/observations/${entry.id}/`,
      type: 'observation',
      topics: entry.data.topics,
    }),
  );

  const libraryRecords: SearchRecord[] = libraryEntries.map(
    (entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      href: `/library/${entry.id}/`,
      type: 'library',
      topics: [entry.data.category, entry.data.status],
    }),
  );

  return [...observationRecords, ...libraryRecords];
}
