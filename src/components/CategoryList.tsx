import {
  categoryMeta,
  GardenCategory,
  type CategoryCount,
} from "@/lib/categories";
import { Sprout } from "lucide-react";

type CategoryListProps = {
  categories: CategoryCount[];
  className?: string;
};

export function CategoryList({
  categories,
  className = "",
}: CategoryListProps) {
  return (
    <ul className={className}>
      {categories.map(({ category, count }) => {
        const Icon = categoryMeta[category].icon || Sprout;
        const color = categoryMeta[category].color || "chart-0";
        const label = categoryMeta[category].label || category;

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
