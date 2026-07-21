import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const published = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'AnshumanHQ Journal',
    description: 'Notes from building, learning, and investigating — software engineering, AI, physics, and research.',
    site: context.site,
    items: published.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/writing/${entry.slug}`,
      categories: [entry.data.category, entry.data.type]
    })),
    customData: `<language>en-us</language>`
  });
}
