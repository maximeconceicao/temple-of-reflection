import { allCategories, GardenCategory, GardenType } from "@/lib/categories";
import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.nativeEnum(GardenCategory), // adapte cette liste
  emoji: z.string().optional(),
  type: z.nativeEnum(GardenType),
  tags: z.array(z.string()).optional(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImageLight: z.string().optional(),
  heroImageDark: z.string().optional(),
});

export const collections = Object.fromEntries(
  allCategories.map((category) => [category, defineCollection({ schema })])
);
