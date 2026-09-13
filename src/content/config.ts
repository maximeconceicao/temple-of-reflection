import { allCategories, GardenCategory, GardenType } from "@/lib/categories";
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.nativeEnum(GardenCategory),
  emoji: z.string().optional(),
  type: z.nativeEnum(GardenType),
  tags: z.array(z.string()).optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImageLight: z.string().optional(),
  heroImageDark: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

// Replicate the legacy content-collection slug so URLs stay identical after
// migrating to the Content Layer API: drop the extension and any trailing
// `/index`, while preserving the raw path (accents included, no slugify).
const generateId = ({ entry }: { entry: string }) =>
  entry.replace(/\.(md|mdx)$/i, "").replace(/(^|\/)index$/, "");

export const collections = Object.fromEntries(
  allCategories.map((category) => [
    category,
    defineCollection({
      loader: glob({
        pattern: "**/*.{md,mdx}",
        base: `./src/content/${category}`,
        generateId,
      }),
      schema,
    }),
  ])
);
