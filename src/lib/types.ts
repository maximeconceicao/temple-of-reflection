import type { CollectionEntry } from "astro:content";
import type { GardenCategory } from "./categories";

export type TocItem = {
  depth: number;
  slug: string;
  text: string;
};

export type GardenEntry = CollectionEntry<GardenCategory>;
