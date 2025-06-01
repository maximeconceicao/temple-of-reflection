import { defineCollection, z } from "astro:content";

const gardenCollection = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    theme: z.enum(["society", "spirituality", "music", "tech"]), // adapte cette liste
    emoji: z.string().optional(),
    type: z.string(),
    // Transform string to Date object
    // pubDate: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
    // heroImage: z.string().optional(),
    // breadcrumbs: z
    //   .array(
    //     z.object({
    //       name: z.string(),
    //       url: z.string(),
    //     })
    //   )
    //   .optional(),
  }),
});

export const collections = { garden: gardenCollection };
