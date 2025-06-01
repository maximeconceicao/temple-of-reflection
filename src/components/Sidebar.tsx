import { Github, Sprout } from "lucide-react";
import { CategoryList } from "./CategoryList";
import { ModeToggle } from "./ModeToggle";
import { SearchBar } from "./SearchBar";
import { Button } from "./ui/button";

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
        <CategoryList categories={categories} />
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
