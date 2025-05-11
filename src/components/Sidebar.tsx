import {
  Github,
  PersonStanding,
  Guitar,
  Binary,
  Shell,
  Sprout,
} from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { SearchBar } from "./SearchBar";
import { GardenCategory } from "@/constants";

const categoriesWithCounts = [
  {
    category: GardenCategory.SPIRITUALITY,
    label: "Spiritualité",
    count: 3,
    color: "chart-1",
    icon: Shell,
  },
  {
    category: GardenCategory.MUSIC,
    label: "Musique",
    count: 1,
    color: "chart-5",
    icon: Guitar,
  },
  {
    category: GardenCategory.SOCIETY,
    label: "Société",
    count: 3,
    color: "chart-3",
    icon: PersonStanding,
  },
  {
    category: GardenCategory.TECH,
    label: "Tech",
    count: 4,
    color: "chart-2",
    icon: Binary,
  },
];

// Sort the array based on entryCounts
categoriesWithCounts.sort((a, b) => b.count - a.count);

export function Sidebar() {
  return (
    <div className="flex h-full flex-col justify-between gap-8 border-r border-neutral-200 pt-24 pb-8 px-8">
      <div>
        <div className="flex flex-row items-center mb-3">
          <h1 className="font-semibold text-2xs">Digital Garden</h1>
          <Sprout className="w-4 h-4 pl-1" />
        </div>
        <SearchBar />
      </div>

      <div>
        <h3 className="mb-3 text-2xs font-semibold">Catégories</h3>
        <ul>
          {categoriesWithCounts.map(
            ({ category, label, count, color, icon: Icon }) => (
              <li key={category}>
                <a
                  href={`/garden/${category}`}
                  className="center inline-flex items-center gap-2 py-1 text-sm"
                >
                  <Icon className="w-4 h-4" style={{ stroke: `var(--${color})` }} />
                  <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
                  <span className="text-xs text-black-600">({count})</span>
                </a>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="flex flex-row justify-between">
        <Button variant="outline" size="icon">
          <Github />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
