import {
  Binary,
  Guitar,
  PersonStanding,
  Shell,
  type LucideIcon,
} from "lucide-react";

export enum GardenCategory {
  SPIRITUALITY = "spirituality",
  SOCIETY = "society",
  MUSIC = "music",
  TECH = "tech",
}

export enum GardenType {
  BOOK = "book",
  NOTE = "note",
  CHEAT_SHEET = "cheat-sheet",
}

export const allCategories = Object.values(GardenCategory);

export const categoryMeta: Record<
  GardenCategory,
  { label: string; icon: LucideIcon; color: string }
> = {
  [GardenCategory.SPIRITUALITY]: {
    label: "Spiritualité",
    icon: Shell,
    color: "chart-1",
  },
  [GardenCategory.SOCIETY]: {
    label: "Société",
    icon: PersonStanding,
    color: "chart-3",
  },
  [GardenCategory.MUSIC]: { label: "Musique", icon: Guitar, color: "chart-5" },
  [GardenCategory.TECH]: { label: "Tech", icon: Binary, color: "chart-2" },
};

export const typeMeta: Record<GardenType, { label: string; color: string }> = {
  [GardenType.BOOK]: {
    label: "Livre",
    color: "chart-1",
  },
  [GardenType.NOTE]: {
    label: "Note",
    color: "chart-3",
  },
  [GardenType.CHEAT_SHEET]: {
    label: "Cheat Sheet",
    color: "chart-5",
  },
};

export type CategoryCount = {
  category: GardenCategory;
  count: number;
};
