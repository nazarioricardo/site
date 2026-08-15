import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';


const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    body: z.string(),
    thumbnail: z.array(z.string()),
  }),
});

export const collections = { projects };
