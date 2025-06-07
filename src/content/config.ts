import { allCategories } from "@/lib/categories";
import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(["society", "spirituality", "music", "tech"]), // adapte cette liste
  emoji: z.string().optional(),
  type: z.string(),
  pubDate: z.coerce.date(),
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
});

export const collections = Object.fromEntries(
  allCategories.map((category) => [category, defineCollection({ schema })])
);
