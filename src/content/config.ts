import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.enum(['Article', 'Research Note', 'Build Log', 'Learning', 'Explainer']),
      category: z.enum(['Engineering', 'AI & ML', 'Research', 'Projects', 'Learning']),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      readingTime: z.string(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).optional().default([]),
      coverImage: z.string().optional(),
      canonicalUrl: z.string().url().optional()
    })
});

export const collections = { writing };
