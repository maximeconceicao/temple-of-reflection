// components/ThemeList.tsx

import { GardenCategory, gardenCategoryLabelMap } from "@/constants";
import { PersonStanding, Guitar, Binary, Shell, Sprout } from "lucide-react";

const iconMap = {
  [GardenCategory.SPIRITUALITY]: Shell,
  [GardenCategory.MUSIC]: Guitar,
  [GardenCategory.SOCIETY]: PersonStanding,
  [GardenCategory.TECH]: Binary,
};

const colorMap = {
  [GardenCategory.SPIRITUALITY]: "chart-1",
  [GardenCategory.MUSIC]: "chart-5",
  [GardenCategory.SOCIETY]: "chart-3",
  [GardenCategory.TECH]: "chart-2",
};

type CategoryListProps = {
  categories: { category: GardenCategory; count: number }[];
  className?: string;
};

export function CategoryList({
  categories,
  className = "",
}: CategoryListProps) {
  console.log("categories", categories);
  return (
    <ul className={className}>
      {categories.map(({ category, count }) => {
        const Icon = iconMap[category] || Sprout;
        const color = colorMap[category] || "chart-0";
        const label = gardenCategoryLabelMap[category] || category;

        return (
          <li key={category}>
            <a
              href={`/${category}`}
              className="center inline-flex items-center gap-2 py-1 text-sm"
            >
              <Icon className="w-4 h-4" style={{ stroke: `var(--${color})` }} />
              <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
              <span className="text-xs text-black-600">({count})</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
