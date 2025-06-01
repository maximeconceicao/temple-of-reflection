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
import { GardenTheme, gardenThemeLabelMap } from "@/constants";

const iconMap = {
  [GardenTheme.SPIRITUALITY]: Shell,
  [GardenTheme.MUSIC]: Guitar,
  [GardenTheme.SOCIETY]: PersonStanding,
  [GardenTheme.TECH]: Binary,
};

const colorMap = {
  [GardenTheme.SPIRITUALITY]: "chart-1",
  [GardenTheme.MUSIC]: "chart-5",
  [GardenTheme.SOCIETY]: "chart-3",
  [GardenTheme.TECH]: "chart-2",
};

export function Sidebar({ categories }) {
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
          {categories.map(({ theme, count }) => {
            const Icon = iconMap[theme] || Sprout;
            const color = colorMap[theme] || "chart-0";
            const label = gardenThemeLabelMap[theme] || theme;

            return (
              <li key={theme}>
                <a
                  href={`/${theme}`}
                  className="center inline-flex items-center gap-2 py-1 text-sm"
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ stroke: `var(--${color})` }}
                  />
                  <span>{label.charAt(0).toUpperCase() + label.slice(1)}</span>
                  <span className="text-xs text-black-600">({count})</span>
                </a>
              </li>
            );
          })}
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

export default Sidebar;
