import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/summary.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: image(),
  }),
});

export const collections = { projects };
