import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const nonEmptyText = z.string().trim().min(1);
// Preserve month-level precision; never infer a day from a contribution report.
const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use YYYY-MM.');
const publicUrl = z.url({ protocol: /^https?$/ });

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: nonEmptyText,
      summary: nonEmptyText,
      category: z.enum(['professional', 'personal', 'freelance']),
      projectStatus: z.enum(['planned', 'in-progress', 'production', 'completed', 'unknown']),
      publicationStatus: z.enum(['draft', 'published']).default('draft'),
      featured: z.boolean().default(false),
      detailPageReady: z.boolean().default(false),
      isConfidential: z.boolean().default(false),
      sortOrder: z.number().int().nonnegative().default(100),
      roles: z.array(nonEmptyText),
      technologies: z.array(nonEmptyText),
      startDate: yearMonth.optional(),
      endDate: yearMonth.optional(),
      cover: image().optional(),
      coverAlt: nonEmptyText.optional(),
      previews: z.array(
        z.object({
          src: image(),
          alt: nonEmptyText,
          orientation: z.enum(['landscape', 'portrait']).default('landscape'),
        })
      ).optional(),
      demoUrl: publicUrl.optional(),
      repositoryUrl: publicUrl.optional(),
    }).superRefine((project, context) => {
      if (project.cover && !project.coverAlt) {
        context.addIssue({
          code: 'custom',
          path: ['coverAlt'],
          message: 'Provide meaningful alternative text when a cover is set.',
        });
      }
      if (project.startDate && project.endDate && project.endDate < project.startDate) {
        context.addIssue({
          code: 'custom',
          path: ['endDate'],
          message: 'End month must not be earlier than start month.',
        });
      }
    }),
});

export const collections = { projects };
