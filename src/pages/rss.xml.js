import rss from '@astrojs/rss';
import { getPublishedObservations } from '@/lib/content';
import { site } from '@/config/site';

export async function GET(context) {
  const observations = await getPublishedObservations();

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: observations.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.publishedAt,
      link: `/observations/${entry.id}/`,
    })),
  });
}
