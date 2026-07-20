import { getCollection, type CollectionEntry } from 'astro:content';

export type LibraryEntry = CollectionEntry<'library'>;
export type LibraryCategory = LibraryEntry['data']['category'];

export const libraryCategories: readonly LibraryCategory[] = [
  'codex',
  'constitution',
  'editorial',
  'fabrication',
];

export async function getLibraryEntries(): Promise<LibraryEntry[]> {
  const entries = await getCollection('library');

  return [...entries].sort(
    (left, right) => left.data.order - right.data.order,
  );
}

export async function getLibraryByCategory(): Promise<
  Record<LibraryCategory, LibraryEntry[]>
> {
  const groups: Record<LibraryCategory, LibraryEntry[]> = {
    codex: [],
    constitution: [],
    editorial: [],
    fabrication: [],
  };

  for (const entry of await getLibraryEntries()) {
    groups[entry.data.category].push(entry);
  }

  return groups;
}
