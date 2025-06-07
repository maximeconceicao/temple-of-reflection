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

export type CategoryCount = {
  category: GardenCategory;
  count: number;
};
