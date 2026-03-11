import { defineCollection, z } from 'astro:content';

const tip = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    act: z.number().min(1).max(4),
    category: z.enum(['setup', 'workflow', 'power-user', 'advanced']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    tags: z.array(z.string()),
    timestamp: z.string(),
    description: z.string(),
    related: z.array(z.number()).optional(),
  }),
});

export const collections = { tips: tip };
