import { getCollection } from 'astro:content';

export async function getPublishedObservations() {
  const entries = await getCollection(
    'observations',
    ({ data }) => data.status === 'published',
  );

  return entries.sort(
    (left, right) => right.data.publishedAt.getTime() - left.data.publishedAt.getTime(),
  );
}

export async function getOrderedPages() {
  const entries = await getCollection('pages');
  return entries.sort((left, right) => left.data.order - right.data.order);
}
