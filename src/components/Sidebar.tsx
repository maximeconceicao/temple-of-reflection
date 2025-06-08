import { Github, Sprout } from "lucide-react";
import { CategoryList } from "./CategoryList";
import { ModeToggle } from "./ModeToggle";
import { SearchBar } from "./SearchBar";
import { Button } from "./ui/button";
import type { CategoryCount } from "@/lib/categories";

export function Sidebar({ categories }: { categories: CategoryCount[] }) {
  return (
    <div className="flex h-full w-64 flex-col justify-between gap-8 border-r border-border pt-24 pb-8 pl-8 pr-15">
      <div>
        <div className="flex flex-row items-center mb-3">
          <a href={`/`}>
            <h1 className="font-semibold text-2xs">
              Temple of <br />
              Reflection
            </h1>
          </a>
          {/* <Sprout className="w-4 h-4 pl-1" /> */}
        </div>
        <SearchBar />
      </div>

      <div>
        <h3 className="mb-3 text-2xs font-semibold">Catégories</h3>
        <CategoryList categories={categories} />
      </div>

      <div className="flex flex-row gap-2">
        <Button variant="outline" size="icon">
          <Github />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
