import { getCollection, type CollectionEntry } from 'astro:content';

export type LibraryEntry = CollectionEntry<'library'>;

export async function getLibraryEntries(): Promise<LibraryEntry[]> {
  const entries = await getCollection('library');
  return entries.sort((left, right) => left.data.order - right.data.order);
}

export async function getLibraryByCategory() {
  const entries = await getLibraryEntries();

  return entries.reduce<Record<string, LibraryEntry[]>>((groups, entry) => {
    const category = entry.data.category;
    groups[category] ??= [];
    groups[category].push(entry);
    return groups;
  }, {});
}
